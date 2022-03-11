import { Input } from '@components';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          InstruGo | Get help with math, physics, languages and more
        </title>
      </Head>

      <Input placeholderMsgId="reg" defaultValueMsgId="reg" />
    </div>
  );
};

export default Home;
