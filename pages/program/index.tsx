import React, { useEffect, useState } from 'react';
import SeoHeader from '@/components/layout/SeoHeader';
import { Routes } from '@/constants/routes';
import ProgramListComponent from '@/components/program/programList';
import { ProgramList } from '@/@types/program';
import { ProgramAPI } from '@/api';
import router from 'next/router';
import { isEnvProd } from '@/utils';
import { Loader } from '@/components/common/Loader';

const ProgramListPage = () => {
  const [programs, setPrograms] = useState<ProgramList[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getProgramList = async () => {
      setIsLoading(true);
      try {
        setPrograms(await ProgramAPI.getProgramList());
      } catch (e) {
        alert(`프로그램 목록 불러오기 실패\n(${e})`);
        router.push(Routes.HOME.route);
      } finally {
        setIsLoading(false);
      }
    };
    if (isEnvProd()) {
      router.replace(Routes.HOME.route);
    } else {
      getProgramList();
    }
  }, []);
  if (isLoading === true)
    return (
      <>
        <Loader />
      </>
    );
  return (
    <>
      <SeoHeader
        title={Routes.PROGRAM.title}
        description="파이콘 한국 2023: 8월 11~13일 코엑스"
      />
      <ProgramListComponent data={programs} />
    </>
  );
};

export default ProgramListPage;
