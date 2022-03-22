import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useProfile, useUserContext } from '@hooks';

const Home: NextPage = () => {
  const { isLoading } = useProfile();
  const { user } = useUserContext();

  if (isLoading) return <div>Loading...</div>;
  if (!user) return <div>No user data...</div>;

  return (
    <div>
      <Head>
        <title>
          InstruGo | Get help with math, physics, languages and more
        </title>
      </Head>

      <p>{user.firstName}</p>
    </div>
  );
};

export default Home;
