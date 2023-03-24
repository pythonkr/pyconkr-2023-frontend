import React from 'react';
import { css, styled } from 'stitches.config';

const TextBox = styled('div', {
  fontSize: '80px',
  fontWeight: 'bold',
  paddingTop: 80,
  paddingLeft: 40,
  paddingRight: 40,
  height: 'calc(100vh - 80px)',

  '@bp2': {
    paddingTop: 220,
  },
});

const Title = styled('div', {
  whiteSpace: 'pre-wrap',
  fontSize: '12vw',
  '@bp2': {
    fontSize: 'inherit',
    whiteSpace: 'normal',
  },
});

const Date = styled('div', {
  fontSize: '8vw',

  '@bp2': {
    fontSize: 'inherit',
  },
});

const Location = styled('div', {
  fontSize: '6vw',

  '@bp2': {
    fontSize: 'inherit',
  },
});
const Teaser = () => {
  return (
    <TextBox>
      <Title>{'다시, \n우리, \n파이썬'}</Title>
      <Date>2023.08.11-13</Date>
      <Location>COEX 그랜드볼룸 & 아셈볼룸</Location>
    </TextBox>
  );
};

export default Teaser;
