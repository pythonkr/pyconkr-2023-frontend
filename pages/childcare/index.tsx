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

const LinkButton = styled('a', {
  bodyText: 1,
  width: '160px',
  padding: '8px',
  display: 'inline-block',
  textAlign: 'center',
  variants: {
    reversal: {
      true: {
        color: '$backgroundPrimary',
        backgroundColor: '$textPrimary',
      },
      false: {
        color: '$textPrimary',
        backgroundColor: '$backgroundPrimary',
      },
    },
  },
});

const KoreanContent = (
  <>
    <H1Container>
      <H1>아이 돌봄</H1>
      <H2Container>
        <H2>개요</H2>
        <H2P>
          아이 돌봄은 육아로 인해 컨퍼런스에 참여하기 어려운 분들을 위하여
          운영하는 프로그램입니다.
          <br />
          본 프로그램은 파이콘 본 세션이 있는 8월 12일 토요일과 13일 일요일에
          운영합니다.
          <br />
          아이 돌봄 전문 업체에서 함께하며, 연령대에 맞는 교구재를 활용하여
          보드게임, 미술놀이(그리기, 만들기)도 진행될 예정입니다.
        </H2P>
      </H2Container>
      <H2Container>
        <H2>프로그램 운영 일시</H2>
        <H2P>
          2023년 8월 12일 토요일 10:00 ~ 18:00
          <br />
          2023년 8월 13일 일요일 10:00 ~ 18:00
        </H2P>
      </H2Container>
      <H2Container>
        <H2>프로그램 상세 내용</H2>
        <P>- 대상 : 파이콘 2023 티켓 구매자(*튜토리얼과 스프린트 제외)</P>
        <P>- 연령 : 30개월 이상 ~ 11세 미만 유아 및 초등 저학년</P>
        <P>- 아이 돌봄 공간 : 코엑스 아셈볼룸 210A, 210B, 211호</P>
        <PIndent>210A, 210B는 프로그램 운영 공간입니다. </PIndent>
        <PIndent> 211호는 별도 접수없이 이용 가능한 유아 휴게실입니다.</PIndent>
        <P>-일정 : 2023년 8월 12일(토) / 13일(일) 10:00~ 18:00</P>
        <PIndent>
          9:30 부터 공간에 아이를 맡길 수 있습니다. (프로그램은 오전 10시부터
          시작됩니다.)
        </PIndent>
        <PIndent>
          11:30 ~ 12:30은 점심 시간이며, 돌봄을 운영하지 않습니다.
        </PIndent>
        <P> - 준비물 : 아이 돌봄에 필요한 물품을 각자 준비해 주세요.</P>
        <PIndent>(예시) 낮잠용 이불, 양치 도구, 기저귀, 여벌 옷 등</PIndent>
        <PIndent>
          코엑스 실내 온도가 낮아 긴팔과 긴바지도 함께 준비해 주시면 좋습니다.
        </PIndent>
        <P> - 참가비 : 1일 3만원 </P>
        <PIndent>
          위 참가비는 아동 1명 기준입니다. 쌍둥이나 형제자매는 인원수만큼의
          비용이 발생합니다.
        </PIndent>
        <P>
          - 모집 인원 (*프로그램 참여 인원에 따라 선생님 인원은 변동될 수
          있습니다.):
        </P>
        <PIndent>[A] 30개월 이상 ~ 6세 미만 : 6명 (돌봄 선생님 3명)</PIndent>
        <PIndent>[B] 6세 이상 ~ 11세 미만 : 16명 (돌봄 선생님 4명)</PIndent>
      </H2Container>
      <H2Container>
        <H2>주의사항</H2>
        <H2P>
          반드시 파이콘 한국 2023 티켓을 구매한 이메일로 접수해 주세요. 확인되지
          않는 이메일의 경우, 환불 조치됨을 알려드립니다.
        </H2P>
        <H2P>
          토요일+일요일 양일간 돌봄을 원하시면 본 프로그램 또한 양일 모두 등록해
          주셔야 합니다.
        </H2P>
        <H2P>
          간식을 포함한 음식은 제공되지 않습니다. 아이들의 점심 식사는
          부모님께서 직접 도시락이나 인근 식당을 이용해 주셔야 합니다.
        </H2P>
        <H2P>
          행사 당일 37.5도 이상의 고열이 발생하거나 전염성 질병이 의심되는 경우
          전액 환불 조치드리며 돌봄 이용이 불가합니다.
        </H2P>
      </H2Container>
    </H1Container>
    <ApplyContainer>
      <LinkButton
        target="_blank"
        href="https://event-us.kr/pyconkr/event/66006"
        reversal={true}
      >
        티켓 구매하기!
      </LinkButton>
    </ApplyContainer>
  </>
);

