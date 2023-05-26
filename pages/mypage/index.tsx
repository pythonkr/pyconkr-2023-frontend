import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import SeoHeader from '@/components/layout/SeoHeader';
import { Routes } from '@/constants/routes';

const Mypage = () => {
  const router = useRouter();

  useEffect(() => {
    // TODO: /mypage/user-info로 변경
    router.replace('/mypage/ticket');
  }, [router]);

  return (
    <SeoHeader
      title={Routes.MYPAGE.title}
      description="파이콘 한국 2023: 8월 11~13일 코엑스"
    />
  );
};

export default Mypage;
