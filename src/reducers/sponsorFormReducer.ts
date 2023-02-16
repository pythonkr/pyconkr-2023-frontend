export enum SponsorFormState {
  COC_AGREEMENT = 1,
  TERM_AGREEMENT,
  SPONSOR_TYPE,
  SPONSOR_INFORM,
  FILE_UPLOAD,
  COMPLETE,
}

export const SponsorFormReducer: React.Reducer<
  SponsorFormState,
  { direction: 'prev' | 'next' }
> = (state, action) => {
  switch (action.direction) {
    case 'prev':
      return (
        (SponsorFormState[state + 1] as unknown as SponsorFormState) ??
        SponsorFormState.COMPLETE
      );
    case 'next':
      return (
        (SponsorFormState[state - 1] as unknown as SponsorFormState) ??
        SponsorFormState.COC_AGREEMENT
      );
    default:
      return state;
  }
};
