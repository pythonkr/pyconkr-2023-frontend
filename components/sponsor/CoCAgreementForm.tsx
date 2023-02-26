import { useState } from 'react';
import { styled } from 'stitches.config';
import { Controller, UseFormReturn } from 'react-hook-form';

import Modal from './Modal';
import type { Sponsor } from '@/@types';
import Button from '@/components/common/Button';
import Checkbox from '@/components/common/Checkbox';
import SponsorJoinFormBase from './SponsorJoinFormBase';
import { SponsorFormState } from '@/reducers/sponsorFormReducer';

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

const ModalButton = styled('button', {
  border: 0,
  backgroundColor: 'inherit',
  appearance: 'none',
  cursor: 'pointer',
  bodyText: 1,
});

const ActionWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 18,
});

type Props = {
  form: UseFormReturn<Sponsor, object>;
  onClickNext: () => void;
  codeOfConduct: string;
};

const CoCAgreementForm: React.FC<Props> = ({
  form,
  onClickNext,
  codeOfConduct,
}) => {
  const { watch, control } = form;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cocAgreement = watch('cocAgreement');

  return (
    <>
      <SponsorJoinFormBase
        title="파이콘 행동 강령에\n동의해주세요"
        state={SponsorFormState.COC_AGREEMENT}
      >
        <TitleWrapper>
          <Title>파이콘 행동강령</Title>
          <ModalButton type="button" onClick={() => setIsModalOpen(true)}>
            더보기
          </ModalButton>
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
      {isModalOpen && (
        <Modal
          title="파이콘 행동 강령"
          handleClose={() => setIsModalOpen(false)}
        >
          <TextArea value={codeOfConduct} readOnly />
        </Modal>
      )}
    </>
  );
};

export default CoCAgreementForm;
