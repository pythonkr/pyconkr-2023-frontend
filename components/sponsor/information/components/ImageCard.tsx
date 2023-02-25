import { styled } from '@/stitches.config';
import { H3 } from '@/components/heading';
import Image from 'next/image';
import { ImageCardProps } from '../types';
import * as S from '../styles';

const ImageCardWrapper = styled('div', {
  border: '1px solid $textPrimary',
  '@bp1': {
    minWidth: '300px',
    height: 'auto',
  },
  '@bp2': {
    minWidth: '522px',
    maxHeight: '450px',
  },
});

const Spacing = styled('div', {
  marginTop: '1.1rem',
});

const TextWrapper = styled('div', {
  padding: '2rem 1.5rem',
});

const ImageWrapper = styled('div', {
  height: '100%',
});

export const ImageCard = ({
  title,
  description,
  imgUrl,
  alt,
}: ImageCardProps) => (
  <ImageCardWrapper>
    <TextWrapper>
      <H3>{title}</H3>
      <Spacing />
      <S.BodyText>{description}</S.BodyText>
    </TextWrapper>
    <ImageWrapper>
      <Image
        src={imgUrl}
        alt={alt}
        style={{ width: '100%', height: '100%' }}
        width="0"
        height="0"
      />
    </ImageWrapper>
  </ImageCardWrapper>
);
