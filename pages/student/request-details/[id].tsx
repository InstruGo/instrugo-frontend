import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { StudentsNavbar, RequestDetails } from '@modules';

const RequestDetailsPage: NextPage = () => {
  const router = useRouter();
  const query = router.query;
  const id = Number(query.id);

  return (
    <div>
      <Head>
        <title>InstruGo | Request details</title>
      </Head>

      <StudentsNavbar />
      <RequestDetails id={id} />
    </div>
  );
};

export default RequestDetailsPage;
