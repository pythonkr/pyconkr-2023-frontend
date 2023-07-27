import { LinkMenu, SectionMenu } from '@/constants/routes';
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
  backgroundColor: '$backgroundPrimary',
  zIndex: '100',
  padding: '1.5rem',
});

const MenuContainer = styled('div', {
  backgroundColor: '$backgroundPrimary',
  display: 'flex',
  flexDirection: 'column',
});

const MenuWrapper = styled('ul', {
  listStyle: 'none',
  padding: '0.5rem',
});

const MenuList = styled('li', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '8px',
  padding: '8px 0',
  zIndex: '1000',
  color: '$textPrimary',
  backgroundColor: '$backgroundPrimary',
});

const SectionItem = styled('span', {
  fontWeight: 700,
  color: '$textPrimary',
  fontSize: '24px',
  lineHeight: '28px',
  display: 'inline-block',
  padding: '8px 0',
});

const MenuItemWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
});

const MenuItem = styled('span', {
  fontWeight: 700,
  color: '$textPrimary',
  fontSize: '18px',
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

const IconContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
});

const IconWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '32px',
  height: '32px',
});

const Divider = styled('hr', {
  borderTop: '1px solid $textPrimary',
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
        <IconContainer>
          <ThemeSwitch isMobile />
          {isMobileMenuOpen ? (
            <IconWrapper>
              <CloseIcon fill={isDark ? 'white' : 'black'} />
            </IconWrapper>
          ) : (
            <IconWrapper>
              <PlusIcon />
            </IconWrapper>
          )}
        </IconContainer>
      </MenuIconWrapper>
      {isMobileMenuOpen && (
        <ForeGroundContainer onClick={handleMobileMenuClick}>
          <MenuContainer>
            {SectionMenu.map((section) => (
              <MenuWrapper key={section.label}>
                <SectionItem>{section.label}</SectionItem>
                <Divider />
                <MenuList>
                  {section.items.map((menu) => (
                    <Link key={menu.route} href={menu.route} passHref>
                      <MenuItemWrapper>
                        <MenuItem>{menu.title}</MenuItem>
                        <LinkArrowIcon width="28" height="28" />
                      </MenuItemWrapper>
                    </Link>
                  ))}
                </MenuList>
              </MenuWrapper>
            ))}
            {LinkMenu.map((menu) => (
              <MenuWrapper key={menu.title}>
                <Link key={menu.route} href={menu.route}>
                  <MenuItemWrapper>
                    <SectionItem>{menu.title}</SectionItem>
                    <LinkArrowIcon width="28" height="28" />
                  </MenuItemWrapper>
                </Link>
              </MenuWrapper>
            ))}
          </MenuContainer>
        </ForeGroundContainer>
      )}
    </Container>
  );
};

export default NavBarMobile;
