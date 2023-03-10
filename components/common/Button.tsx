import React from 'react';
import { styled } from 'stitches.config';

export const StyledButton = styled('button', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  backgroundColor: '$backgroundPrimary',
  color: '$textPrimary',
  border: '2px solid $textPrimary',
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
    reversal: {
      true: {
        color: '$backgroundPrimary',
        backgroundColor: '$textPrimary',
      },
      false: {
        color: '$textPrimary',
        backgroundColor: '$backgroundPrimary',
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
      fill: '$textPrimary',
    },
  },
});

// interface with all button props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'small' | 'big' | 'flat';
  icon?: React.ReactNode;
  disabled?: boolean;
  reversal?: boolean;
}

const Button = ({
  children,
  size = 'small',
  icon,
  disabled = false,
  reversal = false,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      disabled={disabled}
      size={size}
      reversal={reversal}
      {...props}
    >
      {icon ? <IconBox>{icon}</IconBox> : null}
      {children}
    </StyledButton>
  );
};

export default Button;
