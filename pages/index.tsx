import { Modal } from '@components';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const Home: NextPage = () => {
  const [shouldShow, setShouldShow] = React.useState(false);

  return (
    <div>
      <Head>
        <title>
          InstruGo | Get help with math, physics, languages and more
        </title>
      </Head>

      <button onClick={() => setShouldShow(true)}>details</button>
      <Modal
        shouldShow={shouldShow}
        onBackgroundClick={() => setShouldShow(false)}
      >
        <div>this is details modal</div>
      </Modal>
    </div>
  );
};

export default Home;
