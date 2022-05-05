import type { NextPage } from 'next';
import Head from 'next/head';

import { TitledSection, withAuth } from '@components';
import { Navbar } from '@modules';
import { ResponsesContainer } from '@modules/ResponsesContainer/ResponsesContainer';
import { PageLayout } from 'pages/student/home';

const TutorResponses: NextPage = () => {
  return (
    <div>
      <Head>
        <title>InstruGo | Tutor lessons</title>
      </Head>

      <Navbar />

      <PageLayout>
        <TitledSection titleMsgId="responsesPage.title">
          <ResponsesContainer />
        </TitledSection>
      </PageLayout>
    </div>
  );
};

export default withAuth(TutorResponses);
