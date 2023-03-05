import { RouteType } from '@/interfaces/RouteType';

export const Routes: { [key: string]: RouteType } = {
  HOME: {
    title: 'PyCon KR',
    route: '/',
  },
  COC: {
    title: '행동 강령',
    route: '/coc',
  },
  SPONSOR_INFO: {
    title: '후원 안내',
    route: '/sponsor/information',
  },
  SPONSOR_JOIN: {
    title: '후원하기',
    route: '/sponsor/join',
  },
};

export const NavBarMenus = [Routes.COC, Routes.SPONSOR_INFO];
