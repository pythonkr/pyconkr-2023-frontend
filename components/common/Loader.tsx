import { styled } from '@/stitches.config';
import { keyframes } from '@stitches/react';

export const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const Loader = styled('div', {
  variants: {
    reversal: {
      true: {
        border: '4px solid $backgroundPrimary',
        borderTop: '4px solid $textPrimary',
      },
      false: {
        border: '4px solid $textPrimary',
        borderTop: '4px solid $backgroundPrimary',
      },
    },
  },
  borderRadius: '50%',
  width: '30px',
  height: '30px',
  animation: `${spin} 1s linear infinite`,
});