const EnglishContent = (
  <>
    <H1Container>
      <H1>Childcare</H1>
      <H2Container>
        <H2>Introduction</H2>
        <H2P>
          Childcare is a program provided for those who find it difficult to
          participate in the conference due to childcare responsibilities.
          <br />
          The program will be operated on Saturday, August 12th, and Sunday,
          August 13th, during the main PyCon conference.
          <br />
          It will be operated in collaboration with a professional childcare
          service, and age-appropriate educational toys and activities, such as
          board games and arts and crafts, will be provided for the children to
          enjoy.
        </H2P>
      </H2Container>
      <H2Container>
        <H2>Operating date and time</H2>
        <H2P>
          Saturday, August 12th, 2023, from 10:00 AM to 6:00 PM
          <br />
          Sunday, August 13th, 2023, from 10:00 AM to 6:00 PM
        </H2P>
      </H2Container>
      <H2Container>
        <H2>Detailed Information</H2>
        <P>
          - Who can purchase tickets : PyCon Korea 2023 Ticket purchasers
          (*excluding tutorials and prints)
        </P>
        <P>- Ages : Children aged 30 months and above, under 11 years old</P>
        <P>- Where : Coex ASEM Ballroom Room 210A, 210B, 211</P>
        <PIndent>
          Rooms 210A and 210B are the spaces for the childcare program
        </PIndent>
        <PIndent>
          Room 211 is a separate toddler lounge available for use without the
          need for a separate ticket purchase.
        </PIndent>
        <P>
          - When : August 12-13, 2023 (Saturday-Sunday) from 10:00 AM to 6:00 PM
        </P>
        <PIndent>
          You can leave your child in the designated area starting from 9:30 AM.
          (The program will begin at 10:00 AM.)
        </PIndent>
        <PIndent>
          From 11:30 AM to 12:30 PM, it&apos;s lunchtime, and there will be no
          childcare service available.
        </PIndent>
        <P>
          - Things to be Prepared : Please prepare the necessary items for the
          child care individually.
        </P>
        <PIndent>
          (e.g.) nap blankets, toothbrushing tools, diapers, extra clothes, etc
        </PIndent>
        <PIndent>
          It would be helpful if you could also prepare long-sleeved tops and
          long pants for the children as the indoor temperature at the venue may
          be low.
        </PIndent>
        <P> - Cost : 30,000 won (per day)</P>
        <PIndent>
          The above participation fee is per child. For twins or siblings, the
          cost will be applied for each individual child separately.
        </PIndent>
        <P>
          - Capacity (*The number of teachers may vary depending on the number
          of participants in the program.):
        </P>
        <PIndent>
          [A] 30 months or more to under 6 years of age: 6 people (3 care
          teachers)
        </PIndent>
        <PIndent>
          [B] 6 years of age or older to 11 years of age: 16 (4 care teachers)
        </PIndent>
      </H2Container>
      <H2Container>
        <H2>Precautions</H2>
        <H2P>
          Please make sure to submit your form using the email address used to
          purchase the PyCon Korea 2023 Conference ticket. Please be aware that
          forms submitted from unverified email addresses may result in refund.
        </H2P>
        <H2P>
          If you wish to use childcare services for both Saturday and Sunday,
          please make sure to register for the program on both days.
        </H2P>
        <H2P>
          Snacks and meals are not provided, including lunch for the children.
          Parents are kindly requested to prepare boxed meals or use nearby
          restaurants for their children&apos;s lunch.
        </H2P>
        <H2P>
          In case of a fever of 37.5 degrees Celsius or higher or suspicion of a
          contagious disease on the day of the event, a full refund will be
          provided, and childcare services will not be available.
        </H2P>
      </H2Container>
    </H1Container>
    <ApplyContainer>
      <LinkButton
        target="_blank"
        href="https://event-us.kr/pyconkr/event/66006"
        reversal={true}
      >
        Buying a ticket
      </LinkButton>
    </ApplyContainer>
  </>
);

const FinancialAidPage = () => {
  const [language, setLanguage] = useState<'KOR' | 'ENG'>('KOR');

  return (
    <Page>
      <SeoHeader
        title={Routes.CHILDCARE.title}
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
