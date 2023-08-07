import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Patron } from '@/@types';
import { getPatrons } from '@/api/sponsor';
import { H2 } from '@/components/heading';
import SeoHeader from '@/components/layout/SeoHeader';
import { Routes } from '@/constants/routes';
import { styled } from '@/stitches.config';

const Container = styled('div', {
  maxWidth: '600px',
  margin: '0 auto',
  paddingTop: '1rem',
  marginTop: '2rem',
});

const Description = styled('p', {
  fontSize: '19px',
  marginTop: '1.5vh',
});

const H2Box = styled('div', {
  borderBottom: '4px solid $textPrimary',
  paddingBottom: '20px',
});

const PatronContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  margin: '15px 0px 15px 0',
});

const ImageBox = styled('div', {
  width: '6rem',
  height: '6rem',
  borderRadius: 100,
  flexShrink: 0,
  marginRight: '1rem',
  overflow: 'hidden',
});

const ContentBox = styled('div', {
  width: 'calc(100% - 7rem)',
});

const Title = styled('div', {
  bodyText: 1,
  padding: '0.2rem',
});
const Text = styled('div', {
  bodyText: 2,
  padding: '0.2rem',
  whiteSpace: 'pre-wrap',
});

const Patrons = () => {
  const [patronList, setPatronList] = useState([] as Patron[]);
  useEffect(() => {
    (async () => {
      const response = await getPatrons();
      setPatronList(response);
    })();
  }, []);

  return (
    <>
      <SeoHeader
        title={Routes.PRIVATE_SPONSORS.title}
        description="파이콘 한국 2023: 8월 11~13일 코엑스"
      />
      <Container>
        <H2Box>
          <H2>개인 후원자 목록</H2>
        </H2Box>
        <Description>
          파이콘 한국 2023을 후원해주신 개인 후원자 분들의 명단입니다.
          후원해주셔서 감사합니다.
        </Description>
        <div>
          {patronList.map(({ name, contribution_message }, index) => (
            <PatronContainer key={index}>
              <ImageBox>
                <Image
                  src="/images/Logo.png"
                  width={100}
                  height={100}
                  alt="profile image"
                />
              </ImageBox>
              <ContentBox>
                <Title>{name}</Title>
                <Text>{contribution_message}</Text>
              </ContentBox>
            </PatronContainer>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Patrons;
