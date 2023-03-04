import React from 'react';
import { useRouter } from 'next/router';
import { styled } from 'stitches.config';
import Link from 'next/link';
import { H3 } from '@/components/heading';
import { RouteType } from '@/interfaces/RouteType';

const SubNavBarList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '400px',
});

const SubNavBarListItem = styled(Link, {
  color: '$textSecondary',
  variants: {
    active: {
      true: {
        color: '$textPrimary',
      },
    },
  },
  '&:hover': {
    color: '$textPrimary',
  },
  '&+&': {
    marginTop: '24px',
  },
});

interface SubNavBarProps {
  routes: RouteType[];
}

const SubNavBar = (props: SubNavBarProps) => {
  const { routes } = props;
  const router = useRouter();

  const isActive = (route: RouteType): boolean => {
    return router.asPath === route.route;
  };

  return (
    <SubNavBarList>
      {routes.map((route, index) => (
        <SubNavBarListItem
          key={`subRoute-${index}`}
          href={route.route}
          active={isActive(route)}
        >
          <H3>{route.title}</H3>
        </SubNavBarListItem>
      ))}
    </SubNavBarList>
  );
};

export default SubNavBar;
