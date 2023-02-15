import { styled } from 'stitches.config';
import NavBar from './NavBar';

const ContainerBody = styled('div', {
  width: '100%',
});

const Main = styled('main', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '@bp1': {
    padding: '0 1rem',
  },
  '@bp2': {
    padding: '0 8rem',
  },
  '@bp3': {},
  '@bp4': {},
});

const Wrapper = styled('div', {
  width: '100%',
  marginTop: '80px',
});

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => (
  <ContainerBody>
    <NavBar />
    <Main>
      <Wrapper>{children}</Wrapper>
    </Main>
  </ContainerBody>
);

export default Container;
