import { useMutation, useQueryClient } from 'react-query';

import type { Lesson } from '@types';
import { useAxios } from './useAxios';

export const useResolveLesson = (lessonId: number) => {
  const axios = useAxios();
  const queryClient = useQueryClient();
  const resolveLesson = async (input: {
    tutorResponseId: number;
    timeFrameId: number;
  }): Promise<Lesson> => {
    const response = await axios.post(`/lessons/resolve/${lessonId}`, input);
    const data = response.data as Lesson;
    return data;
  };

  return useMutation(resolveLesson, {
    onSuccess: () => {
      queryClient.invalidateQueries('upcomingLessons');
      queryClient.invalidateQueries('publicRequests');
      queryClient.invalidateQueries('lessonRequests');
      queryClient.invalidateQueries(`lesson${lessonId}`);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
