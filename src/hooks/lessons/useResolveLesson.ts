import { useMutation, useQueryClient } from 'react-query';

import { useAxios } from '@hooks';
import type { Lesson } from '@types';

export const useResolveLesson = (lessonId: number) => {
  const axios = useAxios();
  const queryClient = useQueryClient();
  const resolveLesson = async (tutorResponseId: number): Promise<Lesson> => {
    const response = await axios.post(`/lessons/resolve/${lessonId}`, {
      tutorResponseId: tutorResponseId,
    });

    const data = response.data as Lesson;
    return data;
  };

  return useMutation(resolveLesson, {
    onSuccess: () => {
      queryClient.invalidateQueries(['lessons', { status: 'requested' }]);
      queryClient.invalidateQueries(['lessons', { status: 'pending' }]);
      queryClient.invalidateQueries('publicRequests');
      queryClient.invalidateQueries(`lesson${lessonId}`);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
