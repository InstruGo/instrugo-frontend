import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';

import { useQueryClient } from 'react-query';

import { LoginForm } from '@modules';
import { AuthLayout } from '@modules/AuthLayout/AuthLayout';

import { withLoginRedirect } from '../src/components/withLoginRedirect';

const Login: NextPage = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.clear();
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

export default withLoginRedirect(Login);
