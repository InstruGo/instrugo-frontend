import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { LoginForm } from '@modules';
import { AuthLayout } from '@modules/AuthLayout/AuthLayout';

import { useUserContext } from '../src/hooks/useUserContext';

const Login: NextPage = () => {
  const router = useRouter();
  const { user } = useUserContext();

  useEffect(() => {
    if (user) {
      router.push(user.role === 'student' ? '/student/home' : '/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Head>
        <title>InstruGo | Login </title>
      </Head>

      <AuthLayout descriptionMsgId="login.description">
        <LoginForm />
      </AuthLayout>
    </div>
  );
};

export default Login;
