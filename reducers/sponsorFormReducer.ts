import { Dispatch } from 'react';

export enum SponsorFormState {
  COC_AGREEMENT = 1,
  TERM_AGREEMENT,
  // SPONSOR_TYPE,
  // SPONSOR_INFORM,
  FILE_UPLOAD,
  COMPLETE,
}

export const SponsorFormReducer: React.Reducer<
  SponsorFormState,
  { direction: 'prev' | 'next' }
> = (state, action) => {
  switch (action.direction) {
    case 'prev':
      return Math.max(state - 1, SponsorFormState.COC_AGREEMENT);
    case 'next':
      return Math.min(state + 1, SponsorFormState.COMPLETE);
    default:
      return state;
  }
};

export type SponsorFormDispatcher = Dispatch<{
  direction: 'next' | 'prev';
}>;
