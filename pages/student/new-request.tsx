import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { withAuth } from '@components';
import { NewRequestForm, Navbar } from '@modules';

const RequestsPage: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>InstruGo | New request</title>
      </Head>

      <Navbar />

      <NewRequestForm onFinish={() => router.push('/student/requests')} />
    </div>
  );
};

export default withAuth(RequestsPage);
