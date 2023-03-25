import { NavBarMenus } from '@/constants/routes';
import { styled } from '@/stitches.config';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { HamburgerIcon } from '@/public/icons';
import { CloseIcon } from '@/public/icons';

const Container = styled('div', {
  display: 'block',
  '@bp2': {
    display: 'none',
  },
});

const ForeGroundContainer = styled('div', {
  position: 'fixed',
  top: '80px',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: '$backgroundPrimary',
  zIndex: '100',
});

const MenuContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  margin: '10px 0',
  padding: '30px',
});

const MenuItem = styled('span', {
  fontWeight: 700,
  color: '$textPrimary',
  fontSize: '24px',
  lineHeight: '24px',
});

const MenuIconWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  width: '35px',
  height: '35px',
  cursor: 'pointer',
  zIndex: '101',
});

const NavBarMobile = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useRouter();

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname, setIsMobileMenuOpen]);

  return (
    <Container>
      <MenuIconWrapper onClick={handleMobileMenuClick}>
        {isMobileMenuOpen ? (
          <CloseIcon width="30" height="30" />
        ) : (
          <HamburgerIcon width="30" height="30" />
        )}
      </MenuIconWrapper>
      {isMobileMenuOpen && (
        <ForeGroundContainer>
          <MenuContainer>
            {NavBarMenus.map((menu) => (
              <Link key={menu.route} href={menu.route} passHref>
                <MenuItem>{menu.title}</MenuItem>
              </Link>
            ))}
          </MenuContainer>
        </ForeGroundContainer>
      )}
    </Container>
  );
};

export default NavBarMobile;
