import { useQuery } from 'react-query';

import { useUserContext, useAxios, useLogout } from '@hooks';
import type { User } from '@types';

export const useProfile = () => {
  const axios = useAxios();
  const logout = useLogout();
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useUserContext();

  const getProfile = async (): Promise<User> => {
    const response = await axios.get('/auth/profile');

    if (!response || !response.data) {
      throw new Error();
    }

    const user = response.data as User;
    return user;
  };

  return useQuery('profile', getProfile, {
    onSuccess: (data) => {
      setIsLoggedIn(true);
      setUser(data);
    },
    onError: () => {
      setIsLoggedIn(false);
    },
    staleTime: Infinity,
    retry: false,
    enabled: !user && isLoggedIn,
  });
};
