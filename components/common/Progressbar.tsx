import { styled } from 'stitches.config';

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
  value: number;
};

export const Progressbar = ({ value }: ProgressbarProps) => {
  return (
    <ProgressWrapper>
      <Progress
        style={{
          width: `${value * 20}%`,
        }}
      />
    </ProgressWrapper>
  );
};
