export interface SessionList {
  id: number;
  title: string;
  introduction: string;
  difficulty: string;
  duration: string;
  language: string;
  category: number;
  category_name: string;
  user: User | null;
}

export interface SessionDetail {
  id: number;
  title: string;
  brief?: string; // 리뷰용: 발표에 대한 간단한 설명.
  desc?: string; // 리뷰용: 발표에 대한 자세한 설명
  comment?: string; // 리뷰용: 파준위에게 전하고 싶은 말
  difficulty: SessionDifficulty;
  duration: SessionDuration;
  language: SessionLanguage;
  category: number;
  category_name: string;
  accepted: boolean;
  introduction: string;
  video_url: string | null;
  slide_url: string | null;
  room_num: SessionRoomNumber;
  created_at: string;
  updated_at: string;
  user: User | null;
}

export interface User {
  nickname: string;
  profile_img: string | null;
  bio: string;
}

export type SessionDifficulty = 'BEGINNER' | 'INTERMEDIATE' | 'EXPERIENCED';
export type SessionDuration = 'SHORT' | 'LONG';
export type SessionLanguage = 'KOREAN' | 'ENGLISH';
type SessionRoomNumber = '101' | '102' | '103' | '104' | '105';