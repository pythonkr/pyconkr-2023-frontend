import { styled } from '@/stitches.config';

export const Section = styled('section', {
  borderBottom: '2px solid $textPrimary',

  '&:last-child': {
    borderBottom: '2px solid transparent',
  },

  '@bp1': {
    padding: '1.2rem 1.2rem',
  },
  '@bp2': {
    padding: '4rem 4rem',
  },
});

export const PageContainer = styled('div', {
  bodyText: 1,
});

export const DescContainer = styled('div', {
  marginTop: '8px',
  wordWrap: 'break-word',
  wordBreak: 'keep-all',
  whiteSpace: 'pre-line',
});

export const IntroContainer = styled(DescContainer, {});

export const Block = styled('div', {});
