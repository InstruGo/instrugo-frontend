import { useQuery } from 'react-query';

import { useUserContext, useAxios } from '@hooks';
import type { User } from '@types';

export const useProfile = () => {
  const { user, setUser } = useUserContext();
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
    staleTime: Infinity,
    retry: false,
    enabled: !user,
  });
};
