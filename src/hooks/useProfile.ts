import axios from 'axios';
import { useQuery } from 'react-query';

import { useUserContext } from '@hooks';
import type { User } from '@types';

export const useProfile = () => {
  const { accessToken, setUser } = useUserContext();

  const getProfile = async (): Promise<User> => {
    const response = await axios.get('http://localhost:3000/api/auth/profile', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const user = response.data as User;
    return user;
  };

  return useQuery('profile', getProfile, {
    onSuccess: (data) => {
      setUser(data);
    },
    onError: (error) => {
      console.log(error);
    },
    staleTime: Infinity,
  });
};
