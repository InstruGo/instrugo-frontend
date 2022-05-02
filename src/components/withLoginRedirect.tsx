import { NextPage } from 'next';

import { useHomeRedirect, useProfile } from '@hooks';

export const withLoginRedirect = (Component: NextPage) => {
  const AuthenticatedComponent = () => {
    const redirect = useHomeRedirect();
    const { isLoading, isSuccess } = useProfile();

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (isSuccess) {
      redirect();
      return null;
    }

    return <Component />;
  };

  return AuthenticatedComponent;
};
