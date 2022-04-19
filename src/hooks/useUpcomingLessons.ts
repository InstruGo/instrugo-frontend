import { useQuery } from 'react-query';

import { useAxios } from '@hooks';
import { Lesson } from '@types';

export const useUpcomingLessons = () => {
  const axios = useAxios();

  const getUpcomingLessons = async (): Promise<Lesson[]> => {
    const response = await axios.get(`/lessons`, {
      params: { status: 'Pending' },
    });

    return response.data;
  };

  return useQuery(`upcomingLessons`, getUpcomingLessons, {
    onSuccess: () => {},
    onError: (error) => {
      console.log(error);
    },
    staleTime: Infinity,
  });
};
