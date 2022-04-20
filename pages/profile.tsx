import type { NextPage } from 'next';
import React from 'react';

import { withAuth } from '@components';
import { useUserContext } from '@hooks';
import { PrivateProfile } from '@modules';

const ProfilePage: NextPage = () => {
  const { user } = useUserContext();

  return <PrivateProfile user={user} />;
};

export default withAuth(ProfilePage);
