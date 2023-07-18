import { styled } from 'stitches.config';

export const ItemContainer = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  margin: '15px 0px 40px 0',
});
export const ImageBox = styled('div', {
  width: '6rem',
  height: '6rem',
  borderRadius: 100,
  flexShrink: 0,
  marginRight: '1rem',
  overflow: 'hidden',
});
export const ContentBox = styled('div', {
  width: 'calc(100% - 7rem)',
});
export const Title = styled('div', {
  bodyText: 1,
  padding: '0.2rem',
  fontWeight: 'bold',
});
export const Text = styled('div', {
  bodyText: 2,
  padding: '0.2rem',
  whiteSpace: 'pre-wrap',
});
export const Container = styled('div', {
  maxWidth: '900px',
  margin: '0 auto',
  paddingTop: '1rem',
  marginTop: '2rem',
});
export const H2Box = styled('div', {
  borderBottom: '4px solid $textPrimary',
  paddingBottom: '20px',
});
