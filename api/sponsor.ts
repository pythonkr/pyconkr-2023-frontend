import axios from '@/lib/axios';
import { getHeaders } from '.';

export function addSponsor(formData: FormData): Promise<void> {
  return new Promise((resolve, reject) => {
    axios
      .post(`/sponsors`, formData, {
        headers: getHeaders({
          'Content-Type': 'multipart/form-data',
        }),
      })
      .then((response) => {
        resolve();
      })
      .catch((e) => {
        console.error(e);
        reject(e);
      });
  });
}
