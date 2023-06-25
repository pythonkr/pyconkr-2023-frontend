import { RouteType } from '@/interfaces/RouteType';
import { isEnvProd } from '@/utils';

const routeKeys = [
  'HOME',
  'COC',
  'SPONSOR_INFO',
  'SPONSOR_JOIN',
  'CFP_APPLY',
  'TUTORIAL_APPLY',
  'LOGIN',
  'TICKET',
  'TICKET_DETAIL',
  'MYPAGE',
  'MYPAGE_REFUND',
  'PROGRAM',
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
  LOGIN: {
    title: '로그인',
    route: '/login',
  },
  TICKET: {
    title: '티켓 구매',
    route: '/ticket',
  },
  TICKET_DETAIL: {
    title: '티켓 구매',
    route: '/ticket/buy',
  },
  MYPAGE: {
    title: '마이페이지',
    route: '/mypage',
  },
  MYPAGE_REFUND: {
    title: '환불 신청',
    route: '/mypage/refund',
  },
  PROGRAM: {
    title: '프로그램',
    route: '/program',
  },
};

export const NavBarMenus = [
  Routes.COC,
  Routes.SPONSOR_INFO,
  Routes.CFP_APPLY,
  Routes.TUTORIAL_APPLY,
].concat(isEnvProd() ? [] : [Routes.TICKET]);
export const MobileNavBarMenus = [
  // TODO: 이거 추가하기 => Routes.PROGRAM ,
  Routes.CFP_APPLY,
  Routes.TUTORIAL_APPLY,
  Routes.COC,
  Routes.SPONSOR_INFO,
  Routes.SPONSOR_JOIN,
];
