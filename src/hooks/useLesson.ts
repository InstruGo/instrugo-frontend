import { useQuery } from 'react-query';

import { Lesson } from '@types';
import { useUserContext } from './useUserContext';

import { useAxios } from './useAxios';

export const useLesson = (id: number) => {
  const axios = useAxios();

  const getLesson = async (): Promise<Lesson> => {
    const response = await axios.get(`/lessons/${id}`);

    return response.data;
  };

  return useQuery(`lesson${id}`, getLesson, {
    onSuccess: () => {},
    onError: (error) => {
      console.log(error);
    },
    staleTime: Infinity,
  });
};
