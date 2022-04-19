import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';

import { Modal, withAuth } from '@components';
import {
  LessonsContainer,
  NewRequestButton,
  Rewards,
  StudentsNavbar,
  NewRequestForm,
} from '@modules';
import { styled } from 'styles/stitches.config';

const PageLayout = styled('div', {
  padding: '20px',
  '> div + div': {
    marginTop: '100px',
  },
});

const StudentHomepage: NextPage = () => {
  const [showNewRequestModal, setNewRequestModal] = useState(false);

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
        <NewRequestForm onFinish={() => setNewRequestModal(false)} />
      </Modal>
    </div>
  );
};

export default withAuth(StudentHomepage);
