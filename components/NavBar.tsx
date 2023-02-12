import React from 'react';
import { styled } from 'stitches.config';
import Link from 'next/link';
import { NavBarMenus, Routes } from '@/constants/routes';
import { StyledButton } from './common/Button';
import { Logo as LogoSvg } from '@/public/icons';
import ThemeSwitch from './ThemeSwitch';

const StyledNavArea = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 40,
  maxWidth: '1440px',
  width: '100%',
  height: '100%',
  margin: '0 auto',
  padding: '24px 80px',
});

const Logo = styled(LogoSvg, {
  display: 'block',
  maxWidth: 230,
  width: '100%',
  '& path': {
    fill: '$textPrimary',
  },
});

const Title = styled('h1', {
  width: 0,
  height: 0,
  fontSize: 0,
  overflow: 'hidden',
  clipPath: 'rect(0, 0, 0, 0)',
});

const MenuItem = styled('span', {
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: '24px',
  color: '$textPrimary',
});

const StyledMenuBox = styled('div', {
  display: 'flex',
  flex: 1,
  alignItems: 'flex-start',
  padding: '0 60px',
  gap: '32px',
});

const StyledMenu = styled('div', {
  display: 'inline-block',
  padding: '0 1.5rem',
});

const SideBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 40,
});

const SolidButton = styled(StyledButton, {
  height: 40,
  backgroundColor: '$textPrimary',
  color: '$backgroundPrimary',
  border: 'none',
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: '24px',
});

const NavBar = () => {
  return (
    <StyledNavArea>
      <Link href={Routes.HOME.route} passHref>
        <Logo width={230} />
        <Title>{Routes.HOME.title}</Title>
      </Link>
      <StyledMenuBox>
        {NavBarMenus.map((menu) => (
          <StyledMenu key={menu.route}>
            <Link href={menu.route} passHref>
              <MenuItem>{menu.title}</MenuItem>
            </Link>
          </StyledMenu>
        ))}
      </StyledMenuBox>
      <SideBox>
        <ThemeSwitch />
        <Link href={Routes.SPONSOR_JOIN.route} passHref>
          <SolidButton size={'small'}>{Routes.SPONSOR_JOIN.title}</SolidButton>
        </Link>
      </SideBox>
    </StyledNavArea>
  );
};

export default NavBar;
