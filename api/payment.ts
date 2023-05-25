import { TicketType } from '@/@types';
import axios from '@/lib/axios';
import { AxiosResponse } from 'axios';

export function getPaymentKey(ticketType: TicketType): Promise<string> {
  return new Promise((resolve, reject) => {
    axios
      .post<
        { msg: string; payment_key: string; price: number },
        AxiosResponse<{ msg: string; payment_key: string; price: number }>,
        { ticket_type: string }
      >(
        `/payment/key`,
        {
          ticket_type: ticketType.id,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        resolve(response.data.payment_key);
      })
      .catch((e) => {
        console.error(e);
        reject(e);
      });
  });
}

export function announcePaymentSucceeded(marchantUid: string): Promise<void> {
  return new Promise((resolve, reject) => {
    axios
      .post<
        { msg: string; merchant_uid: string },
        AxiosResponse<{ msg: string; merchant_uid: string }>,
        { merchant_uid: string }
      >(
        `/payment/success`,
        {
          merchant_uid: marchantUid,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        resolve();
      })
      .catch((e) => {
        console.error(e);
        reject(e);
      });
  });
}
