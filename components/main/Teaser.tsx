import React from 'react';
import { css, styled } from 'stitches.config';

const TextBox = styled('div', {
  fontSize: '80px',
  fontWeight: 'bold',
  paddingTop: 80,
  paddingLeft: 0,
  paddingRight: 0,
  height: 'calc(100vh - 80px)',

  '@bp2': {
    paddingTop: 70,
    paddingLeft: 40,
    paddingRight: 40,
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
  marginTop: 20,
  '@bp2': {
    marginTop: 0,
    fontSize: 'inherit',
  },
});

const Location = styled('div', {
  fontSize: '6vw',

  '@bp2': {
    fontSize: 'inherit',
  },
});

const Block = styled('div', {});

const LinkButton = styled('a', {
  bodyText: 1,
  width: '160px',
  padding: '8px',
  display: 'inline-block',
  textAlign: 'center',
  variants: {
    reversal: {
      true: {
        color: '$backgroundPrimary',
        backgroundColor: '$textPrimary',
      },
      false: {
        color: '$textPrimary',
        backgroundColor: '$backgroundPrimary',
      },
    },
  },
});

const Teaser = () => {
  return (
    <TextBox>
      <Title>{'다시, \n우리, \n파이썬'}</Title>
      <Date>2023.08.11-13</Date>
      <Location>COEX 그랜드볼룸 & 아셈볼룸</Location>
      <Block css={{ marginTop: '16px' }}>
        <LinkButton
          target="_blank"
          href="https://event-us.kr/pyconkr/event/65861"
          reversal={true}
        >
          티켓 구매
        </LinkButton>
      </Block>
    </TextBox>
  );
};

export default Teaser;
