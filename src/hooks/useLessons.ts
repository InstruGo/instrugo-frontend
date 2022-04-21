import { useQuery } from 'react-query';

import { useAxios } from '@hooks';
import { Lesson } from '@types';

export const useLessons = (status: string) => {
  const axios = useAxios();

  const getLessons = async (status: string): Promise<Lesson[]> => {
    const response = await axios.get(`/lessons`, {
      params: { status: status },
    });

    return response.data;
  };

  return useQuery([`upcomingLessons`, status], () => getLessons(status), {
    onSuccess: () => {},
    onError: (error) => {
      console.log(error);
    },
    staleTime: Infinity,
  });
};
