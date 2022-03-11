import type { NextPage } from 'next';
import Head from 'next/head';
import Login from './login';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          InstruGo | Get help with math, languages, physics and more
        </title>
        <meta
          name="description"
          content="App for connecting students and knowledgeable tutors."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </div>
  );
};

export default Home;
