import { styled } from '@/stitches.config';

export const H1 = styled('h1', {
  '@bp1': {
    fontSize: '48px',
    lineHeight: '58px',
  },
  '@bp2': {
    fontSize: '58px',
    lineHeight: '68px',
    fontWeight: 'bold',
  },
});

export const H2 = styled('h2', {
  fontSize: '40px',
  lineHeight: '50px',
  fontWeight: 'bold',
});

export const H3 = styled('h3', {
  fontSize: '32px',
  lineHeight: '42px',
  fontWeight: 'bold',
});

export const H4 = styled('h4', {
  fontSize: '24px',
  lineHeight: '36px',
  fontWeight: '500',
});
