import { styled } from '@/stitches.config';
import { H3 } from '@/components/heading';
import { ImageCardProps } from './types';
import * as S from './styles';

const ImageCardWrapper = styled('div', {
  border: '2px solid $textPrimary',
  '@bp1': {
    minWidth: '300px',
    height: 'auto',
  },
  '@bp2': {
    minWidth: '522px',
    height: '450px',
    overflow: 'hidden',
  },
});

const Spacing = styled('div', {
  marginTop: '1.1rem',
});

const TextWrapper = styled('div', {
  maxHeight: '170px',
  padding: '2rem 0 1.1rem 1.5rem',
});

const ImageWrapper = styled('div', {
  height: '280px',
});

export const SponsorImageCard = ({
  title,
  description,
  imgUrl,
}: ImageCardProps) => (
  <ImageCardWrapper>
    <TextWrapper>
      <H3>{title}</H3>
      <Spacing />
      <S.BodyText>{description}</S.BodyText>
    </TextWrapper>
    <ImageWrapper>
      <S.ImageContent style={{ backgroundImage: `url(${imgUrl})` }} />
    </ImageWrapper>
  </ImageCardWrapper>
);
