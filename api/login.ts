import axios from '@/lib/axios';

export function signIn(id: string, password: string): Promise<void> {
  return new Promise((resolve, reject) => {
    axios
      .post(
        '/api/login/',
        { username: id, password: password },
        {
          headers: { 'content-type': 'application/json' },
          withCredentials: true,
        }
      )
      .then((response) => {
        if (!('msg' in response.data && response.data.msg === 'ok')) {
          reject(`${response.status}`);
          return;
        }
        resolve();
      })
      .catch((e) => {
        console.error(e);
        reject(e);
      });
  });
}

export function signOut(): Promise<void> {
  return new Promise((resolve, reject) => {
    axios
      .post(
        '/api/logout/',
        {},
        {
          headers: { 'content-type': 'application/json' },
          withCredentials: true,
        }
      )
      .then((response) => {
        // if (!('msg' in response.data && response.data.msg === 'ok')) {
        //   reject(`${response.status}`);
        //   return;
        // }
        resolve();
      })
      .catch((e) => {
        console.error(e);
        reject(e);
      });
  });
}
