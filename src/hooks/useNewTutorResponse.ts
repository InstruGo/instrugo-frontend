import { useMutation, useQueryClient } from 'react-query';

import type { NewTutorResponseFormInputs, TutorResponse } from '@types';

import { useAxios } from './useAxios';

export const useNewTutorResponse = (lessonId: number) => {
  const axios = useAxios();
  const queryClient = useQueryClient();
  const newResponse = async (
    input: NewTutorResponseFormInputs
  ): Promise<TutorResponse> => {
    const response = await axios.post('/tutor-responses', input);
    const data = response.data as TutorResponse;
    return data;
  };

  return useMutation(newResponse, {
    onSuccess: () => {
      queryClient.invalidateQueries('upcomingLessons');
      queryClient.invalidateQueries('lessonRequests');
      queryClient.invalidateQueries(`lesson${lessonId}`);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
