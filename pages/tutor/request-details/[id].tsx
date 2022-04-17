import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { StudentsNavbar, PublicRequestDetails } from '@modules';

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
      <PublicRequestDetails id={id} />
    </div>
  );
};

export default RequestDetailsPage;
