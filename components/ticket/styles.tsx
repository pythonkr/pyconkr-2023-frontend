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

/** TicketBuyPage */
export const TicketOrderContainer = styled('section', {
  width: '630px',
  margin: '5vh auto 0',
  borderTop: '4px solid $textPrimary',
});

export const TicketOrderTitle = styled('div', {
  width: '234.47px',
  height: '50px',
  fontWeight: '700',
  fontSize: '40px',
  lineHeight: '50px',
  margin: '1vh 0',
});

export const TicketTypeDetail = styled('section', {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  padding: '24px',
  gap: '8px',
  width: '630px',
  height: '409px',
  border: '5px solid $textPrimary',
});

export const TicketTypeDetailTitle = styled('div', {
  fontWeight: '700',
  fontSize: '40px',
  lineHeight: '42px',
  height: '84px',
  display: 'flex',
  alignItems: 'center',
});

export const TicketTypeDetailProgramType = styled('div', {
  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '36px',
  display: 'flex',
  alignItems: 'center',
  borderBottom: '4px solid $textPrimary',
});

export const TicketTypeDetailDesc = styled('div', {
  flexGrow: 1,
  whiteSpace: 'pre-wrap',
});

export const TicketTypeDetailPrice = styled('div', {
  borderTop: '2px solid $textPrimary',
  borderBottom: '2px solid $textPrimary',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '20px',
  lineHeight: '30px',
  height: '48px',

  '&:first-of-type': {
    borderTop: '4px solid $textPrimary',
  },
  '&:last-of-type': {
    borderBottom: '4px solid $textPrimary',
  },
});

export const TicketOrderPrice = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '24px',
  lineHeight: '36px',
  borderBottom: '2px solid $textPrimary',
  marginTop: '5vh',
  marginBottom: '2vh',
});

export const TicketOrderButton = styled('div', {
  '& > button': {
    width: '100%',
    height: '60px',
  },
});

export const TicketFootnote = styled('div', {
  marginBottom: '5vh',
});

export const TicketPaymentFailureReason = styled('div', {
  justifyContent: 'center',
  alignItems: 'center',
});
