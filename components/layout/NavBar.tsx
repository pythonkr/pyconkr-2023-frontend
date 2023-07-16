import React, { useCallback, useEffect, useState } from 'react';
import { styled } from 'stitches.config';
import Link from 'next/link';
import { NavBarMenus, Routes } from '@/constants/routes';
import { StyledButton } from '../common/Button';
import { Logo as LogoSvg } from '@/public/icons';
import ThemeSwitch from '../ThemeSwitch';
import NavBarMobile from './NavBarMobile';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userState } from '@/stores/login';
import { useRouter } from 'next/router';
import { signOut } from '@/api/login';

const StyledNavArea = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: 40,
  alignItems: 'center',
  backgroundColor: '$backgroundPrimary',
  width: '100%',
  margin: '0 auto',
  paddingRight: '30px',
  zIndex: '99',

  '@bp1': {
    height: '44px',
  },
  '@bp2': {
    padding: '1rem 2rem',
    height: '80px',
  },
});

const Logo = styled(LogoSvg, {
  display: 'block',
  width: 230,
  '& path': {
    fill: '$textPrimary',
  },

  '@bp2': {
    maxWidth: 230,
  },
});

const Title = styled('h1', {
  width: 0,
  height: 0,
  fontSize: 0,
  overflow: 'hidden',
  clipPath: 'rect(0, 0, 0, 0)',
});

const NavContainer = styled('div', {
  display: 'none',
  '@bp2': {
    display: 'flex',
  },
});

const MenuItem = styled('span', {
  fontWeight: 700,
  color: '$textPrimary',
  fontSize: '24px',
  lineHeight: '24px',
});

const StyledMenuBox = styled('div', {
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  padding: '0 60px',
  gap: '32px',
});

const StyledMenu = styled('div', {
  display: 'inline-block',

  '@bp1': {
    padding: '0',
  },
  '@bp2': {
    padding: '0 1.5rem',
  },
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
  fontWeight: 700,
  fontSize: '24px',
  lineHeight: '24px',
});

const NavBar = () => {
  const router = useRouter();
  const loginUser = useRecoilValue(userState);
  const setLoginUser = useSetRecoilState(userState);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();

  useEffect(() => {
    setIsLoggedIn(loginUser.userid !== null);
  }, [loginUser]);

  const logout = useCallback(async () => {
    try {
      await signOut();
    } catch (e) {
      console.error(e); // 딱히 신경쓰지 않음
    }
    setLoginUser((prev) => ({ ...prev, userid: null }));
    router.push(Routes.HOME.route);
  }, [setLoginUser, router]);

  return (
    <StyledNavArea>
      <Link href={Routes.HOME.route} passHref>
        <Logo width={230} height={'100%'} />
        <Title>{Routes.HOME.title}</Title>
      </Link>
      <NavBarMobile />
      <NavContainer>
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
          {isLoggedIn === true && (
            <>
              <Link href={Routes.MYPAGE.route} passHref>
                <SolidButton size={'small'}>{Routes.MYPAGE.title}</SolidButton>
              </Link>
              <SolidButton size={'small'} onClick={logout}>
                로그아웃
              </SolidButton>
            </>
          )}
        </SideBox>
      </NavContainer>
    </StyledNavArea>
  );
};

export default NavBar;
