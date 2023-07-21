import { Category } from '@/constants/session';

export interface SessionList {
  id: number;
  title: string;
  introduction: string;
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'EXPERIENCED';
  duration: 'SHORT' | 'LONG';
  language: 'KOREAN' | 'ENGLISH';
  category: number;
  category_name: string;
  user: User | null;
  day_of_week: 'Sat' | 'Sun' | null;
}

export interface User {
  nickname: string;
  profile_img: string | null;
  bio: string;
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
  category?: (typeof Category)[number];
}
