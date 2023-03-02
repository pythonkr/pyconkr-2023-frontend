import { useRef, useState } from 'react';
import { H1 } from '@/components/heading';
import { SponsorSimpleCard } from './SponsorSimpleCard';
import { ImageCardProps, SimpleCardProps } from './types';
import { BENEFITS, STEPS } from './constants/cards';
import { SponsorImageCard } from './SponsorImageCard';
import ArrowForward from '@/public/icons/ArrowForward.svg';
import ArrowBack from '@/public/icons/ArrowBack.svg';
import { styled } from '@/stitches.config';
import * as S from './styles';
import SponsorCarousel from './SponsorCarousel';

const ArrowForwardIcon = styled(ArrowForward, {
  stroke: '$textPrimary',
  fill: '$textPrimary',
});

const ArrowBackIcon = styled(ArrowBack, {
  stroke: '$textPrimary',
  fill: '$textPrimary',
});

export const Guide = () => {
  const imageSliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [amount, setAmount] = useState<number>(-100);
  const total = STEPS.length;
  console.log({ currentIndex });
  const moveSlider = (slider: HTMLDivElement | null, currentAmount: number) => {
    if (!slider) return;

    slider.style.transform = `translateX(${currentAmount}%)`;
    slider.style.transition = 'transform 0.5s ease-in-out';
  };

  console.log(amount);

  const moveLeft = () => {
    console.log('left');
    if (amount === -100) return;
    // if (amount ) return;
    setAmount(amount + 100);
    setCurrentIndex((currentIndex + 1) % total);
    moveSlider(imageSliderRef.current, amount);
  };

  const moveRight = () => {
    console.log('right');
    if (amount === -400) return;
    setAmount(amount - 100);
    setCurrentIndex((currentIndex + total - 1) % total);
    moveSlider(imageSliderRef.current, amount);
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
          <ArrowBackIcon width="60" height="60" onClick={moveLeft} />
          <ArrowForwardIcon width="60" height="60" onClick={moveRight} />
        </S.ArrowWrapper>
        <H1>후원사 혜택</H1>
        {/* // FIXME: Carousel 컴포넌트로 교체할 예정!! */}
        <div style={{ display: 'flex', gap: '20px', overflow: 'hidden' }}>
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
        </div>
      </S.SectionWithSidePadding>
    </>
  );
};
