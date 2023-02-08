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

        white: '#ffffff',

        brandPrimary: '#ef466f',

        functionalRed: '#be3455',
        functionalGreen: '#45b26b',
        functionalBlue: '#3772ff',
      },
    },
    utils: {
      bodyText: (level: 1 | 2) => {
        if (level === 1) {
          return {
            fontSize: '20px',
            lineHeight: '30px',
            fontWeight: 'normal',
          };
        }
        return {
          fontSize: '14px',
          lineHeight: '21px',
          fontWeight: 'normal',
        };
      },
    },
  });
