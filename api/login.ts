import axios from '@/lib/axios';
import { AxiosResponse } from 'axios';

export function signIn(id: string, password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    axios
      .post<
        { msg: string; basic_auth_token: string },
        AxiosResponse<{ msg: string; basic_auth_token: string }>,
        { username: string; password: string }
      >('/api/login/', { username: id, password: password })
      .then((response) => {
        if (!('msg' in response.data && response.data.msg === 'ok')) {
          reject(`${response.status}`);
          return;
        }
        resolve(response.data.basic_auth_token);
      })
      .catch((e) => {
        //console.error(e);
        reject(e);
      });
  });
}

export function signOut(): Promise<void> {
  return new Promise((resolve, reject) => {
    axios
      .post('/api/logout/', {})
      .then((response) => {
        // if (!('msg' in response.data && response.data.msg === 'ok')) {
        //   reject(`${response.status}`);
        //   return;
        // }
        resolve();
      })
      .catch((e) => {
        // console.error(e);
        reject(e);
      });
  });
}
