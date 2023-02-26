import {
  sponsorContractInfo,
  sponsorContractProcedure,
} from '@/constants/sponsor/sponsorData';
import { styled } from '@/stitches.config';
import Link from 'next/link';
import Button from '../common/Button';
import { H4 } from '../heading';
import { Routes } from '@/constants/routes';
import { FieldValues, UseFormHandleSubmit } from 'react-hook-form';
import SponsorJoinFormBase from './SponsorJoinFormBase';
import { SponsorFormState } from '@/reducers/sponsorFormReducer';

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

interface SponsorCompleteBoxProps {
  handleSubmit: UseFormHandleSubmit<FieldValues>;
}

const SponsorCompleteBox = ({ handleSubmit }: SponsorCompleteBoxProps) => {
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
      <Link href={Routes.HOME.route}>
        <StyledButton
          size="big"
          reversal={true}
          // onClick={handleSubmit((data) => {
          //   console.log(data);
          // })}
        >
          후원 신청 완료
        </StyledButton>
      </Link>
    </SponsorJoinFormBase>
  );
};

export default SponsorCompleteBox;
