import React, { useState } from 'react';
import { styled } from '@/stitches.config';
import { H3, H4 } from '@/components/heading';
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
  marginBottom: '2rem',
});

interface ToggleProps {
  title?: string;
  content?: string;
  titleSize?: 'big' | 'small';
}

const Toggle = ({
  title = 'Toggle Title',
  content = 'Toggle Content',
  titleSize = 'small',
}: ToggleProps) => {
  const [open, setOpen] = useState<boolean>(false);
  // const { title, content } = props;

  return (
    <>
      <hr />
      <Show onClick={() => setOpen((isOpen) => !isOpen)}>
        {titleSize === 'small' ? <H4>{title}</H4> : <H3>{title}</H3>}
        <Button>{open ? <ArrowIcon direction={'up'} /> : <ArrowIcon />}</Button>
      </Show>
      {open ? <Hide>{content}</Hide> : null}
    </>
  );
};

export default Toggle;
