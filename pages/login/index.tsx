import Main from '@/components/login/Main';
import { Routes } from '@/constants/routes';
import { isEnvProd } from '@/utils';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    /////////////////////////////
    // TODO 운영 환경에서 안 보이게
    /////////////////////////////
    if (isEnvProd()) router.replace(Routes.HOME.route);
    /////////////////////////////
  }, [router]);

  return (
    <>
      <Main />
    </>
  );
};

export default Login;
