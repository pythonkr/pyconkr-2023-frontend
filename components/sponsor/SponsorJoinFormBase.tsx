import { PropsWithChildren } from 'react';
import { SponsorFormState } from '@/reducers/sponsorFormReducer';
import { styled } from 'stitches.config';
import { Progressbar } from '../common/Progressbar';
import { H3 } from '../heading';

type Props = {
  title: string;
  state: SponsorFormState;
};

const Wrapper = styled('div', {
  display: 'flex',
  paddingTop: 24,
  paddingBottom: 24,
  flexDirection: 'column',
  height: '100%',
});

const Title = styled(H3, {
  marginTop: '24px',
  marginBottom: '8px',
  whiteSpace: 'pre-wrap',
});

const SponsorJoinFormBase: React.FC<PropsWithChildren<Props>> = ({
  title,
  state,
  children,
}) => {
  return (
    <Wrapper>
      <Progressbar value={state} />
      <Title>{title.replace('\\n', '\n')}</Title>
      {children}
    </Wrapper>
  );
};

export default SponsorJoinFormBase;
