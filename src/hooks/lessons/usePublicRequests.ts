import { useQuery } from 'react-query';

import { useAxios } from '@hooks';
import { Lesson, PoolFilter } from '@types';

export const usePublicRequests = (filter: PoolFilter) => {
  const axios = useAxios();
  const getPublicRequests = async (): Promise<Lesson[]> => {
    const response = await axios.get(`/lessons/pool`, { params: filter });
    return response.data as Lesson[];
  };

  return useQuery([`publicRequests`, filter], () => getPublicRequests(), {
    onSuccess: () => {},
    onError: (error) => {
      console.log(error);
    },
    staleTime: Infinity,
  });
};
