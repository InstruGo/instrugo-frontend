import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

import { withAuth } from '@components';
import {
  LessonsContainer,
  NewRequestButton,
  Rewards,
  StudentsNavbar,
} from '@modules';
import { styled } from 'styles/stitches.config';

const PageLayout = styled('div', {
  padding: '20px',
  '> div + div': {
    marginTop: '100px',
  },
});

const StudentHomepage: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>
          InstruGo | Get help with math, physics, languages and more
        </title>
      </Head>

      <StudentsNavbar />

      <PageLayout>
        <Rewards />

        <LessonsContainer title={'home.lessons'} home={true} cards={true} />
      </PageLayout>

      <NewRequestButton onClick={() => router.push('/student/new-request')} />
    </div>
  );
};

export default withAuth(StudentHomepage);
