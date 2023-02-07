import React from 'react';
import { styled } from 'stitches.config';
import Link from 'next/link';
import Button from './common/Button';
import { H4 } from './heading';

const StyledNavArea = styled('div', {
  width: '74.6rem',
  height: '5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
});

const Body = styled('p', {
  bodyText: 1,
  color: '$textPrimary',
});

const StyledMenuBox = styled('div', {
  margin: '0 21.5rem',
});

const StyledMenu = styled('div', {
  display: 'inline-block',
  padding: '0 1.5rem',
});

/* TODO: Router URL이 추가되면 아래 변수를 수정해야 해요 */
const logoLink = ''; // PyConKR
const cocLink = ''; // 행동 강령
const sponsorInfoLink = ''; // 후원 안내
const sponsorBtnLink = ''; // 후원하기

const NavBar = () => {
  return (
    <StyledNavArea>
      <Link href={`/${logoLink}`} passHref>
        <H4>PyConKR</H4>
      </Link>
      <StyledMenuBox>
        <StyledMenu>
          <Link href={`/${cocLink}`} passHref>
            <Body>행동 강령</Body>
          </Link>
        </StyledMenu>
        <StyledMenu>
          <Link href={`/${sponsorInfoLink}`} passHref>
            <Body>후원 안내</Body>
          </Link>
        </StyledMenu>
      </StyledMenuBox>
      <Link href={`/${sponsorBtnLink}`} passHref>
        <Button>후원하기</Button>
      </Link>
    </StyledNavArea>
  );
};

export default NavBar;
