import {
  TimeTable,
  TimeTableInfo,
  SessionDifficulty,
  SessionDuration,
  SessionLanguage,
} from '@/@types/session';

export const Day = ['Day1', 'Day2'] as const;
export const SessionCategory = [
  '파이썬',
  '오픈소스/커뮤니티',
  '웹 서비스',
  '데이터 과학',
  '데브옵스',
  '로보틱스/임베디드 시스템',
  '일상/사회',
  '기타',
] as const;

export const CategoryLabelColor: {
  [T in (typeof SessionCategory)[number]]: string;
} = {
  파이썬: '#FFE0E9',
  '오픈소스/커뮤니티': '#BDECE6',
  '웹 서비스': '#EDEDED',
  '데이터 과학': '#CBE9FF',
  데브옵스: '#F2E2FF',
  '로보틱스/임베디드 시스템': '#F9FAD6',
  '일상/사회': '#D4F2C9',
  기타: '#FFE4CC',
};

const Day1: TimeTable[] = [
  {
    time: '10:00 ~ 10:10 (10`)',
    sessions: [
      {
        title: '오프닝',
        id: '',

        room_num: ['101/102', '103', '104/105'],
      },
    ],
  },
  {
    time: '10:10 ~ 10:40 (30`)',
    sessions: [
      {
        title: '우리 파이썬이의 꼬꼬마 시절',
        id: '47',
        host_name: '장혜식',
        room_num: ['101/102', '103', '104/105'],
      },
    ],
  },
  {
    time: '10:40 ~ 10:50 (10`)',
    sessions: [
      {
        title: 'Break',
        id: '',
        room_num: ['101/102', '103', '104/105'],
      },
    ],
  },
  {
    time: '10:50 ~ 11:20 (30`)',
    sessions: [
      {
        title: 'RustPython, 파이썬 커뮤니티로',
        id: '48',
        host_name: '정윤원',
        room_num: ['101/102', '103', '104/105'],
      },
    ],
  },
  {
    time: '11:20 ~ 12:30 (70`)',
    sessions: [
      {
        title: '점심 + 배치 변경',
        id: '',

        room_num: ['101/102', '103', '104/105'],
      },
    ],
  },
  {
    time: '12:30 ~ 13:10 (40`)',
    sessions: [
      {
        title: '파이썬을 처음 사용하는 동료와 효율적으로 일하는 방법',
        id: '18',
        host_name: '이태현',
        room_num: ['101/102'],
        category: '파이썬',
      },
      {
        title:
          '짠내나는 데이터 다루기 (부제 : 제한된 메모리로 다룰 수 있는 현실적인 데이터)',
        id: '29',
        host_name: '박조은',
        room_num: ['103'],
        category: '데이터 과학',
      },
      {
        title: 'Introduction to Structural Pattern Matching',
        id: '12',
        host_name: 'Takanori Suzuki',
        room_num: ['104/105'],
        category: '파이썬',
      },
    ],
  },
  {
    time: '13:10 ~ 13:30 (20`)',
    sessions: [
      {
        title: 'Break',
        id: '',

        room_num: ['101/102', '103', '104/105'],
      },
    ],
  },
  {
    time: '13:30 ~ 13:50 (20`)',
    sessions: [
      {
        title: 'Async state machine',
        id: '17',
        host_name: '이상훈',
        room_num: ['101/102'],
        category: '파이썬',
      },
      {
        title: 'Icebreaking with import',
        id: '8',
        host_name: '윤수진',
        room_num: ['103'],
        category: '웹 서비스',
      },
      {
        title: '15년 만에 Python2에서 Python3로 Migration',
        id: '3',
        host_name: '강지훈',
        room_num: ['104/105'],
        category: '파이썬',
      },
    ],
  },
  {
    time: '13:50 ~ 14:10 (20`)',
    sessions: [
      {
        title: 'Break',
        id: '',

        room_num: ['101/102', '103', '104/105'],
      },
    ],
  },
  {
    time: '14:10 ~ 14:50 (40`)',
    sessions: [
      {
        title:
          '로컬 환경에서 사이즈가 큰 데이터를 처리/분석하기 위한 전략: 🐼Pandas 2.0, 🤗HF Datasets',
        id: '46',
        host_name: '오성우(sackoh)',
        room_num: ['101/102'],
        category: '데이터 과학',
      },
      { title: '', host_name: '', id: '', room_num: ['103'] },
      {
        title: 'pyo3를 활용한 분산 시스템 알고리즘 구현체 바인딩 작성 도전기',
        id: '15',
        host_name: '이규봉',
        room_num: ['104/105'],
        category: '파이썬',
      },
    ],
  },
  {
    time: '14:50 ~ 15:10 (20`)',
    sessions: [
      {
        title: 'Break',
        id: '',

        room_num: ['101/102', '103', '104/105'],
      },
    ],
  },
  {
    time: '15:10 ~ 15:30 (20`)',
    sessions: [
      {
        title:
          'Django 봄은 다시 온다 - Django와 함께 좋은 웹서비스 코드 만들기',
        id: '9',
        host_name: '정경업',
        room_num: ['101/102'],
        category: '웹 서비스',
      },
      {
        title: 'Python 개발자를 위한 Nix',
        id: '32',
        host_name: '김수빈',
        room_num: ['103'],
        category: '데브옵스',
      },
      {
        title:
          '반복적인 일이 싫은 선생님의 Python을 활용한 학교에서의 업무자동화 사례',
        id: '40',
        host_name: '황수빈',
        room_num: ['104/105'],
        category: '일상/사회',
      },
    ],
  },
  {
    time: '15:30 ~ 15:50 (20`)',
    sessions: [
      {
        title: 'Break',
        id: '',

        room_num: ['101/102', '103', '104/105'],
      },
    ],
  },
  {
    time: '15:50 ~ 16:30 (40`)',
    sessions: [
      {
        title: 'Jupyter Book을 활용해 손쉽게 콘텐츠를 생산하고 공유하자!',
        id: '13',
        host_name: '안성진',
        room_num: ['101/102'],
        category: '파이썬',
      },
      { title: '', host_name: '', id: '', room_num: ['103'] },
      {
        title: 'pandas와 PySpark로 데이터 워크로드 확장하기',
        id: '26',
        host_name: '권혁진',
        room_num: ['104/105'],
      },
    ],
  },
  {
    time: '16:30 ~ 16:50 (20`)',
    sessions: [
      {
        title: 'Break',
        id: '',

        room_num: ['101/102', '103', '104/105'],
      },
    ],
  },
  {
    time: '16:50 ~ 17:10 (20`)',
    sessions: [
      {
        title: 'Improving debuggability of complex asyncio applications',
        id: '22',
        host_name: '김준기',
        room_num: ['101/102'],
        category: '파이썬',
      },
      {
        title: '-',
        id: '',
        host_name: '김일호 / 후원사',
        room_num: ['103'],
      },
      {
        title: '',
        id: '',
        host_name: '',
        room_num: ['104/105'],
        category: undefined,
      },
    ],
  },
  {
    time: '17:10 ~ 17:30 (20`)',
    sessions: [
      {
        title: 'Break',
        id: '',

        room_num: ['101/102', '103', '104/105'],
      },
    ],
  },
  {
    time: '17:30 ~ 17:50 (20`)',
    sessions: [
      {
        title: 'Django 컨트리뷰터가 되기까지의 여정',
        id: '42',
        host_name: '윤준기',
        room_num: ['101/102'],
        category: '오픈소스/커뮤니티',
      },
      {
        title: 'mypy에 올라타서 함수 호출자를 재귀적으로 탐색하기',
        id: '25',
        host_name: '양경모',
        room_num: ['103'],
        category: '파이썬',
      },
      {
        title: '리스트와 딕셔너리 학습을 위한 패키지 개발 여정',
        id: '39',
        host_name: '한상곤',
        room_num: ['104/105'],
        category: '일상/사회',
      },
    ],
  },
  {
    time: '17:50 ~ 18:10 (20`)',
    sessions: [
      {
        title: 'Break',
        id: '',

        room_num: ['101/102', '103', '104/105'],
      },
    ],
  },
  {
    time: '18:10 ~ 19:00 (50`)',
    sessions: [
      {
        title: '라이트닝 토크',
        id: '',

        room_num: ['101/102', '103', '104/105'],
      },
    ],
  },
];

