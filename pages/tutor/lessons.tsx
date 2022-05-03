import type { NextPage } from 'next';
import Head from 'next/head';

import { TitledSection } from '@components';
import { TutorsNavbar, LessonsContainer, LessonsTable } from '@modules';
import { PageLayout } from 'pages/student/home';

const Lessonspage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>InstruGo | Tutor lessons</title>
      </Head>

      <TutorsNavbar />

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

export default Lessonspage;
