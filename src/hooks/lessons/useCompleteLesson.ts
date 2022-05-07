import { useMutation, useQueryClient } from 'react-query';

import { useAxios } from '@hooks';
import type { Lesson } from '@types';

export const useCompleteLesson = (lessonId: number) => {
  const axios = useAxios();
  const queryClient = useQueryClient();

  const completeLesson = async (): Promise<Lesson> => {
    const response = await axios.post(`/lessons/complete/${lessonId}`);
    const data = response.data as Lesson;
    return data;
  };

  return useMutation(completeLesson, {
    onSuccess: () => {
      queryClient.invalidateQueries('lessons');
      queryClient.invalidateQueries(`lesson${lessonId}`);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
