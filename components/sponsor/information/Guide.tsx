import { H1 } from '@/components/heading';
import { SimpleCard } from './components/SimpleCard';
import { ImageCardProps, SimpleCardProps } from './types';
import { BENEFITS, STEPS } from './constants';
import { ImageCard } from './components/ImageCard';
import * as S from './styles';

export const Guide = () => (
  <>
    <S.Section>
      <H1>
        후원사
        <br />
        선정 절차
      </H1>
      <S.SimpleCardContainer>
        {STEPS.map((step: SimpleCardProps) => (
          <SimpleCard
            key={step.id}
            id={step.id}
            title={step.title}
            description={step.description}
          />
        ))}
      </S.SimpleCardContainer>
    </S.Section>
    <S.SectionWithSidePadding>
      <H1>후원사 혜택</H1>
      <S.ImageCardContainer>
        {/* /TODO: 슬라이더(?) 명진님꼐 물어보기 / */}
        {BENEFITS.map((benefit: ImageCardProps) => (
          <ImageCard
            key={benefit.id}
            id={benefit.id}
            title={benefit.title}
            description={benefit.description}
            imgUrl={benefit.imgUrl}
            alt={benefit.alt}
          />
        ))}
      </S.ImageCardContainer>
    </S.SectionWithSidePadding>
  </>
);
