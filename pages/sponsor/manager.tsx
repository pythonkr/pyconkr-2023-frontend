import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';

import { styled } from 'stitches.config';
import { H3 } from '@/components/heading';
import { Progressbar } from '@/components/common/Progressbar';
import ManagerInfoInputBox from '@/components/sponsor/ManagerInfoInputBox';

const ContentWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 8,
});

const SponsorManagerInfoPage: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Sponsor | 정보 입력</title>
      </Head>
      <ContentWrapper>
        <Progressbar value={5} />
        <H3
          style={{ whiteSpace: 'pre-line', marginTop: 24, marginBottom: 16 }}
        >{`담당자 정보를\n입력해주세요`}</H3>
        <ManagerInfoInputBox />
      </ContentWrapper>
    </main>
  );
};

export default SponsorManagerInfoPage;
