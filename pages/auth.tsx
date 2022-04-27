import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect } from 'react';

import { withAuth } from '@components';
import { Loader } from '@components/icons';
import { useHomeRedirect } from '@hooks';

const AuthRedirect: NextPage = () => {
  const redirect = useHomeRedirect();

  useEffect(() => {
    redirect();
  }, [redirect]);

  return (
    <div>
      <Head>
        <title>
          InstruGo | Get help with math, physics, languages and more
        </title>
      </Head>

      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}
      >
        <Loader width="40px" />
      </div>
    </div>
  );
};

export default withAuth(AuthRedirect);
