import type { NextPage } from 'next';
import React from 'react';

import { withAuth } from '@components';
import { Navbar, PrivateProfile } from '@modules';

const ProfilePage: NextPage = () => {
  return (
    <>
      <Navbar />
      <PrivateProfile />
    </>
  );
};

export default withAuth(ProfilePage);
