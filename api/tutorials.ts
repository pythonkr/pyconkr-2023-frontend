import { Program } from '@/@types';
import axios from '@/lib/axios';

export async function getTutorialList(): Promise<Program[]> {
  return new Promise((resolve, reject) => {
    axios
      .get(`/programs/tutorial/`)
      .then((response) => {
        resolve(Program.fromAPIs(response.data));
      })
      .catch((e) => {
        reject(e);
      });
  });
}
