import { styled } from '@/stitches.config';

export const ProgramTypeSection = styled('section', {
  width: '630px',
  margin: '5vh auto 0',
  borderTop: '4px solid $textPrimary',
  borderBottom: '2px solid $textPrimary',
});

export const ProgramTypeTitle = styled('div', {
  width: '391px',
  height: '42px',
  fontWeight: '700',
  fontSize: '2rem',
  lineHeight: '42px',
  marginTop: '1vh',
});

export const ProgramTypeDesc = styled('p', {
  fontWeight: '500',
  fontSize: '1.1rem',
  lineHeight: '30px',
  marginBottom: '1vh',
});

export const TicketTypeItem = styled('div', {
  borderTop: '2px solid $textPrimary',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '16px',
  width: '100%',
});

export const TicketTypeItemFrame = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '66.5px',

  '& > div:first-of-type': {
    fontWeight: '500',
    fontSize: '1.2rem',
    lineHeight: '36px',
  },
});

export const TicketTypeItemButton = styled('div', {
  '& > button': {
    width: '196px',
    height: '46px',
  },
});
