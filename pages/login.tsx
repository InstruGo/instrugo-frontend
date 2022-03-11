import type { NextPage } from 'next';
import Head from 'next/head';
import { LoginForm } from '../src/modules/LoginForm';
import { SimpleHeader } from '../src/modules/SimpleHeader/Simpleheader';

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
