import { styled } from '@/stitches.config';

export const Section = styled('section', {
  borderBottom: '2px solid $textPrimary',

  '&:last-child': {
    borderBottom: '2px solid transparent',
  },

  '@bp1': {
    padding: '2rem 2rem',
  },
  '@bp2': {
    padding: '4rem 4rem',
  },
});

export const SectionWithoutPadding = styled('section', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: 0,
  borderBottom: '2px solid $textPrimary',

  '&:last-child': {
    borderBottom: '2px solid transparent',
    paddingTop: '2rem',
  },

  '@bp1': {
    flexDirection: 'column-reverse',
  },
  '@bp2': {
    flexDirection: 'row',
    maxHeight: '820px',
  },

  variants: {
    childWidth: {
      full: {
        '& div': {
          '@bp1': {
            maxHeight: '300px',
          },
          '@bp2': {
            maxHeight: '400px',
          },
          '@bp5': {
            maxHeight: '500px',
          },
        },
      },
    },
  },
});

export const SectionWithSidePadding = styled('section', {
  borderBottom: '2px solid $textPrimary',
  '@bp1': {
    padding: '2rem 2rem',
  },
  '@bp2': {
    padding: '4rem 4rem',
  },
});

export const PeriodText = styled('span', {
  color: '$textSecondary',

  '@bp1': {
    fontSize: '20px',
  },

  '@bp2': {
    fontSize: '32px',
  },
});

export const SponsorActionButtonWrapper = styled('div', {
  display: 'flex',
  gap: '16px',
  margin: '62px 0 78px 0',

  '& a': {
    '& button': {
      '@bp1': {
        width: '100%',
      },
    },
  },

  '@bp1': {
    flexDirection: 'column',
  },

  '@bp2': {
    flexDirection: 'row',
  },
});

export const Article = styled('article', {
  display: 'flex',

  '@bp1': {
    padding: '2rem 2rem',
  },

  '@bp2': {
    padding: '4rem 4rem',
  },
});

export const Wrapper = styled('div', {
  display: 'flex',
  marginTop: '40px',
  gap: '40px',

  variants: {
    display: {
      flex: {
        display: 'flex',
        flexDirection: 'column',
      },
      block: {
        display: 'block',
      },
    },
  },
});

export const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  marginBottom: '24px',
});

export const BodyText = styled('span', {
  bodyText: 1,
  wordBreak: 'keep-all',
});

export const ImageWrapper = styled('div', {
  variants: {
    width: {
      half: {
        width: '50%',
      },
      full: {
        width: '100%',
      },
    },
  },
});

export const SimpleCardContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '40px',

  '@bp1': {
    flexDirection: 'column',
    gap: '10px',
  },
  '@bp3': {
    flexDirection: 'row',
  },
  '@bp4': {
    gap: '20px',
  },
  '@bp5': {},
});

export const ImageCardContainer = styled('div', {
  display: 'flex',
  justifyContent: 'start',
  marginTop: '40px',
  width: '100vw',
  overflowX: 'auto',

  '@bp1': {
    flexDirection: 'column',
    gap: '10px',
  },
  '@bp3': {
    flexDirection: 'row',
  },
  '@bp4': {
    gap: '20px',
  },
  '@bp5': {},
});
