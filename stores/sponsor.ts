import { Sponsor } from '@/@types';
import { atom } from 'recoil';

export const sponsorState = atom<Sponsor>({
  key: 'sponsor',
  default: {
    url: '',
    name: '',
    level: '',
    managerName: '',
    managerTel: '',
    managerEmail: '',
    businessRegistrationNumber: '',
    logoImage: null,
    bankBookFile: null,
    businessRegistrationFile: null,
  },
});
