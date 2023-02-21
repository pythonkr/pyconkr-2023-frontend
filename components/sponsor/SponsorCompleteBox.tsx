import {
  sponsorContractInfo,
  sponsorContractProcedure,
} from '@/constants/sponsorData';
import { styled } from '@/stitches.config';
import Button from '../common/Button';
import { H4 } from '../heading';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  margin: '16px 0',
});

const TextBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  padding: '24px 14px 17px 23px',
  border: '1px solid $textPrimary',
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
  marginTop: 50,
});

const SponsorCompleteBox = () => {
  return (
    <Container>
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
      <StyledButton size="big" reversal={true}>
        후원 신청 완료
      </StyledButton>
    </Container>
  );
};

export default SponsorCompleteBox;
