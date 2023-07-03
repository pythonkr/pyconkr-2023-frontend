import React, { useEffect, useState } from 'react';
import SeoHeader from '@/components/layout/SeoHeader';
import { Routes } from '@/constants/routes';
import SessionListComponent from '@/components/session/sessonList';
import { SessionList } from '@/@types/session';
import { SessionAPI } from '@/api';
import router from 'next/router';
import { isEnvProd } from '@/utils';
import { Loader } from '@/components/common/Loader';

const SessionListPage = () => {
  const [sessions, setSessions] = useState<SessionList[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getSessionList = async () => {
      setIsLoading(true);
      try {
        setSessions(await SessionAPI.getSessionList());
      } catch (e) {
        alert(`세션 목록 불러오기 실패\n(${e})`);
        router.push(Routes.HOME.route);
      } finally {
        setIsLoading(false);
      }
    };
    if (isEnvProd()) {
      router.replace(Routes.HOME.route);
    } else {
      getSessionList();
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
        title={Routes.SESSION.title}
        description="파이콘 한국 2023: 8월 11~13일 코엑스"
      />
      <SessionListComponent data={sessions} />
    </>
  );
};

export default SessionListPage;
