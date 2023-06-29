export interface ProgramList {
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
  profile_img: string;
  bio: string;
}
