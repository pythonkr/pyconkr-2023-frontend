import { LoginUser } from '@/@types';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userState = atom<LoginUser>({
  key: 'user',
  default: {
    userid: null,
    authToken: null,
  },
  effects_UNSTABLE: [persistAtom],
});
