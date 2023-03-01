import fs from 'fs';
import path from 'path';
import CoCAgreementForm from '@/components/sponsor/CoCAgreementForm';
import SponsorTermAgreementForm from '@/components/sponsor/SponsorTermAgreementForm';
import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import {
  SponsorFormReducer,
  SponsorFormState,
} from '@/reducers/sponsorFormReducer';
import { styled } from 'stitches.config';
import { useReducer } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import SponsorTypeSelectForm from '@/components/sponsor/SponsorTypeSelectForm';
import FileInputBox from '@/components/sponsor/FileInputBox';
import SponsorCompleteBox from '@/components/sponsor/SponsorCompleteBox';

const Container = styled('div', {
  width: '100%',
  height: '100%',
  maxWidth: '630px',
  margin: '0 auto',
});

const SponsorJoinPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ codeOfConduct, sponsorTerm }) => {
  const [state, dispatch] = useReducer(
    SponsorFormReducer,
    SponsorFormState.COC_AGREEMENT
  );

  const form = useForm({
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
          codeOfConduct={codeOfConduct}
        />
      );
      break;
    case SponsorFormState.TERM_AGREEMENT:
      children = (
        <SponsorTermAgreementForm
          onClickPrev={onClickPrev}
          onClickNext={onClickNext}
          sponsorTerm={sponsorTerm}
        />
      );
      break;
    case SponsorFormState.SPONSOR_TYPE:
      children = (
        <SponsorTypeSelectForm
          onClickPrev={onClickPrev}
          onClickNext={onClickNext}
        />
      );
      break;
    case SponsorFormState.SPONSOR_INFORM:
      children = null;
      break;
    case SponsorFormState.FILE_UPLOAD:
      children = (
        <FileInputBox
          onClickPrev={onClickPrev}
          onClickNext={onClickNext}
          control={form.control}
          watch={form.watch}
        />
      );
      break;
    case SponsorFormState.COMPLETE:
      children = <SponsorCompleteBox />;
      break;
    default:
      children = null;
      break;
  }
  return (
    <Container>
      <FormProvider {...form}>{children}</FormProvider>
    </Container>
  );
};

export const getStaticProps: GetStaticProps<{
  sponsorTerm: string;
  codeOfConduct: string;
}> = async () => {
  const staticPath = path.join(process.cwd(), 'static');
  const codeOfConductFilePath = path.join(staticPath, 'code-of-conduct.md');
  const sponsorTermFilePath = path.join(staticPath, 'sponsor-term.md');

  const codeOfConduct = fs.readFileSync(codeOfConductFilePath, 'utf8');
  const sponsorTerm = fs.readFileSync(sponsorTermFilePath, 'utf8');

  return {
    props: {
      codeOfConduct,
      sponsorTerm,
    },
  };
};

export default SponsorJoinPage;
