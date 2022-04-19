import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { FormattedMessage } from 'react-intl';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          InstruGo | Get help with math, physics, languages and more
        </title>
      </Head>

      <div>Welcome to InstruGo!</div>

      <Link href="/login">
        <a>
          <FormattedMessage id="button.login" />
        </a>
      </Link>

      <Link href="/register">
        <a>
          <FormattedMessage id="button.register" />
        </a>
      </Link>
    </div>
  );
};

export default Home;
