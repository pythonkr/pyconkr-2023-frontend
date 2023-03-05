import React, { RefObject, useRef } from 'react';
import Flicking from '@egjs/react-flicking';
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
  const flickingRef: RefObject<Flicking> | null = useRef(null);

  const moveToPrevImages = () => {
    const current = flickingRef.current;
    if (current) {
      const animationCtx = current.control.controller.animatingContext;
      if (animationCtx.start || animationCtx.end) return;
      current.prev();
    }
  };

  const moveToNextImages = () => {
    const current = flickingRef.current;
    if (current) {
      const animationCtx = current.control.controller.animatingContext;
      if (animationCtx.start || animationCtx.end) return;
      current.next();
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
          <ArrowBackIcon width="60" height="60" onClick={moveToPrevImages} />
          <ArrowForwardIcon width="60" height="60" onClick={moveToNextImages} />
        </S.ArrowWrapper>
        <H1>후원사 혜택</H1>
        <CarouselWrapper>
          <SponsorCarousel flickingRef={flickingRef}>
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
