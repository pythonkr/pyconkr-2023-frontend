import Button from '@/components/common/Button';
import { H1, H3 } from '@/components/heading';
import Image from 'next/image';
import Link from 'next/link';
import * as S from './styles';

export const AboutPycon = () => (
  <>
    <S.SectionWithoutPadding>
      <S.Article>
        <div>
          {/* FIXME: /이 부분 맵 돌릴까? 그러면 맵을 세군데서 돌려야 하는데 괜찮나/  */}
          <H1>
            파이콘 한국
            <br />
            후원의 의미
          </H1>
          <S.Wrapper display="block">
            <S.TextContainer>
              <H3>파이콘 한국은?</H3>
              <S.BodyText>
                파이콘 한국은 커뮤니티 주관으로 이뤄지는 비영리
                <br />
                개발자 대상 행사로 오픈소스 프로그래밍 언어인 파이썬의
                <br />
                저변 확대와 커뮤니티 활성화를 위해 진행하는 행사입니다.
              </S.BodyText>
            </S.TextContainer>
            <S.TextContainer>
              <H3>비영리 행사</H3>
              <S.BodyText>
                파이콘 한국의 발표자 및 튜토리얼 진행자를 포함,
                <br />
                자원봉사자와 준비위원회 담당자 등 모든 인원이
                <br />
                금전적 이득 없이 행사를 준비하고 운영해 나갑니다.
              </S.BodyText>
            </S.TextContainer>
            <S.TextContainer>
              <H3>커뮤니티에 기여</H3>
              <S.BodyText>
                이에 파이콘 한국에의 후원은 국내 오픈소스 커뮤니티와
                <br />
                파이썬 커뮤니티에 대한 가장 좋은 기여 방법이며 여러 우수한
                <br />
                개발자들과의 만남을 가지실 수 있는 기회입니다.
              </S.BodyText>
            </S.TextContainer>
          </S.Wrapper>
        </div>
      </S.Article>
      <S.ImageWrapper width="half">
        <Image
          src="https://cdn.pixabay.com/photo/2012/02/27/16/57/cat-17430_960_720.jpg"
          alt="고양이가 세상을 지배한다!"
          style={{ width: '100%', height: '100%' }}
          width="0"
          height="0"
        />
      </S.ImageWrapper>
    </S.SectionWithoutPadding>
    <S.Section>
      <H1>다시, 우리, 파이콘</H1>
      <S.Wrapper display="flex">
        <S.BodyText>
          파이콘 한국 2023은 한국에서 열리는 10번째 파이콘이자, 2019년도 이후
          3년만에 개최되는 전면 오프라인 파이콘입니다.
          <br /> 다시금 돌아온 국내 최대 파이써니스타들의 축제를 함께
          만들어나가실 후원사분들을 기다립니다
        </S.BodyText>
        <Link href="https://2022.pycon.kr/">
          <Button reversal>지난 파이콘 보러가기</Button>
        </Link>
      </S.Wrapper>
    </S.Section>
    <S.SectionWithoutPadding childWidth="full">
      <S.ImageWrapper width="full">
        <Image
          src="https://cdn.pixabay.com/photo/2012/02/27/16/57/cat-17430_960_720.jpg"
          alt="고양이가 세상을 지배한다!"
          style={{ width: '100%', height: '100%' }}
          width="0"
          height="0"
        />
      </S.ImageWrapper>
    </S.SectionWithoutPadding>
  </>
);
