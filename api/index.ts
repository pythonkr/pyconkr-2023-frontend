import { userState } from '@/stores/login';
import { AxiosRequestConfig } from 'axios';
import { getRecoil } from 'recoil-nexus';

export * as LoginAPI from './login';
export * as SponsorAPI from './sponsor';
export * as TicketAPI from './ticket';
export * as PaymentAPI from './payment';
export * as MyPageAPI from './mypage';

export function getHeaders(
  others?: AxiosRequestConfig['headers']
): AxiosRequestConfig['headers'] {
  const authToken = getRecoil(userState).authToken;

  if (authToken !== null)
    return {
      Authorization: `Basic ${authToken}`,
      ...others,
    };
  else return { ...others };
}
