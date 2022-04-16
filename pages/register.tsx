import type { NextPage } from 'next';
import Head from 'next/head';

import { RegistrationForm } from '@modules';
import { AuthLayout } from '@modules/AuthLayout/AuthLayout';

const Registration: NextPage = () => {
  return (
    <div>
      <Head>
        <title>InstruGo | Register an account</title>
      </Head>

      <AuthLayout descriptionMsgId="registration.description">
        <RegistrationForm />
      </AuthLayout>
    </div>
  );
};

export default Registration;
