import { useMutation, useQueryClient } from 'react-query';

import { useAxios } from './useAxios';

export const useCancelLesson = (lessonId: number) => {
  const axios = useAxios();
  const queryClient = useQueryClient();

  const cancelLesson = async (lessonId: number): Promise<void> => {
    const response = await axios.put(`/lessons/cancel/${lessonId}`, lessonId);
  };

  return useMutation(cancelLesson, {
    onSuccess: () => {
      queryClient.invalidateQueries('upcomingLessons');
      queryClient.invalidateQueries(`lesson${lessonId}`);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
