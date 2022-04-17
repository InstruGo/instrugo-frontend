import { useMutation, useQueryClient } from 'react-query';

import type { NewTutorResponseFormInputs, TutorResponse } from '@types';
import { useUserContext } from './useUserContext';
import { useAxios } from './useAxios';

export const useNewTutorResponse = (lessonId: number) => {
  const axios = useAxios();
  const queryClient = useQueryClient();
  const { user, accessToken } = useUserContext();
  const newResponse = async (
    input: NewTutorResponseFormInputs
  ): Promise<TutorResponse> => {
    const response = await axios.post(
      'http://localhost:3000/api/tutor-responses',
      input,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    const data = response.data as TutorResponse;
    return data;
  };

  return useMutation(newResponse, {
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries('upcomingLessons');
      queryClient.invalidateQueries('lessonRequests');
      queryClient.invalidateQueries(`lesson${lessonId}`);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
