import { APIMyTicketType, MyTicketType } from '@/@types/mypage';
import axios from '@/lib/axios';
import { AxiosResponse } from 'axios';

export function listMyPageTickets(): Promise<MyTicketType[]> {
  return new Promise((resolve, reject) => {
    axios
      .get<APIMyTicketType[], AxiosResponse<APIMyTicketType[]>, never>(
        '/api/mypage',
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        resolve(MyTicketType.fromAPIs(response.data));
      })
      .catch((e) => {
        console.error(e);
        reject(e);
      });
  });
}
