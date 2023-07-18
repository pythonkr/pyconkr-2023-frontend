import Main from '@/components/login/Main';
import { Routes } from '@/constants/routes';
import { userState } from '@/stores/login';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

const Login = () => {
  const router = useRouter();
  const loginUser = useRecoilValue(userState);

  useEffect(() => {
    if (loginUser.userid !== null) router.replace(Routes.HOME.route);
  }, [loginUser, router]);

  return (
    <>
      <Main />
    </>
  );
};

export default Login;
