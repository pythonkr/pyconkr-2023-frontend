import CoCAgreementForm from '@/components/sponsor/CoCAgreementForm';
import SponsorTermAgreementForm from '@/components/sponsor/SponsorTermAgreementForm';
import { NextPage } from 'next';
import {
  SponsorFormReducer,
  SponsorFormState,
} from '@/reducers/sponsorFormReducer';
import { styled } from 'stitches.config';
import { useReducer } from 'react';
import { useForm } from 'react-hook-form';

const Container = styled('div', {
  width: '100%',
  height: '100%',
  maxWidth: '833px',
  margin: '0 auto',
});

const SponsorJoinPage: NextPage = () => {
  const [state, dispatch] = useReducer(
    SponsorFormReducer,
    SponsorFormState.COC_AGREEMENT
  );

  const { control, handleSubmit, register, watch } = useForm({
    mode: 'onSubmit',
  });

  const onClickPrev = () => dispatch({ direction: 'prev' });
  const onClickNext = () => dispatch({ direction: 'next' });

  let children;
  switch (state) {
    case SponsorFormState.COC_AGREEMENT:
      children = (
        <CoCAgreementForm
          onClickNext={onClickNext}
          control={control}
          watch={watch}
        />
      );
      break;
    case SponsorFormState.TERM_AGREEMENT:
      children = (
        <SponsorTermAgreementForm
          onClickPrev={onClickPrev}
          onClickNext={onClickNext}
          control={control}
          watch={watch}
        />
      );
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
