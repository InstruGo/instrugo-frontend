import { useQuery } from 'react-query';

import { useAxios } from '@hooks';
import { Lesson } from '@types';

export const useCompletedLessons = () => {
  const axios = useAxios();

  const getCompletedLessons = async (): Promise<Lesson[]> => {
    const response = await axios.get(`/lessons`, {
      params: { status: 'Canceled' },
    });

    return response.data;
  };

  return useQuery(`completedLessons`, getCompletedLessons, {
    onSuccess: () => {},
    onError: (error) => {
      console.log(error);
    },
    staleTime: Infinity,
  });
};
