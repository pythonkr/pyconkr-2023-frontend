import { APIMyTicketType, MyTicketType } from '@/@types/mypage';
import axios from '@/lib/axios';
import { AxiosResponse } from 'axios';
import { getHeaders } from '.';

export function listMyPageTickets(): Promise<MyTicketType[]> {
  return new Promise((resolve, reject) => {
    axios
      .get<
        { ticket: APIMyTicketType[] },
        AxiosResponse<{ ticket: APIMyTicketType[] }>,
        never
      >('/api/mypage/', {
        headers: getHeaders(),
      })
      .then((response) => {
        resolve(MyTicketType.fromAPIs(response.data.ticket));
      })
      .catch((e) => {
        console.error(e);
        reject(e);
      });
  });
}
