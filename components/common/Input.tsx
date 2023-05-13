import React, { useState, ChangeEventHandler } from 'react';
import type * as Stitches from '@stitches/react';
import { styled } from '@/stitches.config';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  onChange?: (value: string) => void;
  state?: 'invalid' | 'valid';
  label?: string;
};

const Label = styled('label', {
  fontSize: '1.25rem',
  fontWeight: 500,
});

const StyledInput = styled('input', {
  display: 'block',
  padding: '1rem',
  border: '2px solid $textSecondary',
  width: '100%',

  fontSize: '1.25rem',
  fontWeight: 500,
  outline: 'none',

  [`${Label} > &`]: {
    marginTop: '0.5rem',
  },

  '&::placeholder': {
    color: '$textSecondary',
  },

  '&:is(:hover, :focus, :active)': {
    color: '$textPrimary',
    borderColor: 'currentColor',
  },

  variants: {
    invalid: {
      true: {
        color: '$functionalRed',
        borderColor: 'currentColor',
      },
    },
    valid: {
      true: {
        color: '$functionalGreen',
        borderColor: 'currentColor',
      },
    },
  },
});

type InputVariants = Stitches.VariantProps<typeof StyledInput>;

const Input: React.FC<Props> = ({ onChange, value, label, ...props }) => {
  const [inputValue, setInputValue] = useState(props.defaultValue);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newValue = event.target.value;
    if (onChange) {
      onChange(newValue);
    } else {
      setInputValue(newValue);
    }
  };

  const variants: Partial<Record<keyof InputVariants, boolean>> = {};

  switch (props.state) {
    case 'invalid':
      variants.invalid = true;
      break;
    case 'valid':
      variants.valid = true;
      break;
  }

  const InputWrapper = label ? Label : React.Fragment;
  console.log(<InputWrapper></InputWrapper>);
  return (
    <div>
      <InputWrapper>
        {label}
        <StyledInput
          {...props}
          value={value !== undefined ? value : inputValue}
          onChange={handleChange}
          {...variants}
        />
      </InputWrapper>
    </div>
  );
};

export default Input;
