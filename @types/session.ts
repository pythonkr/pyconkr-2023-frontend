export interface SessionList {
  id: number;
  title: string;
  brief: string;
  difficulty: string;
  duration: string;
  language: string;
  category: number;
  category_name: string;
  user: User;
}

export interface User {
  nickname: string;
  profile_img: string | null;
  bio: string;
}
