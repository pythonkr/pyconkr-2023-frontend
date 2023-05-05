import React from 'react';
import { useRouter } from 'next/router';
import { styled } from 'stitches.config';
import Link from 'next/link';
import { H3 } from '@/components/heading';
import { RouteType } from '@/interfaces/RouteType';

const SubNavBarList = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  flexShrink: 0,
  placeContent: 'space-between',
  overflow: 'hidden',
  gap: 16,

  '@bp2': {
    flexDirection: 'column',
    placeContent: 'normal',
    overflow: 'auto',
    gap: 24,
  },
});

const SubNavBarListItem = styled(Link, {
  color: '$textSecondary',
  display: 'block',
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
