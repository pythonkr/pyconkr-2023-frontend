import CoCAgreementForm from '@/components/sponsor/CoCAgreementForm';
import { NextPage } from 'next';
import React from 'react';
import {
  SponsorFormReducer,
  SponsorFormState,
} from 'src/reducers/sponsorFormReducer';
import { styled } from 'stitches.config';

const Container = styled('div', {
  width: '100%',
  height: '100%',
  maxWidth: '833px',
  margin: '0 auto',
});

const SponsorJoinPage: NextPage = () => {
  const [state, dispatch] = React.useReducer(
    SponsorFormReducer,
    SponsorFormState.COC_AGREEMENT
  );

  let children;
  switch (state) {
    case SponsorFormState.COC_AGREEMENT:
      children = <CoCAgreementForm />;
      break;
    case SponsorFormState.TERM_AGREEMENT:
      children = null;
      break;
    case SponsorFormState.SPONSOR_TYPE:
      children = null;
      break;
    case SponsorFormState.SPONSOR_INFORM:
      children = null;
      break;
    case SponsorFormState.FILE_UPLOAD:
      children = null;
      break;
    case SponsorFormState.COMPLETE:
      children = null;
      break;
    default:
      children = null;
      break;
  }
  return <Container>{children}</Container>;
};

export default SponsorJoinPage;
