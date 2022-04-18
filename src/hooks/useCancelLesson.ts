import { useMutation, useQueryClient } from 'react-query';

import { useUserContext } from './useUserContext';
import { useAxios } from './useAxios';

export const useCancelLesson = (lessonId: number) => {
  const axios = useAxios();
  const queryClient = useQueryClient();
  const { user, accessToken } = useUserContext();
  const cancelLesson = async (lessonId: number): Promise<void> => {
    const response = await axios.put(
      `http://localhost:8000/api/lessons/cancel/${lessonId}`,
      lessonId,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
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
