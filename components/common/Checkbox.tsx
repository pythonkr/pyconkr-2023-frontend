import React from 'react';
import { styled } from 'stitches.config';

const Label = styled('label', {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
});

const HiddenInput = styled('input', {
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: '1px',
  width: '1px',
  position: 'absolute',
});

const CheckBoxContainer = styled('div', {
  display: 'inline-block',
  height: '24px',
  width: '24px',
  background: '$white',
  border: '2px solid $textPrimary',

  variants: {
    checked: {
      true: {
        backgroundColor: '$textPrimary',
      },
    },
  },
});

const LabelText = styled('span', {
  marginLeft: '12px',
  bodyText: 1,
  color: '$textPrimary',
});

const Path = styled('path', {
  strokeWidth: 1,
  stroke: 'none',
  variants: {
    checked: {
      true: {
        stroke: '$backgroundPrimary',
      },
    },
  },
});

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const Checkbox = (props: CheckboxProps) => {
  const { id, checked, onChange, label } = props;

  return (
    <Label htmlFor={id}>
      <HiddenInput
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <CheckBoxContainer checked={checked}>
        <svg viewBox="0 0 16 16" fill="none">
          <Path
            d="M5.85 11.56 2.5 8.21l.71-.71 2.64 2.65L12.5 3.5l.71.71-7.36 7.35z"
            checked={checked}
          />
        </svg>
      </CheckBoxContainer>
      {props?.label && <LabelText>{label}</LabelText>}
    </Label>
  );
};

export default Checkbox;
