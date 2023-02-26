import { styled } from '@/stitches.config';
import { SponsorFormState } from '@/reducers/sponsorFormReducer';

const ProgressWrapper = styled('div', {
  width: '100%',
  height: '8px',
  backgroundColor: '$gray500',
});

const Progress = styled('div', {
  height: '100%',
  backgroundColor: '$textPrimary',
});

type ProgressbarProps = {
  value: SponsorFormState;
};

export const Progressbar = ({ value }: ProgressbarProps) => {
  return (
    <ProgressWrapper>
      <Progress
        style={{
          width: `${(value / 6) * 100}%`,
        }}
      />
    </ProgressWrapper>
  );
};
