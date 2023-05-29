import { LoginUser } from '@/@types';
import { atom } from 'recoil';

// TODO 로그인 유지를 어떤 방식으로 하냐에 따라 안 쓰일 수도 있음

export const userState = atom<LoginUser>({
  key: 'user',
  default: {
    userid: null, // TODO recoil-persist 같은 걸로 새로 고침해도 유지되게
  },
});