const Day2: TimeTable[] = [
  {
    time: '10:00 ~ 10:40 (40`)',
    sessions: [
      {
        title: 'CPython 코드로 보는 파이썬의 심층 세상',
        id: '37',
        host_name: '한성민',
        room_num: ['101/102'],
        category: '파이썬',
      },
      {
        title: 'Chatbot Framework with Python',
        id: '43',
        host_name: '조성빈',
        room_num: ['103'],
        category: '오픈소스/커뮤니티',
      },
      {
        title: 'MLOps: Model Serving Architecture with BentoML',
        id: '7',
        host_name: '김성렬',
        room_num: ['104/105'],
        category: '데이터 과학',
      },
    ],
  },
  {
    time: '10:40 ~ 11:00 (20`)',
    sessions: [
      {
        title: 'Break',
        id: '',

        room_num: ['101/102', '103', '104/105'],
      },
    ],
  },
  {
    time: '11:00 ~ 11:20 (20`)',
    sessions: [
      {
        title:
          'Django와 FastAPI를 함께 사용하여, 실무에서 사용하는 채팅 백앤드를 만들어보자',
        id: '4',
        host_name: '김지훈',
        room_num: ['101/102'],
        category: '웹 서비스',
      },
      {
        title:
          '딥러닝 개발에서의 Poetry 도입기 - 테스팅 및 모델 패키징에서의 의존성 관리',
        id: '34',
        host_name: '정호진',
        room_num: ['103'],
        category: '데브옵스',
      },
      {
        title: 'Pantsbuild로 Django 모노레포 마이크로서비스 구현하기',
        id: '10',
        host_name: '김순',
        room_num: ['104/105'],
        category: '웹 서비스',
      },
    ],
  },
  {
    time: '11:20 ~ 11:40 (20`)',
    sessions: [
      {
        title: 'Break',
        id: '',

        room_num: ['101/102', '103', '104/105'],
      },
    ],
  },
  {
    time: '11:40 ~ 12:20 (40`)',
    sessions: [
      { title: '', host_name: '', id: '', room_num: ['101/102'] },
      {
        title: 'Scalable Backtesting with Python, I/O부터 Scalable까지',
        id: '14',
        host_name: '김태완',
        room_num: ['103'],
        category: '데이터 과학',
      },
      {
        title: 'Python으로 전자음악 작곡하기',
        id: '28',
        host_name: '유태영',
        room_num: ['104/105'],
        category: '일상/사회',
      },
    ],
  },
  {
    time: '12:20 ~ 12:40 (20`)',
    sessions: [
      {
        title: 'Break',
        id: '',

        room_num: ['101/102', '103', '104/105'],
      },
    ],
  },
  {
    time: '12:40 ~ 13:00 (20`)',
    sessions: [
      {
        title: '당신의 Dependency는 안녕하십니까?(Feat. Poetry)',
        id: '23',
        host_name: '김두훈',
        room_num: ['101/102'],
        category: '파이썬',
      },
      {
        title: 'Python을 이용한 Linux 인증 모듈 만들기',
        id: '33',
        host_name: '유성진',
        room_num: ['103'],
        category: '데브옵스',
      },
      {
        title: 'Relay on Django: React와 공생하기',
        id: '2',
        host_name: '강정석',
        room_num: ['104/105'],
        category: '웹 서비스',
      },
    ],
  },
  {
    time: '13:00 ~ 13:20 (20`)',
    sessions: [
      {
        title: 'Break',
        id: '',

        room_num: ['101/102', '103', '104/105'],
      },
    ],
  },
  {
    time: '13:20 ~ 14:00 (40`)',
    sessions: [
      {
        title: '',
        id: '',
        host_name: '',
        room_num: ['101/102'],
      },
      {
        title: 'Django Apps at Scale: Mistakes to Avoid',
        id: '11',
        host_name: 'Kushal Vijay',
        room_num: ['103'],
        category: '파이썬',
      },
      {
        title:
          'Python beyond traditional software development; Developing Robots using MicroPython',
        id: '45',
        host_name: 'Olaniyan Adewale',
        room_num: ['104/105'],
        category: '로보틱스/임베디드 시스템',
      },
    ],
  },
  {
    time: '14:00 ~ 14:20 (20`)',
    sessions: [
      {
        title: 'Break',
        id: '',

        room_num: ['101/102', '103', '104/105'],
      },
    ],
  },
  {
    time: '14:20 ~ 14:40 (20`)',
    sessions: [
      {
        title: 'Pynecone 프레임워크로 웹 기반 운영도구 개발하기',
        id: '36',
        host_name: '임찬식',
        room_num: ['101/102'],
        category: '파이썬',
      },
      {
        title: '파이썬에서의 병렬 처리',
        id: '5',
        host_name: '김현우',
        room_num: ['103'],
        category: '웹 서비스',
      },
      {
        title: '아래아한글_이렇게도 활용할 수 있어요.',
        id: '20',
        host_name: '신명진',
        room_num: ['104/105'],
        category: '일상/사회',
      },
    ],
  },
  {
    time: '14:40 ~ 15:00 (20`)',
    sessions: [
      {
        title: 'Break',
        id: '',

        room_num: ['101/102', '103', '104/105'],
      },
    ],
  },
  {
    time: '15:00 ~ 15:40 (40`)',
    sessions: [
      {
        title: 'Python DDD',
        id: '6',
        host_name: '신동현',
        room_num: ['101/102'],
        category: '웹 서비스',
      },
      {
        title: 'Python으로 월 몇 백원으로 사내 슬랙봇 운영해본 이야기',
        id: '44',
        host_name: '신희재',
        room_num: ['103'],
        category: '기타',
      },
      {
        title: '파이썬을 이용한 퀀트 트레이딩',
        id: '31',
        host_name: '정진혁',
        room_num: ['104/105'],
        category: '데이터 과학',
      },
    ],
  },
  {
    time: '15:40 ~ 16:00 (20`)',
    sessions: [
      {
        title: 'Break',
        id: '',

        room_num: ['101/102', '103', '104/105'],
      },
    ],
  },
  {
    time: '16:00 ~ 16:20 (20`)',
    sessions: [
      {
        title: 'FastAPI Deep-dive',
        id: '21',
        host_name: '정보람',
        room_num: ['101/102'],
        category: '파이썬',
      },
      {
        title: '오픈소스와 함께 성장하기(Feat. Django)',
        id: '41',
        host_name: '배두식(조단)',
        room_num: ['103'],
        category: '오픈소스/커뮤니티',
      },
      {
        title:
          'Django ORM에서는 어떻게 SQL Where절 조건 순서를 고정할 수 있을까?',
        id: '24',
        host_name: '안성현(ash84)',
        room_num: ['104/105'],
        category: '웹 서비스',
      },
    ],
  },
  {
    time: '16:20 ~ 16:40 (20`)',
    sessions: [
      {
        title: 'Break',
        id: '',

        room_num: ['101/102', '103', '104/105'],
      },
    ],
  },
  {
    time: '16:40 ~ 17:00 (20`)',
    sessions: [
      {
        title: '이건 정말 없네요...? 없어서 시작한 아래아 한글 패키지 만들기',
        id: '38',
        host_name: '전다민',
        room_num: ['101/102'],
        category: '일상/사회',
      },
      {
        title: '8년만에 다시 만난 Python: Python2 개발자의 Python3 개발 도전기',
        id: '16',
        host_name: '이다니엘',
        room_num: ['103'],
        category: '파이썬',
      },
      {
        title: 'Django 국제화 지원하기',
        id: '19',
        host_name: '서명석 / 후원사',
        room_num: ['104/105'],
        category: '웹 서비스',
      },
    ],
  },
  {
    time: '17:00 ~ 17:20 (20`)',
    sessions: [
      {
        title: 'Break',
        id: '',

        room_num: ['101/102', '103', '104/105'],
      },
    ],
  },
  {
    time: '17:20 ~ 18:00 (40`)',
    sessions: [
      {
        title: 'MLOps, LLM 개발에 필요한 실전 파이썬 디자인 패턴',
        id: '30',
        host_name: '이태호',
        room_num: ['101/102'],
        category: '파이썬',
      },
      { title: '', host_name: '', id: '', room_num: ['103'] },
      {
        title: '걱정돼요. 파이썬을 미워하는 학생과 학부모가 생겨나는 미래가',
        id: '35',
        host_name: '스펜서',
        room_num: ['104/105'],
        category: '일상/사회',
      },
    ],
  },
  {
    time: '18:00 ~ 18:20 (20`)',
    sessions: [
      {
        title: 'Break',
        id: '',

        room_num: ['101/102', '103', '104/105'],
      },
    ],
  },
  {
    time: '18:20 ~ 19:00 (40`)',
    sessions: [
      {
        title: '라이트닝 토크',
        id: '',

        room_num: ['101/102', '103', '104/105'],
      },
    ],
  },
  {
    time: '19:00 ~ 19:10 (10`)',
    sessions: [
      {
        title: '클로징',
        id: '',

        room_num: ['101/102', '103', '104/105'],
      },
    ],
  },
];

export const TimeTables: { [T in (typeof Day)[number]]: TimeTableInfo } = {
  Day1: {
    title: '8월 12일 (토) / August 12th (Sat) KST',
    location: 'COEX 그랜드볼룸',
    TimeTable: Day1,
  },
  Day2: {
    title: '8월 13일 (일) / August 13th (Sun) KST',
    location: 'COEX 그랜드볼룸',
    TimeTable: Day2,
  },
};

export const DIFFICULTY: { [T in SessionDifficulty]: string } = {
  BEGINNER: '하',
  INTERMEDIATE: '중',
  EXPERIENCED: '상',
};

export const DURATION: { [T in SessionDuration]: string } = {
  SHORT: '20분',
  LONG: '40분',
};

export const LANGUAGE: { [T in SessionLanguage]: string } = {
  KOREAN: '한국어',
  ENGLISH: '영어',
};
