import fs from 'fs';
import path from 'path';
import { useReducer } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import { styled } from 'stitches.config';
import CoCAgreementForm from '@/components/sponsor/CoCAgreementForm';
import SponsorTermAgreementForm from '@/components/sponsor/SponsorTermAgreementForm';
import {
  SponsorFormReducer,
  SponsorFormState,
} from '@/reducers/sponsorFormReducer';
import SponsorTypeSelectForm from '@/components/sponsor/SponsorTypeSelectForm';
import { ManagerInfoInputBox, SponsorInfoInputBox } from '@/components/sponsor';
import FileInputBox from '@/components/sponsor/FileInputBox';
import SponsorCompleteBox from '@/components/sponsor/SponsorCompleteBox';
import type { Sponsor } from '@/@types';
import { DevTool } from '@hookform/devtools';

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

  const form = useForm<Sponsor, object>({ mode: 'onSubmit' });

  const onClickPrev = () => dispatch({ direction: 'prev' });
  const onClickNext = () => dispatch({ direction: 'next' });

  let children;
  switch (state) {
    case SponsorFormState.COC_AGREEMENT:
      children = (
        <CoCAgreementForm
          form={form}
          codeOfConduct={codeOfConduct}
          onClickNext={onClickNext}
        />
      );
      break;
    case SponsorFormState.TERM_AGREEMENT:
      children = (
        <SponsorTermAgreementForm
          form={form}
          sponsorTerm={sponsorTerm}
          onClickPrev={onClickPrev}
          onClickNext={onClickNext}
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
      children = (
        <SponsorInfoInputBox
          form={form}
          onClickPrev={onClickPrev}
          onClickNext={onClickNext}
        />
      );

      break;
    case SponsorFormState.MANAGER_INFORM:
      children = (
        <ManagerInfoInputBox
          form={form}
          onClickPrev={onClickPrev}
          onClickNext={onClickNext}
        />
      );
      break;
    case SponsorFormState.FILE_UPLOAD:
      children = (
        <FileInputBox onClickPrev={onClickPrev} onClickNext={onClickNext} />
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
      <DevTool control={form.control} placement="top-left" />
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
