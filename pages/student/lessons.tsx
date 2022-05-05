import type { NextPage } from 'next';
import Head from 'next/head';

import { TitledSection, withAuth } from '@components';
import { LessonsContainer, Navbar } from '@modules';
import { LessonsTable } from '@modules';

import { PageLayout } from './home';

const LessonsPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>InstruGo | Student lessons</title>
      </Head>

      <Navbar />

      <PageLayout>
        <TitledSection titleMsgId="lessons.1st_group">
          <LessonsContainer filter={{ status: 'pending' }} />
        </TitledSection>

        <TitledSection titleMsgId="lessons.2nd_group">
          <LessonsContainer filter={{ status: 'pending' }} />
        </TitledSection>

        <TitledSection titleMsgId="lessons.3rd_group">
          <LessonsContainer filter={{ status: 'pending' }} />
        </TitledSection>

        <TitledSection titleMsgId="lessons.table">
          <LessonsTable filter={{ status: 'completed' }} />
        </TitledSection>
      </PageLayout>
    </div>
  );
};

export default withAuth(LessonsPage);
