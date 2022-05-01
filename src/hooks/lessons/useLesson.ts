import { useQuery } from 'react-query';

import { useAxios } from '@hooks';
import { Lesson } from '@types';

export const useLesson = (id: number) => {
  const axios = useAxios();

  const getLesson = async (): Promise<Lesson> => {
    const response = await axios.get(`/lessons/${id}`);
    return response.data as Lesson;
  };

  return useQuery(`lesson${id}`, getLesson, {
    onSuccess: () => {},
    onError: (error) => {
      console.log(error);
    },
    staleTime: Infinity,
  });
};
