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
import { Loader } from '@/components/common/Loader';

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
      alert('????????? ?????????????????????.');
      router.push(Routes.HOME.route);
    } catch (error: any) {
      setErrorMessage(
        '????????? ??????????????????. ????????? ????????? ??????????????????. ????????? ?????? ?????? sponsor@pycon.kr?????? ?????? ????????????.'
      );
      setOpenModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SponsorJoinFormBase
      title="?????? ????????? ????????? ?????? ???????????????.\n?????? ?????? ???, ????????? ???????????? ????????? ??????????????????."
      state={SponsorFormState.COMPLETE}
    >
      <TextBox>
        <H4>????????? ?????? ??????</H4>
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
        disabled={isLoading}
        onClick={() => handleSubmitForm()}
      >
        {isLoading ? <Loader reversal={true} /> : '????????????'}
      </StyledButton>
      {openModal && (
        <Modal
          title="????????? ??????????????????"
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
