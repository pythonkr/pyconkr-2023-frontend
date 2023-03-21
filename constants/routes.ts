import { RouteType } from '@/interfaces/RouteType';

export const Routes: { [key: string]: RouteType } = {
  HOME: {
    title: '파이콘 한국 2023',
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
  CFP_APPLY: {
    title: '발표 제안',
    route: '/cfp/apply',
  },
};

export const NavBarMenus = [Routes.COC, Routes.SPONSOR_INFO, Routes.CFP_APPLY];
