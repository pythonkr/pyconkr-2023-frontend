import { MobileNavBarMenus } from '@/constants/routes';
import { styled } from '@/stitches.config';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
  DarkModeLinkArrowIcon,
  DarkModePlusIcon,
  LightModeLinkArrowIcon,
  LightModePlusIcon,
} from '@/public/icons';
import { CloseIcon } from '@/public/icons';
import ThemeSwitch from '../ThemeSwitch';
import { useTheme } from 'next-themes';

const Container = styled('div', {
  display: 'block',
  '@bp2': {
    display: 'none',
  },
});

const ForeGroundContainer = styled('div', {
  position: 'fixed',
  top: '44px',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  zIndex: '100',
});

const MenuContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const MenuWrapper = styled('ul', {
  listStyle: 'none',
});

const MenuList = styled('li', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '8px',
  padding: '8px 8px 8px 16px',
  zIndex: '1000',
  color: '$textPrimary',
  backgroundColor: '$backgroundPrimary',
  borderTop: '1px solid $textPrimary',
});

const MenuItem = styled('span', {
  fontWeight: 700,
  color: '$textPrimary',
  fontSize: '24px',
  lineHeight: '28px',
});

const MenuIconWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  height: '35px',
  cursor: 'pointer',
  zIndex: '101',
});

const IconWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
});

const NavBarMobile = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const { pathname } = useRouter();

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const isDark = resolvedTheme === 'dark';
  const PlusIcon = isDark ? DarkModePlusIcon : LightModePlusIcon;
  const LinkArrowIcon = isDark ? DarkModeLinkArrowIcon : LightModeLinkArrowIcon;

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname, setIsMobileMenuOpen]);

  return (
    <Container>
      <MenuIconWrapper onClick={handleMobileMenuClick}>
        <IconWrapper>
          <ThemeSwitch isMobile />
          {isMobileMenuOpen ? (
            <CloseIcon
              width="20"
              height="20"
              fill={isDark ? 'white' : 'black'}
            />
          ) : (
            <PlusIcon width="20" height="20" />
          )}
        </IconWrapper>
      </MenuIconWrapper>
      {isMobileMenuOpen && (
        <ForeGroundContainer onClick={handleMobileMenuClick}>
          <MenuContainer>
            <MenuWrapper>
              {MobileNavBarMenus.map((menu) => (
                <Link key={menu.route} href={menu.route} passHref>
                  <MenuList>
                    <MenuItem>{menu.title}</MenuItem>
                    <LinkArrowIcon width="28" height="28" />
                  </MenuList>
                </Link>
              ))}
            </MenuWrapper>
          </MenuContainer>
        </ForeGroundContainer>
      )}
    </Container>
  );
};

export default NavBarMobile;
