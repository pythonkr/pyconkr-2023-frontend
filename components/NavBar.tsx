import React from 'react';
import { styled } from 'stitches.config';
import Link from 'next/link';
import Button from './common/Button';
import { H4 } from './heading';
import { NavBarMenus, Routes } from '../constants/routes';

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
  color: '$white',
});

const StyledMenuBox = styled('div', {
  margin: '0 21.5rem',
});

const StyledMenu = styled('div', {
  display: 'inline-block',
  padding: '0 1.5rem',
});

const NavBar = () => {
  return (
    <StyledNavArea>
      <Link href={Routes.HOME.route} passHref>
        <H4>{Routes.HOME.title}</H4>
      </Link>
      <StyledMenuBox>
        {
          NavBarMenus.map((menu) => (
            <StyledMenu>
              <Link href={menu.route} passHref>
                <Body>{menu.title}</Body>
              </Link>
            </StyledMenu>
          ))
        }
      </StyledMenuBox>
      <Link href={Routes.SPONSOR_JOIN.route} passHref>
        <Button>{Routes.SPONSOR_JOIN.title}</Button>
      </Link>
    </StyledNavArea>
  );
};

export default NavBar;
