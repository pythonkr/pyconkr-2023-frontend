import { H1, H2 } from '@/components/heading';
import SeoHeader from '@/components/layout/SeoHeader';
import { Routes } from '@/constants/routes';
import React, { useState } from 'react';
import { styled } from '@/stitches.config';
import Button from '@/components/common/Button';

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
  padding: '2rem 2rem',
});

const H2P = styled('p', {
  bodyText: 1,
  '&+&': {
    marginTop: '1vh',
  },
});

const ApplyContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const KoreanContent = (
  <>
    <H1Container>
      <H1>재정 지원</H1>
      <H2Container>
        <H2>개요</H2>
        <H2P>
          파이콘 한국은 참가하는 &quot;모든&quot; 사람(준비위원회, 자원봉사자,
          발표자까지도)이 티켓을 구매하는 것을 원칙으로 합니다. 그렇게 하여 모든
          참가자들이 정당한 가격을 지불하고 동등한 자격으로 행사의 일부가 되도록
          하는 것이 파이콘 한국의 중요한 철학 중 하나입니다.
        </H2P>
        <H2P>
          하지만 현실적으로, Everybody Pays라는 파이콘 한국의 철학이 금전적인
          장애물이 되어 티켓을 지불할 수 있는 여유가 있는 사람으로만 참가 대상을
          한정하는 것 역시 또다른 차별이 될 수 있습니다.
        </H2P>
        <H2P>
          이런 모순을 해결하기 위해 파이콘 한국에서는 재정 지원 프로그램을
          운영하여 금전적인 이유로 파이콘 한국에 참석하기 힘든 분들에게
          제한적이나마 도움을 드리고 있으며, 준비위원회에서 준비한 예산에 추가로
          후원 티켓 판매 차액 전액을 재정 지원 예산으로 사용하고 있습니다.
        </H2P>
      </H2Container>
      <H2Container>
        <H2>재정 지원 기준</H2>
        <H2P>
          재정 지원 프로그램은 파이콘 한국 참가에 대한 재정적인 장벽을
          최소화하고 파이썬 커뮤니티가 얻을 수 있는 장점을 최대화하기 위해
          운영됩니다. 예를 들어, 학생과 직장인 중에 선택해야 한다면 재정 지원은
          학생에게 돌아갈 가능성이 높습니다. 재정적인 문제로 파이콘에 참석하기
          힘든 파이썬 오픈소스 커미터 혹은 발표자의 경우에도 조금 더 높은 우선
          순위로 고려하게 됩니다.
        </H2P>
      </H2Container>
      <H2Container>
        <H2>재정 지원 범위</H2>
        <H2P>
          컨퍼런스 티켓, 교통비(KTX, 시외/고속버스, 비행기, 배), 숙박비 항목에서
          증빙할 수 있는 지출이어야 합니다. 지출과 신분 증빙은 세무 처리를
          위하여 필요합니다.
        </H2P>
        <H2P>
          각 항목별 신청 금액에서 일정 비율만큼 지원합니다. 컨퍼런스 티켓에
          대해서는 전액 지원은 불가합니다. 지원 비율은 예산과 내부 규정에 의해
          결정됩니다.
        </H2P>
      </H2Container>
      <H2Container>
        <H2>재정 지원 일정</H2>
        <H2P>
          - 재정 지원 신청 : 2023년 8월 8일 (화) 23시 59분까지 (KST)
          <br />
          - 재정 지원 승인 여부 발표 (이메일) : 2023년 8월 10일 (목) 10시 (KST)
          <br />
          - 재정 지원 금액 지급 : 2023년 8월 12-13일 (토-일) (컨퍼런스 당일)
          <br />* 당일에 지출 증빙을 위한 영수증, 사진이 있는 신분증(또는
          학생증), 기타 필요하다고 생각되는 자료를 파이콘 한국 2023 행사장에서
          제출해주셔야 합니다. 증빙이 없을 경우 지원이 불가능합니다.
        </H2P>
      </H2Container>
    </H1Container>
    <ApplyContainer>
      <Button
        reversal
        onClick={() => {
          window.open('https://forms.gle/1wGRgzZoVxAtAjP37');
        }}
      >
        신청하기
      </Button>
    </ApplyContainer>
  </>
);

