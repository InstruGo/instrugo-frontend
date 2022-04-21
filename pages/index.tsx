import type { NextPage } from 'next';
import Head from 'next/head';

import { LandingPage } from '@modules';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          InstruGo | Get help with math, physics, languages and more
        </title>
      </Head>

      <LandingPage />
    </>
  );
};

export default Home;
