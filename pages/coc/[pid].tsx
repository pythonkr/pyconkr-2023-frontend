import { H1, H4 } from '@/components/heading';
import SubNavBar from '@/components/layout/SubNavBar';
import cocIndex from '@/constants/cocIndex';
import type { NextPage } from 'next';
import { styled } from 'stitches.config';

const Layout = styled('div', {
  width: '100%',
  height: '100%',
  maxWidth: '1280px',
  margin: '0 auto',
});

const StyledH1 = styled(H1, {
  marginTop: '70px',
});

const SubText = styled('div', {
  fontSize: '32px',
  marginTop: '16px',
  color: '$textSecondary',
  fontWeight: 'bold',
});

const Container = styled('div', {
  marginTop: '90px',
  display: 'flex',
  width: '100%',
});

const SideContents = styled('div', {
  marginLeft: '62px',
  flex: 'auto',
});
const Content = styled('div', {
  borderTop: '2px solid $textPrimary',
  paddingTop: '16px',
});
const StyledH4 = styled(H4, {
  fontWeight: 'bold',
});
const Paragraph = styled('div', {
  marginTop: '12px',
  bodyText: 1,
});

const CoCSubPage: NextPage = () => {
  return (
    <Layout>
      <StyledH1>파이콘 행동 강령</StyledH1>
      <SubText>Code of Conducts</SubText>
      <Container>
        <SubNavBar routes={cocIndex} />
        <SideContents>
          <Content>
            <StyledH4>파이콘 한국은 모든 참가자를 포용합니다</StyledH4>
            <Paragraph>
              파이콘 한국 행동 강령(이하 행동 강령)은 누구도 배제되지 않는
              파이썬 커뮤니티를 위해 구성원들이 지켜야 하는 최소한의 약속입니다.
            </Paragraph>
          </Content>
        </SideContents>
      </Container>
    </Layout>
  );
};

export default CoCSubPage;
