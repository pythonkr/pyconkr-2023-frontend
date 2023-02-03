import { atom } from 'recoil';

// TODO: (이상민) 다른 상태가 생기면 해당 파일 제거
export const sampleCountState = atom<number>({
  key: 'count',
  default: 0,
});
