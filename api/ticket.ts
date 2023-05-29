import { APITicketType, ProgramTypes, TicketType } from '@/@types';
import axios from '@/lib/axios';
import { AxiosResponse } from 'axios';

export function listTicketTypes(): Promise<
  Record<(typeof ProgramTypes)[number], TicketType[]>
> {
  return new Promise((resolve, reject) => {
    axios
      .get<
        {
          conference: APITicketType[];
          tutorial: APITicketType[];
          sprint: APITicketType[];
        },
        AxiosResponse<{
          conference: APITicketType[];
          tutorial: APITicketType[];
          sprint: APITicketType[];
        }>,
        never
      >('/api/ticket/ticket-types', {
        withCredentials: true,
      })
      .then((response) => {
        resolve({
          CONFERENCE: TicketType.fromAPIs(response.data.conference),
          TUTORIAL: TicketType.fromAPIs(response.data.tutorial),
          SPRINT: TicketType.fromAPIs(response.data.sprint),
        });
      })
      .catch((e) => {
        console.error(e);
        reject(e);
      });
  });
}

export function checkTicketTypeBuyable(
  ticketType: TicketType,
  userid: string | null
): Promise<boolean> {
  return new Promise((resolve, reject) => {
    axios
      .get<boolean, AxiosResponse<boolean>, never>(
        `/api/ticket/ticket-types/${ticketType.id}/check${
          userid !== null ? `?username=${userid}` : ''
        }`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((e) => {
        console.error(e);
        reject(e);
      });
  });
}
