import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';

import { styled } from 'stitches.config';
import { H3 } from '@/components/heading';
import NavBar from '@/components/layout/NavBar';
import { Progressbar } from '@/components/common/Progressbar';
import { SponsorInfoInputBox } from '@/components/sponsor';

const ContentWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 8,
});

const SponsorInfoPage: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Sponsor | 정보 입력</title>
      </Head>
      <NavBar />
      <ContentWrapper>
        <Progressbar value={4} />
        <H3
          style={{ whiteSpace: 'pre-line', marginTop: 24, marginBottom: 16 }}
        >{`후원사 정보를\n입력해주세요`}</H3>
        <SponsorInfoInputBox />
      </ContentWrapper>
    </main>
  );
};

export default SponsorInfoPage;
