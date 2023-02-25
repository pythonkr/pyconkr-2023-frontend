import { CloseIcon } from '@/public/icons';
import { styled } from '@/stitches.config';
import { useRef } from 'react';
import { H3 } from '../heading';
import Portal from '../Portal';

const Wrapper = styled('div', {
  position: 'absolute',
  left: 0,
  right: 0,

  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: 32,
  maxWidth: 846,
  width: '100%',
  height: '90%',
  margin: '96px auto 30px',
  border: '2px solid $textPrimary',
  padding: 40,

  backgroundColor: '$backgroundPrimary',
});

const Header = styled('header', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  gap: 12,
});

const Title = styled(H3, {
  width: '100%',
});

const StyledCloseIcon = styled(CloseIcon, {
  width: 22,
  height: 22,

  cursor: 'pointer',
  '& path': {
    fill: '$textPrimary',
  },
});

const Content = styled('div', {
  width: '100%',
  height: '100%',
});

type Props = {
  handleClose: () => void;
  title: string;
};

function Modal({
  children,
  handleClose,
  title,
}: React.PropsWithChildren<Props>) {
  const nodeRef = useRef(null);

  return (
    <Portal id="sponsor-join-modal">
      <Wrapper ref={nodeRef}>
        <Header>
          <Title>{title}</Title>
          <StyledCloseIcon role="button" onClick={handleClose} />
        </Header>
        <Content>{children}</Content>
      </Wrapper>
    </Portal>
  );
}
export default Modal;
