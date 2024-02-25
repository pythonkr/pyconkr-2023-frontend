import { Routes } from '@/constants/routes';
import Link from 'next/link';
import React from 'react';
import { styled } from 'stitches.config';

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

const LinkButton = styled('button', {
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
        {/* <Link href={Routes.TICKET.route}>
          <LinkButton reversal>티켓 구매</LinkButton>
        </Link> */}
        {/* <Link href="http://bit.ly/talk23" target="_blank">
          <LinkButton reversal style={{ fontSize: '1.1rem' }}>
            라이트닝 토크 신청
          </LinkButton>
        </Link> */}
      </Block>
    </TextBox>
  );
};

export default Teaser;
