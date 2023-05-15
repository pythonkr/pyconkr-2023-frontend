import { RouteType } from '@/interfaces/RouteType';

export const Routes: { [key: string]: RouteType } = {
  HOME: {
    title: '파이콘 한국 2023',
    route: '/',
  },
  COC: {
    title: '행동강령',
    route: '/coc',
  },
  SPONSOR_INFO: {
    title: '후원안내',
    route: '/sponsor/information',
  },
  SPONSOR_JOIN: {
    title: '후원하기',
    route: '/sponsor/join',
  },
  CFP_APPLY: {
    title: '발표제안',
    route: '/cfp/apply',
  },
  TUTORIAL_APPLY: {
    title: '튜토리얼',
    route: '/tutorials/apply',
  },
  LOGIN: {
    title: '로그인',
    route: '/login',
  },
};

export const NavBarMenus = [
  Routes.COC,
  Routes.SPONSOR_INFO,
  Routes.CFP_APPLY,
  Routes.TUTORIAL_APPLY,
];
export const MobileNavBarMenus = [
  // TODO: 이거 추가하기 => Routes.PROGRAM ,
  Routes.CFP_APPLY,
  Routes.TUTORIAL_APPLY,
  Routes.COC,
  Routes.SPONSOR_INFO,
  Routes.SPONSOR_JOIN,
];
