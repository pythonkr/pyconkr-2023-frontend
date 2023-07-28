import { RouteType } from '@/interfaces/RouteType';
import { styled } from '@stitches/react';
import Link from 'next/link';

const DropDownMenu = styled('div', {
  position: 'absolute',
  backgroundColor: '$backgroundPrimary',
});

const MenuContainer = styled('div', {
  paddingTop: '1rem',
  display: 'flex',
  flexDirection: 'column',
});

const MenuItem = styled('span', {
  fontWeight: 600,
  color: '$textSecondary',
  fontSize: '16px',
  lineHeight: '24px',
  '&:hover': {
    color: '$textPrimary',
  },
});
const StyledMenu = styled('div', {
  display: 'inline-block',
  padding: '0.25rem 0',
});

export const MenuDropdown = ({ items }: { items: RouteType[] }) => {
  return (
    <DropDownMenu>
      <MenuContainer>
        {items.map((menu) => (
          <StyledMenu key={menu.route}>
            <Link href={menu.route} passHref>
              <MenuItem>{menu.title}</MenuItem>
            </Link>
          </StyledMenu>
        ))}
      </MenuContainer>
    </DropDownMenu>
  );
};
export default MenuDropdown;
