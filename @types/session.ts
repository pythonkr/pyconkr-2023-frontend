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
