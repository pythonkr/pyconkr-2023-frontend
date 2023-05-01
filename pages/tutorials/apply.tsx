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
          <H1>튜토리얼 진행자 모집</H1>
          <Block css={{ marginTop: '16px' }}>
            튜토리얼은 파이썬에 대한 새로운 기술이나 라이브러리를 직접 알려주는
            프로그램입니다. <br />
            직접 컴퓨터를 가져와서 진행하며 현장에서 질문하고 해결하는 만큼 해당
            기술에 대해 좀 더 깊게 알게됩니다. <br />
            <br />
            💌 교육에 관심이 있는 분들은 튜토리얼 진행자로 많이 지원해주세요!
          </Block>
          <Block css={{ marginTop: '64px' }}>
            <H2>튜토리얼 진행일 및 장소</H2>
            <div style={{ marginTop: '8px' }}>
              2023년 8월 11일 금요일 / 코엑스(Coex) 아셈볼룸 - 컨퍼런스룸(북)
            </div>
          </Block>
          <Block css={{ marginTop: '64px' }}>
            <H2>모집 일정</H2>
            <div style={{ marginTop: '8px' }}>
              2023년 4월 03일 월요일 ~ 6월 2일 금요일 (23:59 GMT+9)
            </div>
          </Block>
          <Block css={{ marginTop: '16px' }}>
            <LinkButton
              target="_blank"
              href="https://forms.gle/BCbEWtUatYVjJHhu8"
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
  const cfpGuidePath = path.join(staticPath, 'tutorial-cfp-guide.md');
  const cfpGuide = fs.readFileSync(cfpGuidePath, 'utf8');

  return {
    props: {
      cfpGuide,
    },
  };
};

export default CfpApplyPage;
