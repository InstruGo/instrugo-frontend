import type { NextPage } from 'next';
import Head from 'next/head';

import { withAuth } from '@components/withAuth';
import { StudentsNavbar, RequestsContainer } from '@modules';

const Requestspage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>InstruGo | Student requests</title>
      </Head>

      <StudentsNavbar />
      <RequestsContainer />
    </div>
  );
};

export default withAuth(Requestspage);
