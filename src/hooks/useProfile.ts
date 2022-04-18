import { useQuery } from 'react-query';

import { useUserContext } from '@hooks';
import type { User } from '@types';

import { useAxios } from './useAxios';

export const useProfile = () => {
  const { setUser } = useUserContext();
  const axios = useAxios();

  const getProfile = async (): Promise<User> => {
<<<<<<< HEAD
    const response = await axios.get('/auth/profile');
=======
    const response = await axios.get('http://localhost:8000/api/auth/profile', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
>>>>>>> resolve lesson and cancel lesson hooks

    const user = response.data as User;
    return user;
  };

  return useQuery('profile', getProfile, {
    onSuccess: (data) => {
      setUser(data);
    },
    staleTime: Infinity,
    retry: false,
  });
};
