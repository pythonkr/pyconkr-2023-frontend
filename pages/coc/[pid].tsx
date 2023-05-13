import { H1 } from '@/components/heading';
import SubNavBar from '@/components/layout/SubNavBar';
import cocIndex from '@/constants/cocIndex';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { styled } from 'stitches.config';
import path from 'path';
import fs from 'fs';
import { ParsedUrlQuery } from 'querystring';
import ReactMarkdown from 'react-markdown';
import {
  StyledH4,
  Paragraph,
  UnorderedList,
  ListItem,
  StyledLink,
} from '@/components/common/Markdown';

const Layout = styled('div', {
  width: '100%',
  height: '100%',
  maxWidth: '1280px',
  margin: '0 auto',
  paddingLeft: '2rem',
  paddingRight: '2rem',
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
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginTop: 40,
  paddingBottom: 40,
  '@bp2': {
    marginTop: '90px',
    flexDirection: 'row',
  },
});

const Content = styled('div', {
  flex: 'auto',
  marginTop: 24,
  borderTop: '2px solid $textPrimary',
  '@bp2': {
    marginTop: 0,
    marginLeft: '62px',
    marginBottom: '100px',
  },
});

const CoCSubPage: NextPage<DocumentProps> = ({ document }) => {
  return (
    <Layout>
      <StyledH1>파이콘 행동 강령</StyledH1>
      <SubText>Code of Conduct</SubText>
      <Container>
        <SubNavBar routes={cocIndex} />
        <Content>
          <ReactMarkdown
            components={{
              h2: ({ node, ...props }) => <StyledH4 {...props} />,
              p: ({ node, ...props }) => <Paragraph {...props} />,
              ul: ({ node, ...props }) => <UnorderedList {...props} />,
              li: ({ node, ...props }) => <ListItem {...props} />,
              a: ({ node, ...props }) => <StyledLink {...props} />,
            }}
          >
            {document}
          </ReactMarkdown>
        </Content>
      </Container>
    </Layout>
  );
};

interface DocumentProps {
  document: string;
}

interface Params extends ParsedUrlQuery {
  pid: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = cocIndex.map((item) => {
    const pid = item.route.split('/')[2];
    return {
      params: {
        pid,
      },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<DocumentProps, Params> = async (
  context
) => {
  const params = context.params!;
  const staticPath = path.join(process.cwd(), 'static/coc');
  const documentFilePath = path.join(staticPath, `${params.pid}.md`);

  const document = fs.readFileSync(documentFilePath, 'utf8');

  return {
    props: {
      document,
    },
  };
};

export default CoCSubPage;
