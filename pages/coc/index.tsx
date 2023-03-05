import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import SeoHeader from '@/components/layout/SeoHeader';
import { Routes } from '@/constants/routes';

const CoCPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/coc/purpose');
  }, [router]);

  return (
    <SeoHeader
      title={Routes.COC.title}
      description="파이콘 한국 2023: 8월 11~13일 코엑스"
    />
  );
};

export default CoCPage;
