import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

import { withAuth } from '@components';
import { Lessons, PublicRequestsContainer, TutorsNavbar } from '@modules';
import { styled } from 'styles/stitches.config';

const PageLayout = styled('div', {
  padding: '20px',
  '> div + div': {
    marginTop: '100px',
  },
});

const TutorHomepage: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>
          InstruGo | Get help with math, physics, languages and more
        </title>
      </Head>

      <TutorsNavbar />

      <PageLayout>
        <Lessons title={'tutorsHome.upcoming'} cards />
        {/* <Lessons
          title={'tutorsHome.recommended'}
          cards
          filter
          isTutor
        /> */}
        <PublicRequestsContainer title={'tutorsHome.recommended'} />
      </PageLayout>
    </div>
  );
};

export default withAuth(TutorHomepage);
