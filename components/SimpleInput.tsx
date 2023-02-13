/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import { styled } from 'stitches.config';

import ClearInput from '@/public/icons/Clear.svg';
import CheckInput from '@/public/icons/Check.svg';

const Label = styled('label', {
  bodyText: 1,
  marginTop: 8,
});

const InputWrapper = styled('div', {
  position: 'relative',
});

const IconBox = styled('span', {
  position: 'absolute',
  top: '50%',
  right: 18,
  transform: 'translateY(-50%)',
  variants: {
    status: {
      success: {
        '& svg': {
          width: '1rem',
          height: '1rem',
        },
      },
      fail: {
        '& svg': {
          width: '1rem',
          height: '1rem',
        },
      },
    },
  },
});

const StyledInput = styled('input', {
  boxSizing: 'border-box',
  padding: '1rem',
  width: '20rem',
  height: '4rem',
  bodyText: 1,
  '&:focus': {
    border: '2px solid $textPrimary',
    color: '$textPrimary',
  },
  variants: {
    length: {
      short: {
        width: '11.5rem',
      },
      long: {
        width: '36.375rem',
      },
      fullWidth: {
        width: '100%',
      },
    },
    status: {
      success: {
        border: '2px solid $functionalGreen',
      },
      fail: {
        border: '2px solid $functionalRed',
        color: '$functionalRed',
      },
      editing: {
        border: '2px solid $textPrimary',
      },
    },
  },
  defaultVariants: {
    length: 'short',
    status: 'editing',
  },
});

const ErrorMessage = styled('p', {
  bodyText: 2,
  marginTop: 2,
  color: '$functionalRed',
});

// interface with all input props
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  length?: 'short' | 'long' | 'fullWidth';
  isDirty?: boolean;
  isValid?: boolean;
  isError?: boolean;
  errorMessage?: string;
  onReset?: () => void;
}

const SimpleInput = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      length = 'short',
      label,
      isDirty,
      isValid,
      isError,
      errorMessage,
      onReset,
      ...props
    },
    ref
  ) => {
    return (
      <div>
        {label && <Label htmlFor={type}>{label}</Label>}
        <InputWrapper>
          <StyledInput
            id={type}
            ref={ref}
            type={type}
            length={length}
            aria-invalid={!isDirty ? undefined : isValid ? true : false}
            status={!isDirty ? 'editing' : isValid ? 'success' : 'fail'}
            {...props}
          />
          {!isDirty ? null : isValid ? (
            <IconBox status="success">
              <CheckInput />
            </IconBox>
          ) : (
            <IconBox status="fail">
              <ClearInput
                onClick={() => {
                  onReset?.();
                }}
              />
            </IconBox>
          )}
        </InputWrapper>
        {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
    );
  }
);

SimpleInput.displayName = 'Input';

export default SimpleInput;
