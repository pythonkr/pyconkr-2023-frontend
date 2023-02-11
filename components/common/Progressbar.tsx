import { styled } from '@/stitches.config';

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
  value: 0 | 1 | 2 | 3 | 4 | 5 | 6;
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
