import { styled } from '@/stitches.config';

export const MainSection = styled('section', {
  height: '50vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Container = styled('section', {
  width: '30%',
  height: '50%',

  border: '1px solid black',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '& > section.top': {
    width: '66%',
    padding: '2vh 0',

    '& > div': {
      display: 'flex',
      justifyContent: 'space-between',
      paddingBottom: '1vh',
    },
    '& > div > input': {
      width: '66%',
    },
  },
});
