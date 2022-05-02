import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { useProfile, useUserContext } from '@hooks';

export const withAuth = (Component: NextPage) => {
  const AuthenticatedComponent = () => {
    const router = useRouter();
    const { user } = useUserContext();
    const { isLoading, isError } = useProfile();

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (isError) {
      router.push('/login');
    }

    return user ? <Component /> : null;
  };

  return AuthenticatedComponent;
};
