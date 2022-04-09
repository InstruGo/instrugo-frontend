import type { NextPage } from 'next';
import Head from 'next/head';
import { TutorsNavbar, PublicRequestsContainer } from '@modules';

const Requestspage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>InstruGo | Student requests</title>
      </Head>

      <TutorsNavbar />
      <PublicRequestsContainer />
    </div>
  );
};

export default Requestspage;
