import type { NextPage } from 'next';
import Head from 'next/head';

import { TitledSection, withAuth } from '@components';
import { LessonsContainer, LessonsTable, Navbar } from '@modules';
import { lessonFilters } from '@utils/lessonFilters';
import { PageLayout } from 'pages/student/home';

const LessonsPage: NextPage = () => {
  const { todayFilter, nextWeekFilter } = lessonFilters();

  return (
    <div>
      <Head>
        <title>InstruGo | Tutor lessons</title>
      </Head>

      <Navbar />

      <PageLayout>
        <TitledSection titleMsgId="lessons.1st_group">
          <LessonsContainer filter={todayFilter} />
        </TitledSection>

        <TitledSection titleMsgId="lessons.2nd_group">
          <LessonsContainer filter={nextWeekFilter} />
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
