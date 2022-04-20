import type { NextPage } from 'next';
import Head from 'next/head';

import { withAuth } from '@components';
import { StudentsNavbar, RequestsContainer, NewRequestButton } from '@modules';
import { useRouter } from 'next/router';

const RequestsPage: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>InstruGo | Student requests</title>
      </Head>

      <StudentsNavbar />
      <RequestsContainer />
      <NewRequestButton onClick={() => router.push('/student/new-request')} />
    </div>
  );
};

export default withAuth(RequestsPage);
