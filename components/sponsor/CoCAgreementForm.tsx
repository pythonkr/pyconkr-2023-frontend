import { Controller, useFormContext } from 'react-hook-form';
import { SponsorFormState } from '@/reducers/sponsorFormReducer';
import { styled } from 'stitches.config';
import Button from '../common/Button';
import Checkbox from '../common/Checkbox';
import SponsorJoinFormBase from './SponsorJoinFormBase';
import Link from 'next/link';

const TextArea = styled('textarea', {
  display: 'block',
  width: '100%',
  height: '100%',
  marginBottom: 26,
  backgroundColor: '$backgroundPrimary',
  padding: 16,
  resize: 'none',
  wordBreak: 'keep-all',
  bodyText: 1,
});

const TitleWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 4,
});

const Title = styled('span', {
  bodyText: 1,
});

const ActionWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 18,
});

const StyledLink = styled(Link, {
  textDecoration: 'underline',
});

type Props = {
  onClickNext: () => void;
  codeOfConduct: string;
};

const CoCAgreementForm: React.FC<Props> = ({ onClickNext, codeOfConduct }) => {
  const { control, watch } = useFormContext();
  const cocAgreement = watch('cocAgreement');

  return (
    <>
      <SponsorJoinFormBase
        title="파이콘 행동 강령에\n동의해주세요"
        state={SponsorFormState.COC_AGREEMENT}
      >
        <TitleWrapper>
          <Title>파이콘 행동강령</Title>
          <StyledLink href="/coc/purpose">전문 보기</StyledLink>
        </TitleWrapper>
        <TextArea value={codeOfConduct} readOnly />
        <ActionWrapper>
          <Controller
            control={control}
            name="cocAgreement"
            render={({ field: { onChange, value } }) => (
              <Checkbox
                id="coc-agreement"
                label="파이콘 행동강령에 동의합니다"
                checked={value}
                onChange={onChange}
              />
            )}
          />
          <Button size="flat" disabled={!cocAgreement} onClick={onClickNext}>
            다음으로
          </Button>
        </ActionWrapper>
      </SponsorJoinFormBase>
    </>
  );
};

export default CoCAgreementForm;
