import { styled } from 'stitches.config';
import TwitterIcon from '@/public/icons/Twitter.svg';
import YoutubeIcon from '@/public/icons/Youtube.svg';
import FacebookIcon from '@/public/icons/Facebook.svg';
import GitHubIcon from '@/public/icons/GitHub.svg';
import EmailIcon from '@/public/icons/Email.svg';
import {
  PYCONKR_FACEBOOK_URL,
  PYCONKR_TWITTER_URL,
  PYCONKR_YOUTUBE_URL,
  PYCONKR_EMAIL,
  PYCONKR_GITHUB_URL,
} from '@/constants';
import { Routes } from '@/constants/routes';

const FooterLayout = styled('div', {
  backgroundColor: 'inherit',
  position: 'absolute',
  left: 0,
  right: 0,
});

const FooterContainer = styled('div', {
  borderTop: '2px solid $gray500',
  padding: '15px 30px',

  '& > div:first-of-type': {
    fontSize: 'small',

    '& > table > tbody th': {
      textAlign: 'start',
      fontWeight: 'initial',
      paddingRight: '1vw',
    },
  },

  '& > div:nth-of-type(2)': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '2vh',
  },
});

const CoCLink = styled('a', {
  textDecoration: 'underline',
});

const SNSLink = styled('a', {
  padding: '14px',
  '& svg': {
    width: '20px',
    height: '20px',
  },
});

const SponsorLoginLink = styled(CoCLink, {
  marginLeft: '1vw',
});

const Footer = () => (
  <FooterLayout>
    <FooterContainer>
      <div>
        <table>
          <tbody>
            <tr>
              <th>상호명</th>
              <td>사단법인 파이썬 사용자모임</td>
            </tr>
            <tr>
              <th>사업자 등록 번호</th>
              <td>338-82-00046</td>
            </tr>
            <tr>
              <th>대표자명</th>
              <td>배권한</td>
            </tr>
            <tr>
              <th>사업장 주소</th>
              <td>서울시 강남구 강남대로84길 24-4</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <div>
          <CoCLink href="/coc">파이콘 한국 행동 강령 (CoC)</CoCLink>
          <SponsorLoginLink href={Routes.LOGIN.route}>
            후원사 담당자 로그인
          </SponsorLoginLink>
        </div>
        <div>
          <SNSLink href={`mailto:${PYCONKR_EMAIL}`} title="이메일">
            <EmailIcon />
          </SNSLink>
          <SNSLink
            href={PYCONKR_TWITTER_URL}
            title="트위터"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </SNSLink>
          <SNSLink
            href={PYCONKR_FACEBOOK_URL}
            title="페이스북"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </SNSLink>
          <SNSLink
            href={PYCONKR_YOUTUBE_URL}
            title="유튜브"
            target="_blank"
            rel="noreferrer"
          >
            <YoutubeIcon />
          </SNSLink>
          <SNSLink
            href={PYCONKR_GITHUB_URL}
            title="깃헙"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </SNSLink>
        </div>
      </div>
    </FooterContainer>
  </FooterLayout>
);

export default Footer;
