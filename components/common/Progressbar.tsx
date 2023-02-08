import { VariantProps } from '@stitches/react';
import { styled } from 'stitches.config';

const ProgressWrapper = styled('div', {
  width: '100%',
  height: '8px',
  backgroundColor: '$gray500',
});

const Progress = styled('div', {
  height: '100%',
  backgroundColor: '$textPrimary',
  variants: {
    size: {
      1: {
        width: '20%',
      },
      2: {
        width: '40%',
      },
      3: {
        width: '60%',
      },
      4: {
        width: '80%',
      },
      5: {
        width: '100%',
      },
    },
  },
});

type ProgressVariantProps = VariantProps<typeof Progress>;

type ProgressbarProps = {
  value: number;
};

export const Progressbar = ({ value }: ProgressbarProps) => {
  return (
    <ProgressWrapper>
      <Progress size={value as ProgressVariantProps['size']} />
    </ProgressWrapper>
  );
};
