import { styled } from 'stitches.config';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import SponsorList from '@/components/sponsor/SponsorList';
import { ISponsorListItem } from '@/@types/sponsor';

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
  marginBottom: '5vh',
  width: '100%',
});

const SponsorWrapper = styled('div', {
  marginTop: '32px',
});

type ContainerProps = {
  children: React.ReactNode;
  sponsorList: ISponsorListItem[];
};

const Container = ({ children, sponsorList }: ContainerProps) => (
  <ContainerBody>
    <NavBar />
    <Main>
      <Wrapper>
        {children}
        {sponsorList && sponsorList.length > 0 && (
          <SponsorWrapper>
            <SponsorList list={sponsorList} />
          </SponsorWrapper>
        )}
      </Wrapper>
    </Main>
    <Footer />
  </ContainerBody>
);

export default Container;
