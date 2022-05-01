import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { withAuth } from '@components';
import { StudentsNavbar, RequestsContainer, NewRequestButton } from '@modules';

const RequestsPage: NextPage = () => {
  const router = useRouter();
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

export default withAuth(RequestsPage);
