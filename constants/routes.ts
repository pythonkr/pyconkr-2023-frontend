import { RouteType } from '@/interfaces/RouteType';

const routeKeys = [
  'HOME',
  'COC',
  'SPONSOR_INFO',
  'SPONSOR_JOIN',
  'CFP_APPLY',
  'TUTORIAL_APPLY',
  'SPRINT_APPLY',
  'LOGIN',
  'TICKET',
  'MYPAGE',
  'MYPAGE_REFUND',
  'SESSION',
  'TUTORIAL_LIST',
  'SPRINT_LIST',
  'FINANCIAL_AID',
] as const;

export const Routes: { [key in (typeof routeKeys)[number]]: RouteType } = {
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
  TUTORIAL_APPLY: {
    title: '튜토리얼',
    route: '/tutorials/apply',
  },
  SPRINT_APPLY: {
    title: '스프린트',
    route: '/sprint/apply',
  },
  LOGIN: {
    title: '로그인',
    route: '/login',
  },
  TICKET: {
    title: '티켓 구매',
    route: '/ticket',
  },
  MYPAGE: {
    title: '마이페이지',
    route: '/mypage',
  },
  MYPAGE_REFUND: {
    title: '환불 신청',
    route: '/mypage/refund',
  },
  SESSION: {
    title: '발표 목록',
    route: '/session',
  },
  TUTORIAL_LIST: {
    title: '튜토리얼',
    route: '/tutorials',
  },
  SPRINT_LIST: {
    title: '스프린트',
    route: '/sprint',
  },
  FINANCIAL_AID: {
    title: '재정 지원',
    route: '/fa',
  },
};

export const NavBarMenus = [
  Routes.COC,
  Routes.SPONSOR_INFO,
  // Routes.CFP_APPLY,
  Routes.SESSION,
  Routes.FINANCIAL_AID,
  Routes.TUTORIAL_LIST,
  Routes.SPRINT_LIST,
  Routes.TICKET,
];
export const MobileNavBarMenus = [
  Routes.COC,
  Routes.SPONSOR_INFO,
  // Routes.CFP_APPLY,
  Routes.SESSION,
  Routes.FINANCIAL_AID,
  Routes.TUTORIAL_LIST,
  Routes.SPRINT_LIST,
  // Routes.SPONSOR_JOIN,
  Routes.TICKET,
];
