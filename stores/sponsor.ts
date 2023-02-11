import { Sponsor } from '@/@types';
import { atom } from 'recoil';

export const sponsorState = atom<Sponsor>({
  key: 'sponsor',
  default: {
    account: '',
    name: '',
    phone: '',
    email: '',
    organization: '',
    files: {
      passbook: null,
      certificate: null,
    },
  },
});
