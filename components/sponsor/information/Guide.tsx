import React, { useRef } from 'react';
import Flicking from '@egjs/flicking';
import { H1 } from '@/components/heading';
import { SponsorSimpleCard } from './SponsorSimpleCard';
import { ImageCardProps, SimpleCardProps } from './types';
import { BENEFITS, STEPS } from './constants/cards';
import ArrowForward from '@/public/icons/ArrowForward.svg';
import ArrowBack from '@/public/icons/ArrowBack.svg';
import SponsorCarousel from './SponsorCarousel';
import SponsorImageCard from './SponsorImageCard';
import { styled } from '@/stitches.config';
import * as S from './styles';

const CarouselWrapper = styled('div', {
  display: 'flex',
  marginTop: '50px',
});

const ArrowForwardIcon = styled(ArrowForward, {
  stroke: '$textPrimary',
  fill: '$textPrimary',
});

const ArrowBackIcon = styled(ArrowBack, {
  stroke: '$textPrimary',
  fill: '$textPrimary',
});

export const Guide = () => {
  // TODO: 화살표 버튼 클릭해도 캐러셀 작동하게 만들기. Type 설정..!
  const flickingRef = useRef<Flicking>(null);
  const moveToForward = async () => {
    if (flickingRef.current) {
      await flickingRef.current.prev();
    }
  };
  const moveToNext = async () => {
    if (flickingRef.current) {
      await flickingRef.current.next();
    }
  };

  return (
    <>
      <S.Section id="process">
        <H1>
          후원사
          <br />
          선정 절차
        </H1>
        <S.SimpleCardContainer>
          {STEPS.map((step: SimpleCardProps) => (
            <SponsorSimpleCard
              key={step.id}
              id={step.id}
              title={step.title}
              description={step.description}
            />
          ))}
        </S.SimpleCardContainer>
      </S.Section>
      <S.SectionWithSidePadding id="benefits">
        <S.ArrowWrapper>
          <ArrowBackIcon width="60" height="60" onClick={moveToForward} />
          <ArrowForwardIcon width="60" height="60" onClick={moveToNext} />
        </S.ArrowWrapper>
        <H1>후원사 혜택</H1>
        <CarouselWrapper>
          <SponsorCarousel>
            {BENEFITS.map((benefit: ImageCardProps) => (
              <SponsorImageCard
                key={benefit.id}
                id={benefit.id}
                title={benefit.title}
                description={benefit.description}
                imgUrl={benefit.imgUrl}
                alt={benefit.alt}
              />
            ))}
          </SponsorCarousel>
        </CarouselWrapper>
      </S.SectionWithSidePadding>
    </>
  );
};
