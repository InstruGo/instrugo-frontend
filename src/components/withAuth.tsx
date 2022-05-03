import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useQueryClient } from 'react-query';

import { useProfile, useUserContext, useHomeRedirect } from '@hooks';
import { OptionalUser, UserRole } from '@types';

export const withAuth = (Component: NextPage) => {
  const AuthenticatedComponent = () => {
    const queryClient = useQueryClient();
    const router = useRouter();
    const redirect = useHomeRedirect();
    const { user, isLoggedIn } = useUserContext();
    const { isLoading, isError } = useProfile();

    const authorizationCheck = (user: OptionalUser) => {
      if (
        user?.role === UserRole.STUDENT &&
        router.pathname.startsWith('/tutor')
      ) {
        return false;
      }

      return true;
    };

    useEffect(() => {
      if (isError) {
        queryClient.invalidateQueries('profile');
      }

      if (!isLoggedIn) {
        queryClient.clear();
        router.push('/login');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn]);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (isError) {
      router.push({
        pathname: '/login',
        query: {
          returnUrl: router.pathname,
        },
      });
    }

    if (!authorizationCheck(user)) {
      redirect();
      return null;
    }

    return user ? <Component /> : null;
  };

  return AuthenticatedComponent;
};
