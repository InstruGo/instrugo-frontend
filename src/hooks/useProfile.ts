import { useRouter } from 'next/router';

import { useQuery } from 'react-query';

import { useUserContext } from '@hooks';
import type { User } from '@types';

import { useAxios } from './useAxios';

export const useProfile = () => {
  const { setUser } = useUserContext();
  const router = useRouter();
  const axios = useAxios();

  const getProfile = async (): Promise<User> => {
    const response = await axios.get('/auth/profile');

    const user = response.data as User;
    return user;
  };

  return useQuery('profile', getProfile, {
    onSuccess: (data) => {
      setUser(data);
    },
    onError: () => {
      if (router.pathname !== '/login') {
        router.push('/login', { query: { redirectUrl: router.pathname } });
      }
    },
    staleTime: Infinity,
  });
};
