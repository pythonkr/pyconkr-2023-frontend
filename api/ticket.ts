import { APITicketType, ProgramTypes, TicketType } from '@/@types';
import axios from '@/lib/axios';
import { AxiosResponse } from 'axios';
import { getHeaders } from '.';

export function listTicketTypes(): Promise<
  Record<(typeof ProgramTypes)[number], TicketType[]>
> {
  return new Promise((resolve, reject) => {
    axios
      .get<
        {
          conference: APITicketType[];
          childcare: APITicketType[];
          tutorial: APITicketType[];
          sprint: APITicketType[];
        },
        AxiosResponse<{
          conference: APITicketType[];
          childcare: APITicketType[];
          tutorial: APITicketType[];
          sprint: APITicketType[];
        }>,
        never
      >('/tickets/ticket-types/', {
        headers: getHeaders(),
      })
      .then((response) => {
        resolve({
          CONFERENCE: TicketType.fromAPIs(response.data.conference),
          CHILDCARE: TicketType.fromAPIs(response.data.childcare),
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
        `/ticket/ticket-types/${ticketType.id}/check/${
          userid !== null ? `?username=${userid}` : ''
        }`,
        {
          headers: getHeaders(),
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
