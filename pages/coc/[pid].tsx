import { H1, H4 } from '@/components/heading';
import SubNavBar from '@/components/layout/SubNavBar';
import cocIndex from '@/constants/cocIndex';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { styled } from 'stitches.config';
import { useRouter } from 'next/router';
import path from 'path';
import fs from 'fs';
import { ParsedUrlQuery } from 'querystring';
import ReactMarkdown from 'react-markdown';

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

const Content = styled('div', {
  marginLeft: '62px',
  marginBottom: '100px',
  flex: 'auto',
});

const StyledH4 = styled(H4, {
  borderTop: '2px solid $textPrimary',
  paddingTop: '16px',
  fontWeight: 'bold',
});
const Paragraph = styled('p', {
  marginTop: '12px',
  bodyText: 1,
  [`& + ${StyledH4}`]: {
    marginTop: '28px',
  },
});
const UnorderedList = styled('ul', {
  marginLeft: '24px',
  [`& + ${StyledH4}`]: {
    marginTop: '28px',
  },
});

const CoCSubPage: NextPage<DocumentProps> = ({ document }) => {
  return (
    <Layout>
      <StyledH1>파이콘 행동 강령</StyledH1>
      <SubText>Code of Conducts</SubText>
      <Container>
        <SubNavBar routes={cocIndex} />
        <Content>
          <ReactMarkdown
            components={{
              h2: ({ node, ...props }) => <StyledH4 {...props} />,
              p: ({ node, ...props }) => <Paragraph {...props} />,
              ul: ({ node, ...props }) => <UnorderedList {...props} />,
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
  console.log(document);

  return {
    props: {
      document,
    },
  };
};

export default CoCSubPage;
