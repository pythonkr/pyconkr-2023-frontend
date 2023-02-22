import { useState } from 'react';
import { SponsorFormState } from '@/reducers/sponsorFormReducer';
import { styled } from 'stitches.config';
import Button from '../common/Button';
import Checkbox from '../common/Checkbox';
import Modal from './Modal';
import SponsorJoinFormBase from './SponsorJoinFormBase';
import {
  Control,
  Controller,
  FieldValues,
  UseFormWatch,
} from 'react-hook-form';

const TextArea = styled('textarea', {
  display: 'block',
  width: '100%',
  height: '100%',
  marginBottom: 26,
  backgroundColor: '$backgroundPrimary',
  padding: 16,
  resize: 'none',
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
  onClickPrev: () => void;
  onClickNext: () => void;
  control: Control;
  watch: UseFormWatch<FieldValues>;
};

const SponsorTermAgreementForm: React.FC<Props> = ({
  onClickPrev,
  onClickNext,
  control,
  watch,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        {/* TODO: 포매팅된 후원 약관 본문이 들어간 Textarea 혹은 컴포넌트로 대체 되어야 함 */}
        <TextArea>후원 약관 들어갈 곳</TextArea>
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
          <Button size="flat" disabled={!termAgreement} onClick={onClickNext}>
            다음으로
          </Button>
        </ButtonWrapper>
      </SponsorJoinFormBase>
      {isModalOpen && (
        <Modal
          title="파이콘 후원 약관"
          handleClose={() => setIsModalOpen(false)}
        >
          <TextArea>후원 약관 들어갈 곳</TextArea>
        </Modal>
      )}
    </>
  );
};

export default SponsorTermAgreementForm;
