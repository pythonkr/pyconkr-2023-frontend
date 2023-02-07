import React from 'react';
import { styled } from 'stitches.config';

const StyledButton = styled('button', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  backgroundColor: '$functionalRed',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  bodyText: 1,

  '&:disabled': {
    backgroundColor: '$gray500',
    cursor: 'not-allowed',

    '&:hover': {
      filter: 'none',
    },
  },

  '&:hover': {
    filter: 'brightness(1.2)',
  },

  variants: {
    size: {
      small: {
        padding: '8px 16px',
      },
      big: {
        padding: '16px',
      },
      flat: {
        padding: '8px 16px',
        width: '100%',
      },
    },
  },
});

const IconBox = styled('span', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& svg': {
    width: '1rem',
    height: '1rem',
    '& path': {
      fill: 'white',
    },
  },
});

// interface with all button props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'small' | 'big' | 'flat';
  icon?: React.ReactNode;
  disabled?: boolean;
}

const Button = ({
  children,
  size = 'small',
  icon,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton disabled={disabled} size={size} {...props}>
      {icon ? <IconBox>{icon}</IconBox> : null}
      {children}
    </StyledButton>
  );
};

export default Button;
