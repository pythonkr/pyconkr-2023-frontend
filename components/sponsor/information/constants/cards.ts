import { ImageCardProps, SimpleCardProps } from '../types';
import * as IMG from './images';

export const STEPS: SimpleCardProps[] = [
  {
    id: 1,
    title: '후원사 신청',
    description: `본 페이지 상단의 '후원사로 참여하기' 버튼을 통해 후원에 필요한 정보를 입력해주세요. \n입력해주신 정보는 내부 검토를 거치며, 일부 항목의 경우수정을 요청드릴 수 있습니다.`,
  },
  {
    id: 2,
    title: '전자 계약서 서명',
    description:
      '후원사 신청서에 대한 검토가 완료되면 후원사 계약을 위한 전자 계약서가 발송됩니다.',
  },
  {
    id: 3,
    title: '후원금 입금',
    description:
      '계약서 서명을 완료하신 이후 2주 이내로 후원금 입금을 요청드립니다. 하단에 표기된 후원 금액은 부가세가 포함되지 않은 금액으로, 부가세 10%를 가산하여 입금해주셔야 합니다.',
  },
  {
    id: 4,
    title: '후원사 확정',
    description:
      '후원 금액이 정상적으로 입금된 것이 확인된 즉시, 파이콘 한국 2023의 후원사로 확정됩니다.',
  },
];

// FIXME: 이미지 사이즈에 따라 받도록 수정하기
export const BENEFITS: ImageCardProps[] = [
  {
    id: 0,
    title: '후원사 부스',
    description:
      '후원사만의 공간에서 개발자 채용, 회사 또는 서비스 홍보, 코딩 챌린지,제비 뽑기 등 다양한 행사를 진행할 수 있습니다.',
    imgUrl: IMG.SPONSOR_BOOTH_1920,
    alt: '파이콘 후원사 부스',
  },
  {
    id: 1,
    title: '후원사 세션',
    description:
      '파이콘 한국에서 후원사 로고를 걸고 파이썬 또는 회사/단체 내의 개발 문화에 대해 이야기할 수 있습니다.',
    imgUrl: IMG.SPONSOR_SESSIONS_1920,
    alt: '파이콘 후원사 세션',
  },
  {
    id: 2,
    title: '로고 노출',
    description:
      '파이콘 한국 홈페이지는 지난 홈페이지도 계속 보관, 유지되어 지속적으로 로고가 노출됩니다.',
    imgUrl: IMG.SPONSOR_LOGO_1920,
    alt: '파이콘 로고 노출',
  },
  {
    id: 3,
    title: '홍보 영상',
    description:
      '파이콘 한국에서 발표 세션 중간에 후원 등급별 노출 횟수에 따라 후원사 홍보영상을 송출합니다.',
    imgUrl: IMG.SPONSOR_VIDEO_1920,
    alt: '파이콘 홍보 영상',
  },
  {
    id: 4,
    title: '티켓 지원',
    description:
      '파이콘 한국을 즐길 수 있는 컨퍼런스 티켓을 지원합니다. 티켓 개수는 후원 등급 별 상이합니다.',
    imgUrl: IMG.SPONSOR_TICKET_1920,
    alt: '파이콘 티켓 지원',
  },
  {
    id: 5,
    title: '증정품 지급',
    description:
      '파이콘 한국에서 후원사의 굿즈 등 소정의 증정품을 전달할 수 있습니다.',
    imgUrl: IMG.SPONSOR_GIFT_1920,
    alt: '파이콘 증정품 지급',
  },
  {
    id: 6,
    title: '후원증서',
    description:
      '후원에 대한 감사의 마음을 담아\n파이콘 한국 후원인증서를 드립니다.',
    imgUrl: IMG.SPONSORSHIP_CERTIFICATE_1920,
    alt: '파이콘 후원증서',
  },
];
