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
    cocAgreement: false,
    termAgreement: false,
    logoImage: null,
    bankBookFile: null,
    businessRegistrationFile: null,
  },
  dangerouslyAllowMutability: true,
});
