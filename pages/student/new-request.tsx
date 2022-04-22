import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { StudentsNavbar, NewRequestForm } from '@modules';

const RequestsPage: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>InstruGo | New request</title>
      </Head>

      <StudentsNavbar />
      <NewRequestForm onFinish={() => router.push('/student/requests')} />
    </div>
  );
};

export default RequestsPage;
