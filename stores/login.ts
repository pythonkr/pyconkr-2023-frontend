import { LoginUser } from '@/@types';
import { atom } from 'recoil';

export const userState = atom<LoginUser>({
  key: 'user',
  default: {
    userid: null,
  },
});
