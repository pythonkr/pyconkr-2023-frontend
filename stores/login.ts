import { LoginUser } from '@/@types';
import { atom } from 'recoil';

export const userState = atom<LoginUser>({
  key: 'user',
  default: {
    userid: null, // TODO recoil-persist 같은 걸로 새로 고침해도 유지되게
  },
});
