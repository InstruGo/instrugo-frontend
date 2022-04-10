import type { NextPage } from 'next';
import React from 'react';

import { useUserContext } from '@hooks';
import { ProfilePage } from '@modules';

const Homepage: NextPage = () => {
  const { user } = useUserContext();

  return <ProfilePage user={user} />;
};

export default Homepage;
