import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import { TitledSection, withAuth } from '@components';
import {
  LessonsContainer,
  PublicRequestsContainer,
  TutorsNavbar,
} from '@modules';
import { PageLayout } from 'pages/student/home';

const TutorHomepage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          InstruGo | Get help with math, physics, languages and more
        </title>
      </Head>

      <TutorsNavbar />

      <PageLayout>
        <TitledSection titleMsgId="tutorsHome.upcoming">
          <LessonsContainer filter={{ status: 'pending' }} />
        </TitledSection>

        <PublicRequestsContainer title={'tutorsHome.recommended'} />
      </PageLayout>
    </div>
  );
};

export default withAuth(TutorHomepage);
