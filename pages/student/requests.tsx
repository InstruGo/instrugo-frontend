import type { NextPage } from 'next';
import Head from 'next/head';
<<<<<<< HEAD

import { withAuth } from '@components';
import { StudentsNavbar, RequestsContainer } from '@modules';
=======
import { StudentsNavbar, RequestsContainer, NewRequestButton } from '@modules';
import { useRouter } from 'next/router';
>>>>>>> new request from changes and request details changes

const Requestspage: NextPage = () => {
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

export default withAuth(Requestspage);
