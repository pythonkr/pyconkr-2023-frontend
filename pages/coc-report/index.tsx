import { H1, H2 } from '@/components/heading';
import SeoHeader from '@/components/layout/SeoHeader';
import { Routes } from '@/constants/routes';
import React, { useState } from 'react';
import { styled } from '@/stitches.config';
import Button from '@/components/common/Button';
import Link from 'next/link';

const Page = styled('div', {
  position: 'relative',
});

const LanguageButtonContainer = styled('div', {
  position: 'absolute',
  '@bp1': {
    right: '12.5vw',
    top: '1vh',
  },
  '@bp2': {
    right: '22.5vw',
    top: '1vh',
  },
  '@bp3': {
    right: '27.5vw',
    top: '1vh',
  },
});

const H1Container = styled('div', {
  '@bp1': {
    margin: '0 10vw',
  },
  '@bp2': {
    margin: '0 20vw',
  },
  '@bp3': {
    margin: '0 25vw',
  },
});

const H2Container = styled('div', {
  padding: '2rem 0',
});

const H2P = styled('p', {
  bodyText: 1,
  '&+&': {
    marginTop: '1vh',
  },
});

const P = styled('div', {
  bodyText: 1,
});

const PIndent = styled('div', {
  bodyText: 1,
  textIndent: '30px',
});

const ApplyContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const KoreanContent = (
  <>
    <H1Container>
      <H1>CoC 위반 사례 신고</H1>
      <H2Container>
        <H2>오프라인 신고</H2>
        <H2P>
          행사 현장에 계시다면 가까운 파이콘 한국 준비위원회에게 위반 사례를 신고해 주세요.
          <br />
          보다 더 많은 정보를 수집하여 도움을 드릴 수 있습니다.
        </H2P>
      </H2Container>
      <H2Container>
        <H2>온라인 신고</H2>
        <PIndent>
          방법1) 아래 CoC 신고 양식을 작성하여 신고해주세요.
        </PIndent>
        <PIndent>
        방법2) coc@pycon.kr 를 통해 메일을 보내주세요. 
        </PIndent>
        <P>
          - 파일 첨부가 필요하신 경우 메일을 통해 접수해 주세요.
        </P>
      </H2Container>
    </H1Container>
    <ApplyContainer>
      <Link href="#" target="_blank">
        <Button reversal>CoC 신고 양식 작성하기</Button>
      </Link>
    </ApplyContainer>
  </>
);

const EnglishContent = (
  <>
    <H1Container>
      <H1>Report CoC Violation</H1>
      <H2Container>
        <H2>Offline</H2>
        <H2P>
          If you're on-site at the event, please report case
          to your nearest PyCon Korea Organizing Team.
          <br />
          They will be able to collect more information to help you.
        </H2P>
      </H2Container>
      <H2Container>
        <H2>Online</H2>
        <PIndent>
          Method 1) Fill out the CoC report form below to report a violation.
        </PIndent>
        <PIndent>
          Method 2) Send an email to coc@pycon.kr. 
        </PIndent>
        <P>
          - If you need to attach files, please do so via email.
        </P>
      </H2Container>
    </H1Container>
    <ApplyContainer>
      <Link href="#" target="_blank">
        <Button reversal>Submit CoC violation case report form</Button>
      </Link>
    </ApplyContainer>
  </>
);

const CoCreportPage = () => {
  const [language, setLanguage] = useState<'KOR' | 'ENG'>('KOR');

  const getLanguageButtonConfig = (lang: typeof language) => {
    return lang === 'KOR'
      ? { text: 'English', onClick: () => setLanguage('ENG') }
      : { text: '한국어', onClick: () => setLanguage('KOR') };
  };

  const { text, onClick } = getLanguageButtonConfig(language);

  return (
    <Page>
      <SeoHeader
        title={Routes.COC_REPORT.title}
        description="파이콘 한국 2023: 8월 11~13일 코엑스"
      />
      <LanguageButtonContainer>
        <Button reversal onClick={onClick}>
          {text}
        </Button>
      </LanguageButtonContainer>
      {language === 'KOR' && KoreanContent}
      {language === 'ENG' && EnglishContent}
    </Page>
  );
};

export default CoCreportPage;
