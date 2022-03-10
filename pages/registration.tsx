import type { NextPage } from 'next';
import Head from 'next/head';
import { RegistrationContainer } from '../src/modules/Registration/RegistrationContainer';

const Registration: NextPage = () => {
  return (
    <div>
      <Head>
        <title>InstruGo | Register an Acount</title>
      </Head>

      <RegistrationContainer />
    </div>
  );
};

export default Registration;
