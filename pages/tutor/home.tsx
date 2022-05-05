import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import { Calendar, TitledSection, withAuth } from '@components';
import { Navbar, PublicRequestsContainer } from '@modules';
import { PageLayout } from 'pages/student/home';

const TutorHomepage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          InstruGo | Get help with math, physics, languages and more
        </title>
      </Head>

      <Navbar />

      <PageLayout>
        <TitledSection titleMsgId="tutorsHome.upcoming">
          <Calendar pending />
        </TitledSection>

        <PublicRequestsContainer title={'tutorsHome.recommended'} />
      </PageLayout>
    </div>
  );
};

export default withAuth(TutorHomepage);
