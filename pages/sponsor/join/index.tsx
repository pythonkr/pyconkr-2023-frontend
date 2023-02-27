import SeoHeader from '@/components/layout/SeoHeader';
import CoCAgreementForm from '@/components/sponsor/CoCAgreementForm';
import SponsorTermAgreementForm from '@/components/sponsor/SponsorTermAgreementForm';
import { Routes } from '@/constants/routes';
import {
  SponsorFormReducer,
  SponsorFormState,
} from '@/reducers/sponsorFormReducer';
import fs from 'fs';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import path from 'path';
import { useReducer } from 'react';
import { useForm } from 'react-hook-form';
import { styled } from 'stitches.config';

const Container = styled('div', {
  width: '100%',
  height: '100%',
  maxWidth: '833px',
  margin: '0 auto',
});

const SponsorJoinPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ codeOfConduct, sponsorTerm }) => {
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
          codeOfConduct={codeOfConduct}
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
          sponsorTerm={sponsorTerm}
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
  return (
    <>
      <SeoHeader
        title={Routes.SPONSOR_JOIN.title}
        description="파이콘 한국 2023에 후원하기"
      />
      <Container>{children}</Container>
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
