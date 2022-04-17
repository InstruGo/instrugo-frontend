import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';

<<<<<<< HEAD
import { Modal, withAuth } from '@components';
=======
import { useProfile } from '@hooks';
>>>>>>> new request from changes and request details changes
import {
  LessonsContainer,
  NewRequestButton,
  Rewards,
  StudentsNavbar,
} from '@modules';
import { styled } from 'styles/stitches.config';
import { useRouter } from 'next/router';

const PageLayout = styled('div', {
  padding: '20px',
  '> div + div': {
    marginTop: '100px',
  },
});

<<<<<<< HEAD
const StudentHomepage: NextPage = () => {
  const [showNewRequestModal, setNewRequestModal] = useState(false);
=======
const Homepage: NextPage = () => {
  const { isLoading } = useProfile();
  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;
>>>>>>> new request from changes and request details changes

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

        <LessonsContainer />
      </PageLayout>

      <NewRequestButton onClick={() => router.push('/student/new-request')} />
    </div>
  );
};

export default withAuth(StudentHomepage);
