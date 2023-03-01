import React from 'react';
import { styled } from '@/stitches.config';

const StyledInput = styled('input', {
  display: 'none',
  '&:checked + label': {
    backgroundColor: '$textPrimary',
    border: '2px solid $textPrimary',
    color: '$backgroundPrimary',
  },
});

const StyledLabel = styled('label', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '80px',
  padding: '25px 40px',
  border: '2px solid $textPrimary',
  color: '$textPrimary',
  bodyText: 1,
  cursor: 'pointer',
});

type RadioProps = React.PropsWithChildren<
  React.InputHTMLAttributes<HTMLInputElement>
>;

const Radio = ({ children, ...props }: RadioProps) => {
  return (
    <div>
      <StyledInput type="radio" {...props} />
      <StyledLabel htmlFor={props.id}>{children}</StyledLabel>
    </div>
  );
};

export default Radio;
