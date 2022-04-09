import type { NextPage } from 'next';
import Head from 'next/head';
import { TutorsNavbar, PublicRequestsContainer } from '@modules';

const RequestsPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>InstruGo | Public requests</title>
      </Head>

      <TutorsNavbar />
      <PublicRequestsContainer />
    </div>
  );
};

export default RequestsPage;
