import { useQuery } from 'react-query';

import { Lesson } from '@types';

import { useAxios } from '@hooks';

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
