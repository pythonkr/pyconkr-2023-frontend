import React from 'react';
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
  const sponsorFormStateLength = React.useMemo(
    () => Object.values(SponsorFormState).length / 2,
    []
  );
  return (
    <ProgressWrapper>
      <Progress
        style={{
          width: `${(value / sponsorFormStateLength) * 100}%`,
        }}
      />
    </ProgressWrapper>
  );
};
