import { Program } from '@/@types';
import axios from '@/lib/axios';

export async function getSprintList(): Promise<Program[]> {
  return new Promise((resolve, reject) => {
    axios
      .get(`/programs/sprint/`)
      .then((response) => {
        resolve(Program.fromAPIs(response.data));
      })
      .catch((e) => {
        reject(e);
      });
  });
}
