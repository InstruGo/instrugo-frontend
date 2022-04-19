import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { FormattedMessage } from 'react-intl';

import { Button } from '@components';
import { AuthLayout } from '@modules/AuthLayout/AuthLayout';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          InstruGo | Get help with math, physics, languages and more
        </title>
      </Head>

      <AuthLayout descriptionMsgId="landingPage.description">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '100px',
          }}
        >
          <Link href="/login">
            <a>
              <Button
                style={{
                  padding: '10px 20px',
                  borderRadius: '20px',
                  fontSize: '20px',
                }}
              >
                <FormattedMessage id="button.login" />
              </Button>
            </a>
          </Link>

          <Link href="/register">
            <a>
              <Button
                style={{
                  marginTop: '10px',
                  padding: '10px 20px',
                  borderRadius: '20px',
                  fontSize: '20px',
                }}
              >
                <FormattedMessage id="button.register" />
              </Button>
            </a>
          </Link>
        </div>
      </AuthLayout>
    </div>
  );
};

export default Home;
