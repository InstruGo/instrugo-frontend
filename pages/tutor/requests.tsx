import type { NextPage } from 'next';
import Head from 'next/head';

import { withAuth } from '@components';
import { PublicRequestsContainer, Navbar } from '@modules';

import { PageLayout } from '../student/home';

const RequestsPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>InstruGo | Public requests</title>
      </Head>

      <Navbar />

      <PageLayout>
        <PublicRequestsContainer title={'tutor.request.requests'} />
      </PageLayout>
    </div>
  );
};

export default withAuth(RequestsPage);
