import { Modal } from '@components';
import {
  LessonsContainer,
  NewRequestButton,
  Rewards,
  StudentsNavbar,
} from '@modules';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { styled } from 'styles/stitches.config';

const PageLayout = styled('div', {
  padding: '20px',
  '> div + div': {
    marginTop: '100px',
  },
});

const Homepage: NextPage = () => {
  const [showNewRequestModal, setNewRequestModal] = React.useState(false);

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
