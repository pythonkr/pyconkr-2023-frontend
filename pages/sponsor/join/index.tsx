import type { Sponsor } from '@/@types';
import SeoHeader from '@/components/layout/SeoHeader';
import { ManagerInfoInputBox, SponsorInfoInputBox } from '@/components/sponsor';
import CoCAgreementForm from '@/components/sponsor/CoCAgreementForm';
import FileInputBox from '@/components/sponsor/FileInputBox';
import SponsorCompleteBox from '@/components/sponsor/SponsorCompleteBox';
import SponsorTermAgreementForm from '@/components/sponsor/SponsorTermAgreementForm';
import SponsorTypeSelectForm from '@/components/sponsor/SponsorTypeSelectForm';
import { Routes } from '@/constants/routes';
import {
  SponsorFormReducer,
  SponsorFormState,
} from '@/reducers/sponsorFormReducer';
import fs from 'fs';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import path from 'path';
import { useEffect, useReducer } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { styled } from 'stitches.config';

const Container = styled('div', {
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
          codeOfConduct={codeOfConduct}
          onClickNext={onClickNext}
        />
      );
      break;
    case SponsorFormState.TERM_AGREEMENT:
      children = (
        <SponsorTermAgreementForm
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
          onClickPrev={onClickPrev}
          onClickNext={onClickNext}
        />
      );

      break;
    case SponsorFormState.MANAGER_INFORM:
      children = (
        <ManagerInfoInputBox
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
    <>
      <SeoHeader
        title={Routes.SPONSOR_JOIN.title}
        description="파이콘 한국 2023에 후원하기"
      />
      <Container>
        <FormProvider {...form}>{children}</FormProvider>
      </Container>
    </>
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
