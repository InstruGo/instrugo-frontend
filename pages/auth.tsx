import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect } from 'react';

import { Loader, withAuth } from '@components';
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

      <Loader />
    </div>
  );
};

export default withAuth(AuthRedirect);
