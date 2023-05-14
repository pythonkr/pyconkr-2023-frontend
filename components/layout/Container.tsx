import { styled } from 'stitches.config';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

const ContainerBody = styled('div', {
  maxWidth: '1920px',
  margin: '0 auto',
  padding: '0 20px',
  position: 'relative',
});

const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: '$backgroundPrimary',

  '@bp1': {},
  '@bp2': {},
  '@bp3': {},
  '@bp4': {},
});

const Wrapper = styled('div', {
  marginTop: '80px',
  width: '100%',
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
    <Footer />
  </ContainerBody>
);

export default Container;
