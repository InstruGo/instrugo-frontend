import type { NextPage } from 'next';
import Head from 'next/head';
import { RegistrationForm } from '@modules';
import { SimpleHeader } from '@modules/SimpleHeader/Simpleheader';

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
