import type { NextPage } from 'next';
import Head from 'next/head';

import { TitledSection, withAuth } from '@components';
import { PublicRequestsWithFilter, Navbar } from '@modules';

import { PageLayout } from '../student/home';

const RequestsPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>InstruGo | Public requests</title>
      </Head>

      <Navbar />

      <PageLayout>
        <TitledSection titleMsgId="tutor.request.requests">
          <PublicRequestsWithFilter />
        </TitledSection>
      </PageLayout>
    </div>
  );
};

export default withAuth(RequestsPage);
