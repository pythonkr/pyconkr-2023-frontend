import React from 'react';
import { styled } from '../../stitches.config';

const StyledInput = styled('input', {
  display: 'none',
  '&:checked + label': {
    border: '1px solid $functionalRed',
    color: '$functionalRed',
  },
});

const StyledLabel = styled('label', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '80px',
  padding: '25px 40px',
  border: '1px solid $textSecondary',
  color: '$textSecondary',
  bodyText: 1,
});

interface RadioProps {
  children: React.ReactNode;
  id: string;
  name: string;
  value: string;
  defaultChecked?: boolean;
}

const Radio = ({ children, id, name, value, defaultChecked }: RadioProps) => {
  return (
    <>
      <StyledInput
        type="radio"
        id={id}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
      />
      <StyledLabel htmlFor={id}>{children}</StyledLabel>
    </>
  );
};

export default Radio;
