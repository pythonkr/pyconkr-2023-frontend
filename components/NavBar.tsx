import Link from 'next/link';
import React from 'react';
import { styled } from '../stitches.config';
import { Body1 } from './body';
import Button from './common/Button';
import { H4 } from './heading';

const NavHeader = styled('div', {
  fontFamily: 'Pretendard',
  width: '74.6rem', 
  height: '5rem', 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const MenuBox = styled('div', {
  margin: '0 21.5rem',
});

const Menu = styled('div', {
  display: 'inline-block',
  padding: '0 1.5rem',
});

const NavBar = () => {
  /* TODO: Router URL이 추가되면 아래 변수를 수정해야 해요 */
  const logoLink=''; // PyConKR
  const cocLink=''; // 행동 강령
  const sponsorInfoLink=''; // 후원 안내
  const sponsorBtnLink=''; // 후원하기

  return (
    <NavHeader>
      <Link href={'/'+logoLink} passHref>
        <H4>PyConKR</H4>
      </Link>
      <MenuBox>
        <Menu>
          <Link href={'/'+cocLink} passHref>
            <Body1>행동 강령</Body1>
          </Link>
        </Menu>
        <Menu>
          <Link href={'/'+sponsorInfoLink} passHref>
            <Body1>후원 안내</Body1>
          </Link>
        </Menu>
      </MenuBox>
      <Link href={'/'+sponsorBtnLink} passHref>
        <Button children='후원하기'/>
      </Link>
    </NavHeader>
  );
};

export default NavBar;
