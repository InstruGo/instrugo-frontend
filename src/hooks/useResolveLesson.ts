import { useMutation, useQueryClient } from 'react-query';

import type { Lesson } from '@types';
import { useUserContext } from './useUserContext';
import { useAxios } from './useAxios';

export const useResolveLesson = (lessonId: number) => {
  const axios = useAxios();
  const queryClient = useQueryClient();
  const { accessToken } = useUserContext();
  const resolveLesson = async (input: {
    tutorResponseId: number;
    timeFrameId: number;
  }): Promise<Lesson> => {
    const response = await axios.post(
      `http://localhost:8000/api/lessons/resolve/${lessonId}`,
      input,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    const data = response.data as Lesson;
    return data;
  };

  return useMutation(resolveLesson, {
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries('upcomingLessons');
      queryClient.invalidateQueries('publicRequests');
      queryClient.invalidateQueries('lessonRequests');
      queryClient.invalidateQueries(`lesson${data.id}`);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
