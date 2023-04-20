export const SponsorLevelRow = [
  '후원금',
  '스폰서 수',
  '티켓 지원',
  '부스',
  '후원사 세션',
  '홍보 영상',
  'SNS 홍보',
  '증정품 지급',
  '후원증서',
  '로고 노출 위치',
];

export enum SponsorLevelStatus {
  Active = 'active',
  Expired = 'expired',
}

export interface SponsorLevelColumn {
  accessor: string;
  Header: string;
  status: SponsorLevelStatus;
}

export const SponsorLevelColumn1: SponsorLevelColumn[] = [
  {
    accessor: 'keystone',
    Header: '키스톤',
    status: SponsorLevelStatus.Active,
  },
  {
    accessor: 'diamond',
    Header: '다이아몬드',
    status: SponsorLevelStatus.Active,
  },
  {
    accessor: 'sapphire',
    Header: '사파이어',
    status: SponsorLevelStatus.Expired,
  },
  {
    accessor: 'platinum',
    Header: '플레티넘',
    status: SponsorLevelStatus.Active,
  },
  {
    accessor: 'ruby',
    Header: '루비',
    status: SponsorLevelStatus.Active,
  },
];

export const SponsorLevelColumn2: SponsorLevelColumn[] = [
  {
    accessor: 'gold',
    Header: '골드',
    status: SponsorLevelStatus.Active,
  },
  {
    accessor: 'silver',
    Header: '실버',
    status: SponsorLevelStatus.Active,
  },
  {
    accessor: 'startup',
    Header: '스타트업',
    status: SponsorLevelStatus.Active,
  },
  {
    accessor: 'community',
    Header: '커뮤니티',
    status: SponsorLevelStatus.Active,
  },
  {
    accessor: 'publisher',
    Header: '출판사',
    status: SponsorLevelStatus.Active,
  },
];

export const SponsorLevelData1 = [
  {
    keystone: '40,000,000원',
    diamond: '25,000,000원',
    sapphire: '20,000,000원',
    platinum: '15,000,000원',
    ruby: '8,000,000원',
  },
  {
    keystone: '1개',
    diamond: '2개',
    sapphire: '2개',
    platinum: '4개',
    ruby: '10개',
  },
  {
    keystone: '20매',
    diamond: '15매',
    sapphire: '8매',
    platinum: '5매',
    ruby: '5매',
  },
  {
    keystone: '5칸',
    diamond: '3칸',
    sapphire: '2칸',
    platinum: '2칸',
    ruby: '1칸',
  },
  {
    keystone: '1세션',
    diamond: '1세션',
    sapphire: '1세션',
    platinum: '-',
    ruby: '-',
  },
  {
    keystone: '2회',
    diamond: '1회',
    sapphire: '2회',
    platinum: '1회',
    ruby: '-',
  },
  {
    keystone: true,
    diamond: true,
    sapphire: true,
    platinum: true,
    ruby: true,
  },
  {
    keystone: true,
    diamond: true,
    sapphire: true,
    platinum: true,
    ruby: true,
  },
  {
    keystone: true,
    diamond: true,
    sapphire: true,
    platinum: true,
    ruby: true,
  },
  {
    keystone: `현수막\n스탠딩 배너\n웹사이트\n네임택(티켓) 스트랩\n포토월`,
    diamond: `현수막\n스탠딩 배너\n웹사이트`,
    sapphire: `현수막\n스탠딩 배너\n웹사이트`,
    platinum: `현수막\n스탠딩 배너\n웹사이트`,
    ruby: `현수막\n스탠딩 배너\n웹사이트`,
  },
];

export const SponsorLevelData2 = [
  {
    gold: '6,000,000원',
    silver: '2,000,000원',
    startup: '1,000,000원',
    community: '300,000원',
    publisher: '도서 후원',
  },
  {
    gold: '2개',
    silver: '제한 없음',
    startup: '제한 없음',
    community: '제한 없음',
    publisher: '제한 없음',
  },
  {
    gold: '5매',
    silver: '1매',
    startup: '1매',
    community: '-',
    publisher: '-',
  },
  {
    gold: '-',
    silver: '-',
    startup: '-',
    community: '-',
    publisher: '-',
  },
  {
    gold: '1세션',
    silver: '-',
    startup: '-',
    community: '-',
    publisher: '-',
  },
  {
    gold: '-',
    silver: '-',
    startup: '-',
    community: '-',
    publisher: '-',
  },
  {
    gold: true,
    silver: true,
    startup: true,
    community: true,
    publisher: false,
  },
  {
    gold: true,
    silver: true,
    startup: true,
    community: true,
    publisher: true,
  },
  {
    gold: true,
    silver: true,
    startup: true,
    community: true,
    publisher: false,
  },
  {
    gold: '현수막\n스탠딩 배너\n웹사이트',
    silver: '현수막\n스탠딩 배너\n웹사이트',
    startup: '현수막\n스탠딩 배너\n웹사이트',
    community: '현수막\n스탠딩 배너\n웹사이트',
    publisher: '현수막\n스탠딩 배너\n웹사이트',
  },
];
