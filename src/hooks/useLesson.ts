import { useQuery } from 'react-query';
import axios from 'axios';
import { Lesson } from '@types';

export const useLesson = (id: number) => {
  const getLesson = async (): Promise<Lesson> => {
    const response = await axios.get(`http://localhost:3000/api/lessons/${id}`);
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
