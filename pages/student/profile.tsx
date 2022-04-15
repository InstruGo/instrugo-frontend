import type { NextPage } from 'next';
import React from 'react';

import { useUserContext } from '@hooks';
import { Profile } from '@modules';

const ProfilePage: NextPage = () => {
  const { user } = useUserContext();

  return <Profile user={user} />;
};

export default ProfilePage;
