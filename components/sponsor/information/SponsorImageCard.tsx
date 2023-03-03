import { styled } from '@/stitches.config';
import { H3 } from '@/components/heading';
import { ImageCardProps } from './types';
import * as S from './styles';

const ImageCardWrapper = styled('div', {
  border: '2px solid $textPrimary',
  '@bp1': {
    width: '100%',
    height: 'auto',
    marginRight: 0,
  },
  '@bp2': {
    maxWidth: '522px',
    height: '450px',
    overflow: 'hidden',
    marginRight: '20px',
  },

  '&:last-child': {
    marginRight: '0',
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

const SponsorImageCard = ({ title, description, imgUrl }: ImageCardProps) => (
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

export default SponsorImageCard;
