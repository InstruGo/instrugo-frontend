import { LoginForm, SimpleHeader } from '@modules';
import type { NextPage } from 'next';
import Head from 'next/head';

const Login: NextPage = () => {
  return (
    <div>
      <Head>
        <title>InstruGo | Login </title>
      </Head>

      <SimpleHeader />
      <LoginForm />
    </div>
  );
};

export default Login;
