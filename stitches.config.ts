import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

export const { styled, css, getCssText, createTheme, globalCss, config } =
  createStitches({
    theme: {
      colors: {
        textPrimary: '#1c1c1c',
        textSecondary: '#909090',

        backgroundPrimary: '#fff',

        gray500: '#909090',

        white: '#ffffff',

        functionalRed: '#be3455',
        functionalGreen: '#45b26b',
      },
      radii: {
        small: '4px',
        rounded: '8px',
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
    media: {
      bp1: '(min-width: 360px)',
      bp2: '(min-width: 768px)',
      bp3: '(min-width: 1024px)',
      bp4: '(min-width: 1280px)',
    },
  });

export const darkTheme = createTheme('dark', {
  colors: {
    textPrimary: '#ebebeb',
    textSecondary: '#909090',

    backgroundPrimary: '#1c1c1c',
  },
});

export type CSS = Stitches.CSS<typeof config>;
