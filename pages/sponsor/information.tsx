import Link from 'next/link';
import Button from '@/components/common/Button';
import { H1, H3 } from '@/components/heading';
import { styled } from '@/stitches.config';
// import { Routes } from '@/constants/routes';

const Section = styled('section', {
  borderBottom: '2px solid $textPrimary',

  '&:last-child': {
    borderBottom: '2px solid transparent',
  },

  '@bp1': {
    padding: '2rem 2rem',
  },
  '@bp2': {
    padding: '4rem 4rem',
  },
});

const SectionWithoutPadding = styled('section', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: 0,
  borderBottom: '2px solid $textPrimary',

  '&:last-child': {
    borderBottom: '2px solid transparent',
  },

  '@bp1': {
    flexDirection: 'column-reverse',
  },
  '@bp2': {
    flexDirection: 'row',
  },
});

const Article = styled('article', {
  display: 'flex',

  '@bp1': {
    padding: '2rem 2rem',
  },

  '@bp2': {
    padding: '4rem 4rem',
  },
});

const PeriodText = styled('span', {
  color: '$textSecondary',

  '@bp1': {
    fontSize: '20px',
  },

  '@bp2': {
    fontSize: '32px',
  },
});

const SponsorActionButtonWrapper = styled('div', {
  display: 'flex',
  gap: '16px',
  margin: '62px 0 78px 0',

  '@bp1': {
    flexDirection: 'column',
  },

  '@bp2': {
    flexDirection: 'row',
  },
});

const Wrapper = styled('div', {
  display: 'flex',
  marginTop: '40px',
  gap: '40px',

  variants: {
    display: {
      flex: {
        display: 'flex',
        flexDirection: 'column',
      },
      block: {
        display: 'block',
      },
    },
  },
});

const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  marginBottom: '24px',
});

const ReplaceImage = styled('div', {
  backgroundColor: 'hotpink',

  '@bp1': {
    width: '100%',
    height: '360px',
  },

  '@bp2': {
    width: '50%',
    height: 'auto',
  },
});

const BodyText = styled('span', {
  bodyText: 1,
});

const SponsorInformation = () => {
  return (
    <>
      <Section>
        <H1>SPONSORS</H1>
        <PeriodText>2023.02.14 - 2023.04.21</PeriodText>
        <SponsorActionButtonWrapper>
          {/*  TODO: URL 집어넣기 */}
          <Button>파이콘 후원하기</Button>
          {/*  TODO: PDF 다운로드 할 수 있게 하기 */}
          <Button disabled>후원사 가이드 다운로드</Button>
        </SponsorActionButtonWrapper>
      </Section>
      <SectionWithoutPadding>
        <Article>
          <div>
            {/* FIXME: /이 부분 맵 돌릴까? 그러면 맵을 세군데서 돌려야 하는데 괜찮나/  */}
            <H1>
              파이콘 한국
              <br />
              후원의 의미
            </H1>
            <Wrapper display="block">
              <TextContainer>
                <H3>파이콘 한국은?</H3>
                <BodyText>
                  파이콘 한국은 커뮤니티 주관으로 이뤄지는 비영리
                  <br />
                  개발자 대상 행사로 오픈소스 프로그래밍 언어인 파이썬의
                  <br />
                  저변 확대와 커뮤니티 활성화를 위해 진행하는 행사입니다.
                </BodyText>
              </TextContainer>
              <TextContainer>
                <H3>비영리 행사</H3>
                <BodyText>
                  파이콘 한국의 발표자 및 튜토리얼 진행자를 포함,
                  <br />
                  자원봉사자와 준비위원회 담당자 등 모든 인원이
                  <br />
                  금전적 이득 없이 행사를 준비하고 운영해 나갑니다.
                </BodyText>
              </TextContainer>
              <TextContainer>
                <H3>커뮤니티에 기여</H3>
                <BodyText>
                  이에 파이콘 한국에의 후원은 국내 오픈소스 커뮤니티와
                  <br />
                  파이썬 커뮤니티에 대한 가장 좋은 기여 방법이며 여러 우수한
                  <br />
                  개발자들과의 만남을 가지실 수 있는 기회입니다.
                </BodyText>
              </TextContainer>
            </Wrapper>
          </div>
        </Article>
        <ReplaceImage />
      </SectionWithoutPadding>
      <Section>
        <H1>다시, 우리, 파이콘</H1>
        <Wrapper display="flex">
          <BodyText>
            파이콘 한국 2023은 한국에서 열리는 10번째 파이콘이자, 2019년도 이후
            3년만에 개최되는 전면 오프라인 파이콘입니다.
            <br /> 다시금 돌아온 국내 최대 파이써니스타들의 축제를 함께
            만들어나가실 후원사분들을 기다립니다
          </BodyText>
          <Link href="https://2022.pycon.kr/">
            <Button>지난 파이콘 보러가기</Button>
          </Link>
        </Wrapper>
      </Section>
      <SectionWithoutPadding>
        <ReplaceImage />
      </SectionWithoutPadding>
      <Section>
        <H1>
          후원사
          <br />
          선정 절차
        </H1>
      </Section>
      <Section>
        <H1>후원사 혜택</H1>
      </Section>
    </>
  );
};

export default SponsorInformation;
