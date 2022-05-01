import { useQuery } from 'react-query';

import { useAxios } from '@hooks';
import type { PublicUser } from '@types';

export const usePublicProfile = (id: number) => {
  const axios = useAxios();

  const getPublicProfile = async (id: number): Promise<PublicUser> => {
    const response = await axios.get(`/auth/profile/${id}`);
    return response.data as PublicUser;
  };

  return useQuery(`publicProfile${id}`, () => getPublicProfile(id), {
    onSuccess: () => {},
    onError: (error) => {
      console.log(error);
    },
    staleTime: Infinity,
  });
};
