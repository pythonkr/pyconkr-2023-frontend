import { Progressbar } from '@/components/common/Progressbar';
import { H3 } from '@/components/heading';
import SeoHeader from '@/components/layout/SeoHeader';
import SponsorCompleteBox from '@/components/sponsor/SponsorCompleteBox';
import { styled } from 'stitches.config';

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
  width: '100%',
  maxWidth: 630,
});

const StyledH3 = styled(H3, {
  whiteSpace: 'pre-line',
  margin: '24px 0 16px 0',
});

const SponsorCompletePage = () => {
  return (
    <>
      <SeoHeader title="신청 완료" />
      <Container>
        <ContentWrapper>
          <Progressbar value={6} />
          <StyledH3>{`정상적으로 신청 완료되었습니다\n내부 논의 후 다음 절차를 진행하게 됩니다`}</StyledH3>
          <SponsorCompleteBox />
        </ContentWrapper>
      </Container>
    </>
  );
};

export default SponsorCompletePage;
