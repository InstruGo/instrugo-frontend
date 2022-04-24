import { useMutation, useQueryClient } from 'react-query';

import type { Lesson } from '@types';

import { useAxios } from '@hooks';

export const useResolveLesson = (lessonId: number) => {
  const axios = useAxios();
  const queryClient = useQueryClient();
  const resolveLesson = async (tutorResponseId: number): Promise<Lesson> => {
    const response = await axios.post(`/lessons/resolve/${lessonId}`, {
      params: { tutorResponseId: tutorResponseId },
    });
    const data = response.data as Lesson;
    return data;
  };

  return useMutation(resolveLesson, {
    onSuccess: () => {
      queryClient.invalidateQueries('lessons');
      queryClient.invalidateQueries('publicRequests');
      queryClient.invalidateQueries(`lesson${lessonId}`);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
