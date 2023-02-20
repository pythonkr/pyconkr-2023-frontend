import { Progressbar } from '@/components/common/Progressbar';
import { H3 } from '@/components/heading';
import { styled } from '@/stitches.config';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  margin: '24px 0',
});

const ContentWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  width: 630,
});

const StyledH3 = styled(H3, {
  whiteSpace: 'pre-line',
});

const SponsorFilePage = () => {
  return (
    <Container>
      <ContentWrapper>
        <Progressbar value={5} />
        <StyledH3>{`후원에 필요한 파일을\n업로드해주세요`}</StyledH3>
      </ContentWrapper>
    </Container>
  );
};

export default SponsorFilePage;
