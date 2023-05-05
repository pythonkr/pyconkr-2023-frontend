import type { GetStaticProps, NextPage } from 'next';
import SeoHeader from '@/components/layout/SeoHeader';
import { Routes } from '@/constants/routes';
import { H1, H2, H3, H4 } from '@/components/heading';
import path from 'path';
import fs from 'fs';
import ReactMarkdown from 'react-markdown';
import {
  Paragraph,
  UnorderedList,
  OrderedList,
  ListItem,
  StyledLink,
  StyledH3,
} from '@/components/common/Markdown';
import * as S from '@/components/sponsor/information/styles';
import remarkGfm from 'remark-gfm';
import { styled } from 'stitches.config';

interface PageProps {
  cfpGuide: string;
}

const ApplyPageContainer = styled('div', {
  bodyText: 1,
});

const Block = styled('div', {});
// TODO: 컴포넌트 폴더로 옮기기
const LinkButton = styled('a', {
  bodyText: 1,
  width: '160px',
  padding: '8px',
  display: 'inline-block',
  textAlign: 'center',
  variants: {
    reversal: {
      true: {
        color: '$backgroundPrimary',
        backgroundColor: '$textPrimary',
      },
      false: {
        color: '$textPrimary',
        backgroundColor: '$backgroundPrimary',
      },
    },
  },
});

const CfpApplyPage: NextPage<PageProps> = ({ cfpGuide }) => {
  return (
    <ApplyPageContainer>
      <SeoHeader
        title={Routes.CFP_APPLY.title}
        description="파이콘 한국 2023: 8월 11~13일 코엑스"
      />
      <S.Section>
        <div>
          <H1>발표 제안</H1>
          <Block css={{ marginTop: '16px' }}>
            파이썬에 대한 학술적 또는 상업적 프로젝트, 케이스 스터디 등 다양한
            파이썬 관련 발표를 아래와 같은 일정으로 모집합니다.
            <br />
            자세한 내용은 발표안 작성 가이드를 참고해주세요.
          </Block>
          <Block css={{ marginTop: '64px' }}>
            <H2>모집 일정</H2>
            <div style={{ marginTop: '8px' }}>
              2023년 3월 21일 화요일 ~ 5월 14일 일요일 (23:59 GMT+9)
            </div>
          </Block>
          <Block css={{ marginTop: '16px' }}>
            <LinkButton
              target="_blank"
              href="https://forms.gle/eRNbS4j3PBRoXiFGA"
              reversal={true}
            >
              신청하기
            </LinkButton>
          </Block>
        </div>
        <Block css={{ marginTop: '104px' }}>
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => <H2 {...props} />,
              h2: ({ node, ...props }) => <StyledH3 {...props} />,
              h3: ({ node, ...props }) => <H4 {...props} />,
              p: ({ node, ...props }) => <Paragraph {...props} />,
              ol: ({ node, ...props }) => <OrderedList {...props} />,
              ul: ({ node, ...props }) => <UnorderedList {...props} />,
              li: ({ node, ...props }) => <ListItem {...props} />,
              a: ({ node, ...props }) => <StyledLink {...props} />,
            }}
            remarkPlugins={[remarkGfm]}
          >
            {cfpGuide}
          </ReactMarkdown>
        </Block>
        <Block css={{ margin: '104px 0 64px' }}>
          <H2>문의</H2>
          <Block css={{ marginTop: '16px' }}>program@pycon.kr</Block>
        </Block>
      </S.Section>
    </ApplyPageContainer>
  );
};

export const getStaticProps: GetStaticProps<{
  cfpGuide: string;
}> = async () => {
  const staticPath = path.join(process.cwd(), 'static');
  const cfpGuidePath = path.join(staticPath, 'cfp-guide.md');
  const cfpGuide = fs.readFileSync(cfpGuidePath, 'utf8');

  return {
    props: {
      cfpGuide,
    },
  };
};

export default CfpApplyPage;
