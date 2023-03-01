import { useState } from 'react';
import { Controller, useFormContext, UseFormReturn } from 'react-hook-form';
import { SponsorFormState } from '@/reducers/sponsorFormReducer';
import { styled } from 'stitches.config';
import Modal from './Modal';
import type { Sponsor } from '@/@types';
import Button from '@/components/common/Button';
import Checkbox from '@/components/common/Checkbox';
import SponsorJoinFormBase from './SponsorJoinFormBase';

const TextArea = styled('textarea', {
  display: 'block',
  width: '100%',
  height: '100%',
  marginBottom: 26,
  border: '2px solid $textPrimary',
  padding: 16,
  backgroundColor: '$backgroundPrimary',
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

const ButtonWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: 20,
  marginTop: 18,
});

type Props = {
  form: UseFormReturn<Sponsor, object>;
  sponsorTerm: string;
  onClickPrev: () => void;
  onClickNext: () => void;
};

const SponsorTermAgreementForm: React.FC<Props> = ({
  sponsorTerm,
  onClickPrev,
  onClickNext,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { control, watch } = useFormContext();
  const termAgreement = watch('termAgreement');

  return (
    <>
      <SponsorJoinFormBase
        title="파이콘 후원 약관에\n동의해주세요"
        state={SponsorFormState.TERM_AGREEMENT}
      >
        <TitleWrapper>
          <Title>파이콘 후원 약관</Title>
          <ModalButton type="button" onClick={() => setIsModalOpen(true)}>
            더보기
          </ModalButton>
        </TitleWrapper>
        <TextArea value={sponsorTerm} readOnly />
        <Controller
          control={control}
          name="termAgreement"
          render={({ field: { onChange, value } }) => (
            <Checkbox
              id="term-agreement"
              label="파이콘 후원 약관에 동의합니다"
              checked={value}
              onChange={onChange}
            />
          )}
        />
        <ButtonWrapper>
          <Button size="flat" onClick={onClickPrev}>
            이전으로
          </Button>
          <Button
            size="flat"
            reversal
            disabled={!termAgreement}
            onClick={onClickNext}
          >
            다음으로
          </Button>
        </ButtonWrapper>
      </SponsorJoinFormBase>
      {isModalOpen && (
        <Modal
          title="파이콘 후원 약관"
          handleClose={() => setIsModalOpen(false)}
        >
          <TextArea value={sponsorTerm} readOnly />
        </Modal>
      )}
    </>
  );
};

export default SponsorTermAgreementForm;
