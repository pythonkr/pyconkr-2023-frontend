import { TicketType } from '@/@types';
import { atom } from 'recoil';

type TicketState = {
  ticketTypes: TicketType[];
};

export const ticketState = atom<TicketState>({
  key: 'ticket',
  default: {
    ticketTypes: [],
  },
});
