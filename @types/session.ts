import { SessionCategory } from '@/constants/session';

export interface SessionList {
  id: number;
  title: string;
  introduction: string;
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'EXPERIENCED';
  duration: 'SHORT' | 'LONG';
  language: 'KOREAN' | 'ENGLISH';
  category: number;
  category_name: string;
  day_of_week: 'Sat' | 'Sun' | null;
  host_name: string;
  host_introduction: string;
  host_profile_image: string | null;
  user: User | null;
}

export interface SessionDetail {
  id: number;
  title: string;
  difficulty: SessionDifficulty;
  duration: SessionDuration;
  language: SessionLanguage;
  category: number;
  category_name: string;
  introduction: string;
  video_url: string | null;
  slide_url: string | null;
  room_num: SessionRoomNumber;
  day_of_week: 'Sat' | 'Sun' | null;
  start_at: string;
  host_name: string;
  host_introduction: string;
  host_profile_image: string | null;
  user: User | null;
}

export interface User {
  nickname: string;
  profile_img: string | null;
  bio: string;
}

export interface TimeTableInfoByDays {
  Day1: TimeTableInfo;
  Day2: TimeTableInfo;
}

export interface TimeTableInfo {
  title: string;
  location: string;
  TimeTable: TimeTable[];
}

export interface TimeTable {
  time: string;
  sessions: TimeTableSessions[];
}
export interface TimeTableSessions {
  title: string;
  id: string;
  host_name?: string;
  room_num: string[];
  category?: (typeof SessionCategory)[number];
}
export type SessionDifficulty = 'BEGINNER' | 'INTERMEDIATE' | 'EXPERIENCED';
export type SessionDuration = 'SHORT' | 'LONG';
export type SessionLanguage = 'KOREAN' | 'ENGLISH';
type SessionRoomNumber = '101' | '102' | '103' | '104' | '105';
