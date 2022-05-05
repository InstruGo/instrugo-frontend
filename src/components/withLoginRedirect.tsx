import { NextPage } from 'next';

import { Loader } from '@components';
import { useHomeRedirect, useProfile } from '@hooks';

export const withLoginRedirect = (Component: NextPage) => {
  const AuthenticatedComponent = () => {
    const redirect = useHomeRedirect();
    const { isLoading, isSuccess } = useProfile();

    if (isLoading) {
      return <Loader />;
    }

    if (isSuccess) {
      redirect();
      return null;
    }

    return <Component />;
  };

  return AuthenticatedComponent;
};
