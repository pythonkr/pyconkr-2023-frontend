import {
  sponsorContractInfo,
  sponsorContractProcedure,
} from '@/constants/sponsor/sponsorData';
import { styled } from '@/stitches.config';
import Link from 'next/link';
import Button from '../common/Button';
import { H4 } from '../heading';
import { Routes } from '@/constants/routes';
import SponsorJoinFormBase from './SponsorJoinFormBase';
import { SponsorFormState } from '@/reducers/sponsorFormReducer';
import { useFormContext } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import Modal from '@/components/sponsor/Modal';

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

const axiosConfig = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
};

const SponsorCompleteBox = () => {
  const { getValues } = useFormContext();

  const [openModal, setOpenModal] = useState(false);
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
      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/sponsors`,
        formData,
        axiosConfig
      );
      console.log(result);
    } catch (error: any) {
      setErrorMessage(
        '에러가 발생했습니다. 입력된 내용을 확인해주세요. 문제가 있을 경우 sponsor@pycon.kr으로 문의 바랍니다.'
      );
      setOpenModal(true);
    }
  };

  return (
    <SponsorJoinFormBase
      title="정상적으로 신청 완료되었습니다\n내부 논의 후 다음 절차를 진행하게 됩니다"
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
        후원 신청 완료
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
