import type { NextPage } from 'next';
import React from 'react';

import { withAuth } from '@components';

const TutorHomepage: NextPage = () => {
  return <div>tutor home</div>;
};

export default withAuth(TutorHomepage);
