import { RouteType } from '@/interfaces/RouteType';
import { styled } from '@stitches/react';
import MenuDropdown from './MenuDropdown';
import { useState } from 'react';
import Link from 'next/link';

const SectionWrapper = styled('div', {
  listStyle: 'none',
  padding: '0.5rem',
  position: 'relative',
});

const SectionTitleWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});
const MenuItem = styled('span', {
  fontWeight: 700,
  color: '$textPrimary',
  fontSize: '24px',
  lineHeight: '24px',
  whiteSpace: 'nowrap',
});

const LinkMenu = ({ title, route }: { title: string; route: string }) => {
  return (
    <SectionWrapper>
      <Link href={route}>
        <SectionTitleWrapper>
          <MenuItem>{title}</MenuItem>
        </SectionTitleWrapper>
      </Link>
    </SectionWrapper>
  );
};

const SectionMenu = ({
  label,
  items,
}: {
  label: string;
  items: RouteType[];
}) => {
  const [show, setShow] = useState(false);
  return (
    <SectionWrapper
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <SectionTitleWrapper>
        <MenuItem>{label}</MenuItem>
      </SectionTitleWrapper>
      {show && <MenuDropdown items={items} />}
    </SectionWrapper>
  );
};

const DesktopMenu = {
  Section: SectionMenu,
  Link: LinkMenu,
};

export default DesktopMenu;
