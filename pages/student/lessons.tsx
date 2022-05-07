import type { NextPage } from 'next';
import Head from 'next/head';

import { TitledSection, withAuth } from '@components';
import { LessonsContainer, Navbar } from '@modules';
import { LessonsTable } from '@modules';
import { lessonFilters } from '@utils/lessonFilters';

import { PageLayout } from './home';

const LessonsPage: NextPage = () => {
  const { todayFilter, nextWeekFilter, upcomingFilter } = lessonFilters();

  return (
    <div>
      <Head>
        <title>InstruGo | Student lessons</title>
      </Head>

      <Navbar />

      <PageLayout>
        <TitledSection titleMsgId="lessons.1st_group">
          <LessonsContainer filter={todayFilter} />
        </TitledSection>

        <TitledSection titleMsgId="lessons.2nd_group">
          <LessonsContainer filter={upcomingFilter} />
        </TitledSection>

        <TitledSection titleMsgId="lessons.3rd_group">
          <LessonsContainer filter={{ status: 'completed' }} />
        </TitledSection>

        <TitledSection titleMsgId="lessons.table">
          <LessonsTable filter={{ status: 'completed' }} />
        </TitledSection>
      </PageLayout>
    </div>
  );
};

export default withAuth(LessonsPage);
