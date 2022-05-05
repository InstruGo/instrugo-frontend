import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { withAuth } from '@components';
import { RequestDetails, Navbar } from '@modules';

const RequestDetailsPage: NextPage = () => {
  const router = useRouter();
  const query = router.query;
  const id = Number(query.id);

  return (
    <div>
      <Head>
        <title>InstruGo | Request details</title>
      </Head>

      <Navbar />

      <RequestDetails id={id} />
    </div>
  );
};

export default withAuth(RequestDetailsPage);
