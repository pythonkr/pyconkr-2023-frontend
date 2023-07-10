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
  sprintGuide: string;
  formUrl: string;
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

const sprintApplyPage: NextPage<PageProps> = ({ sprintGuide, formUrl }) => {
  return (
    <ApplyPageContainer>
      <SeoHeader
        title={Routes.SPRINT_APPLY.title}
        description="파이콘 한국 2023: 8월 11~13일 코엑스"
      />
      <S.Section>
        <div>
          <H1>스프린트 진행자 모집</H1>
          <Block css={{ marginTop: '16px' }}>
            스프린트는 관심있는 오픈소스 프로젝트를 같은 장소에 모여 집중적으로
            개발하는 자리입니다. <br />
            새로운 동료를 만나고, 오픈소스에서 얻을 수 있는 경험과 지식을 나눌
            수 있는 시간입니다. <br />
            처음 참여하신다고요? 문제 없습니다. 해당 프로젝트를 주도적으로
            개발하는 분에게 배울 수 있는 시간이 될 것입니다. <br />
            💌 오픈소스 프로젝트에 기여하고자 하시는 분들은 스프린트 진행자로
            많이 지원해주세요!
          </Block>
          <Block css={{ marginTop: '16px' }}>
            <LinkButton target="_blank" href={formUrl} reversal={true}>
              신청하기
            </LinkButton>
          </Block>
          <Block css={{ marginTop: '64px' }}>
            <H2>스프린트 진행일 및 장소</H2>
            <div style={{ marginTop: '8px' }}>
              2023년 8월 11일 금요일 / 코엑스(Coex) 아셈볼룸 - 컨퍼런스룸(북)
            </div>
          </Block>
          <Block css={{ marginTop: '64px' }}>
            <H2>모집 일정</H2>
            <div style={{ marginTop: '8px' }}>
              ~ 2023년 6월 25일 일요일 (23:50 GMT+9)
            </div>
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
            {sprintGuide}
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
  sprintGuide: string;
}> = async () => {
  const staticPath = path.join(process.cwd(), 'static');
  const sprintGuidePath = path.join(staticPath, 'sprint-apply-guide.md');
  const sprintGuide = fs.readFileSync(sprintGuidePath, 'utf8');
  const formUrl = 'https://forms.gle/tiaBc3ydhmiecknG9';

  return {
    props: {
      sprintGuide,
      formUrl,
    },
  };
};

export default sprintApplyPage;
