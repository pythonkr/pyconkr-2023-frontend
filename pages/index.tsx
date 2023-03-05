import Teaser from '@/components/main/Teaser';
import type { NextPage } from 'next';
import SeoHeader from '@/components/layout/SeoHeader';
import { Routes } from '@/constants/routes';

const Home: NextPage = () => {
  return (
    <>
      <SeoHeader
        title={Routes.HOME.title}
        description="파이콘 한국 2023: 8월 11~13일 코엑스"
      />
      <Teaser />
    </>
  );
};

export default Home;
