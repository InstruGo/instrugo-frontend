import type { NextPage } from 'next';
import Head from 'next/head';

import { TitledSection, withAuth } from '@components';
import { StudentsNavbar, LessonsContainer, NewRequestButton } from '@modules';

import { PageLayout } from './home';

const RequestsPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>InstruGo | Student requests</title>
      </Head>

      <StudentsNavbar />

      <PageLayout>
        <TitledSection titleMsgId="student.request.requests">
          <NewRequestButton />

          <LessonsContainer filter={{ status: 'requested' }} />
        </TitledSection>
      </PageLayout>
    </div>
  );
};

export default withAuth(RequestsPage);
