import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

import { withAuth } from '@components';
import { Loader } from '@components/icons';
import { useUserContext } from '@hooks';

const AuthRedirect: NextPage = () => {
  const { user } = useUserContext();
  const router = useRouter();

  React.useEffect(() => {
    switch (user?.role) {
      case 'student':
        router.push('/student/home');
        break;
      case 'tutor':
        router.push('/tutor/home');
        break;
      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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
