import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getSponsorDetail } from '@/api/sponsor';
import { Loader } from '@/components/common/Loader';
import { styled } from 'stitches.config';
import { H2 } from '@/components/heading';
import Link from 'next/link';
import Image from 'next/image';
import SeoHeader from '@/components/layout/SeoHeader';
import { useRecoilValue } from 'recoil';
import { userState } from '@/stores/login';
import Button from '@/components/common/Button';

const PageWrapper = styled('div', {
  width: '100%',
  height: '100%',
  maxWidth: '1280px',
  margin: '0 auto',
  paddingLeft: '1rem',
  paddingRight: '1rem',

  '@bp2': {
    paddingLeft: '2rem',
    paddingRight: '2rem',
  },
});

const ImageWrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '300px',
  height: '300px',
  padding: '1rem',

  '@bp2': {
    width: '500px',
    height: '500px',
    padding: '2rem',
  },
});

const StyledH2 = styled(H2, {});

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '24px',

  '@bp2': {
    marginTop: 0,
    marginBottom: '100px',
  },
});

const Description = styled('div', {
  marginTop: '24px',
  whiteSpace: 'pre-wrap',

  '@bp2': {
    marginTop: '48px',
  },
});

const SponsorDetailPage = () => {
  const router = useRouter();
  const sponsorId = router.query.id;
  const loginUser = useRecoilValue(userState);

  const {
    error,
    data: sponsorDetail,
    isLoading,
  } = useQuery(
    ['sponsorDetail', sponsorId],
    () => getSponsorDetail(sponsorId as string),
    {
      enabled: !!sponsorId || typeof sponsorId === 'string',
    }
  );

  if (!sponsorDetail) return <></>;
  if (isLoading) return <Loader />;
  if (error) console.error(error);
  const { name, url, logo_image: logoImage, level, desc } = sponsorDetail;
  return (
    <>
      <SeoHeader
        title={`후원사 ${name}`}
        description="파이콘 한국 2023: 8월 11~13일 코엑스"
      />
      <PageWrapper>
        <StyledH2>{name}</StyledH2>
        <Content>
          <Link href={url || ''} target="_blank">
            <ImageWrapper>
              <Image
                src={logoImage || '/images/Logo.png'}
                alt={name}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </ImageWrapper>
          </Link>
          <Description>
            {!desc ? (
              '후원사에 대한 자세한 설명을 알고싶다면 후원사 로고를 클릭해주세요.'
            ) : (
              <div dangerouslySetInnerHTML={{ __html: desc }} />
            )}
          </Description>
        </Content>
        {loginUser.userid !== null &&
          sponsorDetail.creatorUserid === loginUser.userid && (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                reversal
                onClick={() => {
                  router.push(`/sponsor/edit/${sponsorDetail.id}`);
                }}
              >
                후원사 설명 수정
              </Button>
            </div>
          )}
      </PageWrapper>
    </>
  );
};

SponsorDetailPage.displayName = 'SponsorDetailPage';

export default SponsorDetailPage;
