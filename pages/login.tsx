import type { NextPage } from 'next';
import Head from 'next/head';

import { LoginForm } from '@modules';
import { AuthLayout } from '@modules/AuthLayout/AuthLayout';

import { withLoginRedirect } from '../src/components/withLoginRedirect';

const Login: NextPage = () => {
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
