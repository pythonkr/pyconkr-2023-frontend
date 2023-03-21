import { H3, H4 } from '@/components/heading';
import { styled } from 'stitches.config';

export const StyledH3 = styled(H3, {
  padding: '16px 0',
  fontWeight: 'bold',
  ['&:not(:first-child)']: {
    borderTop: '2px solid $textPrimary',
  },
});

export const StyledH4 = styled(H4, {
  paddingTop: '16px',
  fontWeight: 'bold',
  ['&:not(:first-child)']: {
    borderTop: '2px solid $textPrimary',
  },
});
export const Paragraph = styled('p', {
  marginTop: '12px',
  [`& + *`]: {
    marginTop: '28px',
  },
});

export const OrderedList = styled('ol', {
  marginLeft: '24px',
  marginTop: '12px',
  [`& + *`]: {
    marginTop: '28px',
  },
});

export const UnorderedList = styled('ul', {
  marginLeft: '24px',
  marginTop: '12px',
  [`& + *`]: {
    marginTop: '28px',
  },
});

export const ListItem = styled('li', {
  lineHeight: 1.2,
  marginTop: '4px',
  [`& > ${Paragraph}`]: {
    marginTop: 0,
  },
  [`& > ${UnorderedList}`]: {
    marginTop: 0,
  },
});

export const StyledLink = styled('a', {
  textDecoration: 'underline',
});
