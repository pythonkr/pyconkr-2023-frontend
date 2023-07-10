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

export interface User {
  nickname: string;
  profile_img: string | null;
  bio: string;
}
