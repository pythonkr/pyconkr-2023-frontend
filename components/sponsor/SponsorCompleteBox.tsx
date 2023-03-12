import {
  sponsorContractInfo,
  sponsorContractProcedure,
} from '@/constants/sponsor/sponsorData';
import { styled } from '@/stitches.config';
import Button from '../common/Button';
import { H4 } from '../heading';
import { Routes } from '@/constants/routes';
import SponsorJoinFormBase from './SponsorJoinFormBase';
import { SponsorFormState } from '@/reducers/sponsorFormReducer';
import { useFormContext } from 'react-hook-form';
import { useState } from 'react';
import Modal from '@/components/sponsor/Modal';
import { useRouter } from 'next/router';
import axios from '@/lib/axios';
import { keyframes } from '@stitches/react';

const TextBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  padding: '24px 14px 17px 23px',
  border: '1px solid $textPrimary',
  marginBottom: 50,
});

const StyledOl = styled('ol', {
  display: 'flex',
  flexDirection: 'column',
  bodyText: 1,
  wordBreak: 'keep-all',
  marginLeft: 25,
  '& li': {
    paddingLeft: 5,
  },
});

const StyledUl = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  bodyText: 1,
  marginLeft: 20,
  wordBreak: 'keep-all',
  '& li': {
    paddingLeft: 5,
  },
});

const StyledButton = styled(Button, {
  width: '100%',
});

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const Loader = styled('div', {
  variants: {
    reversal: {
      true: {
        border: '4px solid $backgroundPrimary',
        borderTop: '4px solid $textPrimary',
      },
      false: {
        border: '4px solid $textPrimary',
        borderTop: '4px solid $backgroundPrimary',
      },
    },
  },
  borderRadius: '50%',
  width: '30px',
  height: '30px',
  animation: `${spin} 1s linear infinite`,
});

const axiosConfig = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
};

const SponsorCompleteBox = () => {
  const { getValues } = useFormContext();
  const router = useRouter();

  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const values = getValues(); // TODO: add type

  const formData = new FormData();
  formData.append('name', values.name);
  formData.append('manager_name', values.managerName);
  formData.append('manager_tel', values.managerTel);
  formData.append('manager_email', values.managerEmail);
  formData.append(
    'business_registration_number',
    values.businessRegistrationNumber
  );
  formData.append(
    'business_registration_file',
    values.businessRegistrationFile[0]
  );
  formData.append('bank_book_file', values.bankBookFile[0]);
  formData.append('url', values.url);
  formData.append('logo_image', values.logoImage[0]);
  formData.append('level', values.sponsorType);

  const handleSubmitForm = async () => {
    try {
      setIsLoading(true);
      await axios.post(`/sponsors`, formData, axiosConfig);
      alert('신청이 완료되었습니다.');
      router.push(Routes.HOME.route);
    } catch (error: any) {
      setErrorMessage(
        '에러가 발생했습니다. 입력된 내용을 확인해주세요. 문제가 있을 경우 sponsor@pycon.kr으로 문의 바랍니다.'
      );
      setOpenModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SponsorJoinFormBase
      title="이후 절차는 아래와 같이 진행됩니다.\n내용 확인 후, 하단의 신청하기 버튼을 클릭해주세요."
      state={SponsorFormState.COMPLETE}
    >
      <TextBox>
        <H4>후원사 계약 절차</H4>
        <StyledOl>
          {sponsorContractProcedure.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </StyledOl>
        <StyledUl>
          {sponsorContractInfo.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </StyledUl>
      </TextBox>
      <StyledButton
        size="big"
        reversal={true}
        onClick={() => handleSubmitForm()}
      >
        {isLoading ? <Loader reversal={true} /> : '제출하기'}
      </StyledButton>
      {openModal && (
        <Modal
          title="에러가 발생했습니다"
          handleClose={() => setOpenModal(false)}
          height={300}
        >
          {errorMessage}
        </Modal>
      )}
    </SponsorJoinFormBase>
  );
};

export default SponsorCompleteBox;
