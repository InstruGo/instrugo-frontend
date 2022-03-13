import type { NextPage } from 'next';
import Head from 'next/head';
import { RegistrationForm, SimpleHeader } from '@modules';

const Registration: NextPage = () => {
  return (
    <div>
      <Head>
        <title>InstruGo | Register an account</title>
      </Head>

      <SimpleHeader />
      <RegistrationForm />
    </div>
  );
};

export default Registration;
