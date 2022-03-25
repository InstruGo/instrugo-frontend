import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { Modal } from '@components';
import { useProfile } from '@hooks';
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

const Homepage: NextPage = () => {
  const [showNewRequestModal, setNewRequestModal] = useState(false);
  const { isLoading } = useProfile();

  if (isLoading) return <div>Loading...</div>;

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

      <NewRequestButton onClick={() => setNewRequestModal(true)} />

      <Modal
        shouldShow={showNewRequestModal}
        closeAction={() => setNewRequestModal(false)}
      >
        <div style={{ marginRight: '30px' }}>Create new request</div>
      </Modal>
    </div>
  );
};

export default Homepage;
