import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import { TitledSection, withAuth } from '@components';
import { Navbar, Rewards } from '@modules';
import { LessonsWithFilter } from '@modules';
import { styled } from 'styles/stitches.config';

const StudentHomepage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          InstruGo | Get help with math, physics, languages and more
        </title>
      </Head>

      <Navbar />

      <PageLayout>
        <TitledSection titleMsgId="home.rewards">
          <Rewards />
        </TitledSection>

        <TitledSection titleMsgId="home.lessons">
          <LessonsWithFilter />
        </TitledSection>
      </PageLayout>
    </div>
  );
};

export default withAuth(StudentHomepage);

export const PageLayout = styled('div', {
  padding: '20px',
  '> div + div': {
    marginTop: '$24',
  },
});
