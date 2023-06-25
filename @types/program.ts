import { User } from './user';

export type ProgramDifficulty = 'BEGINNER' | 'INTERMEDIATE' | 'EXPERIENCED';
export type ProgramDuration = 'SHORT' | 'LONG';
export type ProgramLanguage = 'KOREAN' | 'ENGLISH';
type ProgramRoomNumber = '101' | '102' | '103' | '104' | '105';

export interface ProgramList {
  id: number;
  title: string;
  brief: string;
  difficulty: ProgramDifficulty;
  duration: ProgramDuration;
  language: ProgramLanguage;
  category: number;
}

export interface ProgramDetail {
  id: number;
  user: User;
  title: string;
  brief?: string; // 리뷰용: 발표에 대한 간단한 설명.
  desc?: string; // 리뷰용: 발표에 대한 자세한 설명
  comment?: string; // 리뷰용: 파준위에게 전하고 싶은 말
  difficulty: ProgramDifficulty;
  duration: ProgramDuration;
  language: ProgramLanguage;
  category: number;
  accepted: boolean;
  introduction: string;
  video_url: string | null;
  slide_url: string | null;
  room_num: ProgramRoomNumber;
  created_at: string;
  updated_at: string;
}
