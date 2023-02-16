import { PropsWithChildren, useCallback, useState } from 'react';
import { SponsorFormState } from 'src/reducers/sponsorFormReducer';
import { styled } from 'stitches.config';
import Button from '../common/Button';
import Checkbox from '../common/Checkbox';
import Modal from './Modal';
import SponsorJoinFormBase from './SponsorJoinFormBase';

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

const ActionWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 18,
});

const CoCAgreementForm: React.FC<PropsWithChildren> = () => {
  const [agreed, setAgreed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onAgreeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setAgreed(e.target.checked);
    },
    []
  );
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
        {/* TODO: 포매팅된 행동강령 본문이 들어간 Textarea 혹은 컴포넌트로 대체 되어야 함 */}
        <TextArea>행동 강령 들어갈 곳</TextArea>
        <ActionWrapper>
          <Checkbox
            id="coc-agreement"
            label="파이콘 행동강령에 동의합니다"
            checked={agreed}
            onChange={onAgreeChange}
          />
          <Button size="flat" disabled={!agreed}>
            다음으로
          </Button>
        </ActionWrapper>
      </SponsorJoinFormBase>
      {isModalOpen && (
        <Modal
          title="파이콘 행동 강령"
          handleClose={() => setIsModalOpen(false)}
        >
          <TextArea>행동 강령 들어갈 곳</TextArea>
        </Modal>
      )}
    </>
  );
};

export default CoCAgreementForm;
