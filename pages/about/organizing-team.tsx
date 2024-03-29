import Image from 'next/image';
import { styled } from '@stitches/react';

import { H2 } from '@/components/heading';
import SeoHeader from '@/components/layout/SeoHeader';

import { CommitteeList, CommitteePageInfo } from '@/constants/about';
import { Routes } from '@/constants/routes';

export const Container = styled('div', {
  maxWidth: '900px',
  margin: '0 auto',
  paddingTop: '1rem',
  marginTop: '2rem',
});
export const TitleWrapper = styled('div', {
  borderBottom: '4px solid $textPrimary',
  paddingBottom: '20px',
});
export const PageDescription = styled('p', {
  fontSize: '16px',
  marginTop: '1.5vh',
  whiteSpace: 'pre-wrap',
  lineHeight: '1.5rem',
});

const CommitteeWrapper = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  margin: '1.5rem 0',
});
const ImageBox = styled('div', {
  width: '6rem',
  height: '6rem',
  borderRadius: 100,
  flexShrink: 0,
  marginRight: '1rem',
  overflow: 'hidden',
});
const Content = styled('div', {
  width: 'calc(100% - 7rem)',
});
const Title = styled('div', {
  fontWeight: 600,
  bodyText: 1,
  padding: '0.2rem',
});
const Text = styled('div', {
  bodyText: 2,
  padding: '0.2rem',
  whiteSpace: 'pre-wrap',
});
const CommitteeInfoWrapper = styled('div', {
  padding: '2rem 0',
});
const OrganisingCommittee = () => {
  return (
    <>
      <SeoHeader
        title={Routes.ORGANIZING_TEAM.title}
        description="파이콘 한국 2023: 8월 11~13일 코엑스"
      />
      <Container>
        <TitleWrapper>
          <H2>{CommitteePageInfo.title}</H2>
        </TitleWrapper>
        <PageDescription>{CommitteePageInfo.description}</PageDescription>
        <CommitteeInfoWrapper>
          {CommitteeList.map((committee) => (
            <CommitteeWrapper key={committee.name}>
              <ImageBox>
                <Image
                  src={committee.image || '/images/Logo.png'}
                  width={100}
                  height={100}
                  alt="profile image"
                />
              </ImageBox>
              <Content>
                <Title>{committee.name}</Title>
                <Text>{committee.description}</Text>
              </Content>
            </CommitteeWrapper>
          ))}
        </CommitteeInfoWrapper>
      </Container>
    </>
  );
};

export default OrganisingCommittee;
