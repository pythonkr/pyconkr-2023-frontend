import React, { useState } from 'react';
import { styled } from '@/stitches.config';
import { H4 } from '@/components/heading';
import Arrow from '@/public/Arrow.svg';

const ArrowIcon = styled(Arrow, {
  stroke: '$textPrimary',
  fill: '$textPrimary',
  variants: {
    direction: {
      up: {
        rotate: '180deg',
      },
    },
  },
});

const Button = styled('button', {
  background: 'none',
  border: 'none',
  '&:hover': {
    cursor: 'pointer',
  },
});

const Show = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 16,
  marginBottom: 20,
  color: '$textPrimary',
});

const Hide = styled('p', {
  bodyText: 1,
  color: '$textPrimary',
});

interface ToggleProps {
  title?: string;
  content?: string;
}

const Toggle = (props: ToggleProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const { title, content } = props;

  return (
    <>
      <hr />
      <Show>
        <H4>{title}</H4>
        <Button onClick={() => setOpen((isOpen) => !isOpen)}>
          {open ? <ArrowIcon direction={'up'} /> : <ArrowIcon />}
        </Button>
      </Show>
      {open ? <Hide>{content}</Hide> : null}
    </>
  );
};

export default Toggle;
