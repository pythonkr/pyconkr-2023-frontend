import { ISponsorData, ISponsorListItem } from '@/@types/sponsor';
import { H3, H4 } from '@/components/heading';
import { sponsorLevelLabel } from '@/constants/sponsor/sponsorLevel';
import { styled } from 'stitches.config';
import Link from 'next/link';
import { SponsorLevelLabel } from '@/data/enums/SponsorLevelLabel';

const SponsorGroupContainer = styled('div', {
  marginTop: 32,
});
const SponsorLevelContainer = styled('div', {
  marginBottom: 8,
});

const SponsorGroup = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  flex: 'auto',
  gap: '2rem',
});

const SponsorGroupItem = styled('li', {
  width: '200px',
  height: '200px',
  textAlign: 'center',
  listStyle: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  variants: {
    isLogoBig: {
      true: {
        width: '400px',
        height: '200px',
        '@bp3': {
          height: '400px',
        },
      },
    },
  },
});

const SponsorImage = styled('img', {
  width: '100%',
  display: 'inline-block',
  verticalAlign: 'top',
});

const SponsorListItem: React.FC<{ sponsor: ISponsorData }> = (props: {
  sponsor: ISponsorData;
}) => {
  const { sponsor } = props;
  const bigLogoLevels = [
    SponsorLevelLabel.Keystone,
    SponsorLevelLabel.Diamond,
    SponsorLevelLabel.Sapphire,
    SponsorLevelLabel.Platinum,
  ];
  const isLogoBig = bigLogoLevels.includes(sponsor.level);

  return (
    <SponsorGroupItem isLogoBig={isLogoBig}>
      <Link href={`/sponsor/list/${sponsor.id}`}>
        <SponsorImage src={sponsor.logoImage} alt={sponsor.name} />
      </Link>
    </SponsorGroupItem>
  );
};

const SponsorList: React.FC<{ list: ISponsorListItem[] }> = (props: {
  list: ISponsorListItem[];
}) => {
  return (
    <div>
      <H3>후원사 목록</H3>
      <SponsorGroupContainer>
        {props.list.map((sponsorListItem: ISponsorListItem) => (
          <SponsorLevelContainer key={`level-${sponsorListItem.level}`}>
            <H4>
              {
                sponsorLevelLabel[
                  sponsorListItem.level as keyof typeof sponsorLevelLabel
                ]
              }
            </H4>
            <SponsorGroup>
              {sponsorListItem.list.map((item, index) => (
                <SponsorListItem
                  key={`sponsor-${item.level}-${index}`}
                  sponsor={item}
                />
              ))}
            </SponsorGroup>
          </SponsorLevelContainer>
        ))}
      </SponsorGroupContainer>
    </div>
  );
};

export default SponsorList;
