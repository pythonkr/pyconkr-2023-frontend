import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { Routes } from '@/constants/routes';
import { ProgramDetail } from '@/@types/program';
import { ProgramAPI } from '@/api';

import * as P from '@/components/program/styles';
import SeoHeader from '@/components/layout/SeoHeader';
import { H1, H2 } from '@/components/heading';
import { ProgramBasicInfo } from '@/components/program/ProgramBasicInfo';
import { SpeakerInfo } from '@/components/program/SpeakerInfo';

const ProgramInfo: NextPage<{ info: ProgramDetail }> = ({ info }) => {
  return (
    <P.PageContainer>
      <SeoHeader title={Routes.PROGRAM.title} />
      <P.Section>
        <P.Block css={{ marginTop: '16px' }}>
          <H1>{info.title}</H1>
          <ProgramBasicInfo info={info} />
        </P.Block>
        <P.Block css={{ marginTop: '64px' }}>
          <H2>설명</H2>
          <P.IntroContainer>{info.introduction}</P.IntroContainer>
        </P.Block>
        {info.video_url && (
          <P.Block css={{ marginTop: '64px' }}>
            <H2>발표 영상</H2>
            <div style={{ marginTop: '8px' }}>{info.video_url}</div>
          </P.Block>
        )}
        {info.slide_url && (
          <P.Block css={{ marginTop: '64px' }}>
            <H2>발표 자료</H2>
            <div style={{ marginTop: '8px' }}>{info.slide_url}</div>
          </P.Block>
        )}
        <P.Block css={{ marginTop: '64px' }}>
          <H2>발표자 소개</H2>
          <SpeakerInfo user={info.user} />
        </P.Block>
      </P.Section>
    </P.PageContainer>
  );
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const list = await ProgramAPI.getProgramList();
  const paths = list.map((detail) => ({ params: { id: `${detail.id}` } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;
  const detail = await ProgramAPI.getProgramDetail(id as string);

  return {
    props: {
      info: detail,
    },
  };
};

export default ProgramInfo;
