import { createStitches } from '@stitches/react';

export const { styled, css, getCssText, createTheme, globalCss } =
  createStitches({
    theme: {
      colors: {
        textPrimary: '#f8f8f8',
        textSecondary: '#d5d5d5',

        backgroundPrimary: '#1d1d1d',
        backgroundSecondary: '#222',

        gray500: '#909090',

        brandPrimary: '#ef466f',

        functionalRed: '#be3455',
        functionalGreen: '#45b26b',
      },
    },
  });