const EnglishContent = (
  <>
    <H1Container>
      <H1>Financial Aid</H1>
      <H2Container>
        <H2>Introduction</H2>
        <H2P>
          The principle in PyCon Korea is &quot;Every&quot; attendee(including
          organizers, volunteers, and even speakers) purchases the ticket. That
          way, it is one of the important philosophies of PyCon Korea to ensure
          that all participants pay a fair price and are part of the event with
          equal qualifications.
        </H2P>
        <H2P>
          However, this principle, &quot;Everybody Pays&quot;, can be another
          discrimination to limit the participants as people who can pay their
          tickets.
        </H2P>
        <H2P>
          In order to solve this contradiction, PyCon Korea operates the
          [Financial Aid] program to help those who are unable to attend the
          PyCon Korea for financial reasons. In addition to the budget prepared
          by the Organizing Team, we fund all sales from Patron tickets.
        </H2P>
      </H2Container>
      <H2Container>
        <H2>Principles and Targets</H2>
        <H2P>
          Financial aid program is designed to minimize the financial barriers
          to participation in PyCon Korea and maximize the benefits of the
          Python community. For example, if we have to choose between a student
          and an employee, financial support is likely to be given to the
          student. Python open source committers or speakers who are not able to
          attend PyCon Korea due to financial problems will also be considered
          as a higher priority.
        </H2P>
      </H2Container>
      <H2Container>
        <H2>Coverage</H2>
        <H2P>
          Conference tickets, transportation fare (KTX, express bus, airplane,
          boat), accommodation expenses. It must be an expenditure that can be
          documented. Spending and proof of identity are required for tax
          purposes.
        </H2P>
        <H2P>
          A certain percentage of the application amount for each item is
          supported. Full support is not available for conference tickets. The
          support rate is determined by the budget and internal regulations.
        </H2P>
      </H2Container>
      <H2Container>
        <H2>Schedule</H2>
        <H2P>
          - Financial aid application period : Until 2023.08.08. (Tue) 23:59 KST
          <br />
          - Financial aid confirmation / announcement : 2023.08.10 (Thr) 10 a.m.
          KST via email
          <br />
          - Financial aid amount payment : 2023.08.12-13 (Sat-Sun) (Conference
          day)
          <br />* On that day, you will need to submit receipts for proof of
          expenditure, ID with photo and other necessary materials at the PyCon
          Korea 2023. If there is no evidence, support is not possible.
        </H2P>
      </H2Container>
    </H1Container>
    <ApplyContainer>
      <Button
        reversal
        onClick={() => {
          window.open('https://forms.gle/1wGRgzZoVxAtAjP37');
        }}
      >
        Apply
      </Button>
    </ApplyContainer>
  </>
);

const FinancialAidPage = () => {
  const [language, setLanguage] = useState<'KOR' | 'ENG'>('KOR');

  return (
    <Page>
      <SeoHeader
        title={Routes.FINANCIAL_AID.title}
        description="파이콘 한국 2023: 8월 11~13일 코엑스"
      />
      <LanguageButtonContainer>
        {language === 'KOR' && (
          <Button
            reversal
            onClick={() => {
              setLanguage('ENG');
            }}
          >
            English
          </Button>
        )}
        {language === 'ENG' && (
          <Button
            reversal
            onClick={() => {
              setLanguage('KOR');
            }}
          >
            한국어
          </Button>
        )}
      </LanguageButtonContainer>
      {language === 'KOR' && KoreanContent}
      {language === 'ENG' && EnglishContent}
    </Page>
  );
};

export default FinancialAidPage;
