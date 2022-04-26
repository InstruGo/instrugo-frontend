import { useMutation, useQueryClient } from 'react-query';

import type { UpdateTutorResponseFormInputs, TutorResponse } from '@types';

import { useAxios } from '@hooks';

export const useUpdateTutorResponse = (
  lessonId: number,
  responseId: number
) => {
  const axios = useAxios();
  const queryClient = useQueryClient();

  const updateResponse = async (
    input: UpdateTutorResponseFormInputs
  ): Promise<TutorResponse> => {
    const response = await axios.patch(
      `/tutor-responses/${lessonId}/respond`,
      input
    );
    const data = response.data as TutorResponse;
    return data;
  };

  return useMutation(updateResponse, {
    onSuccess: () => {
      queryClient.invalidateQueries('lessons');
      queryClient.invalidateQueries('tutorResponses');
      queryClient.invalidateQueries(['tutorResponse', responseId]);
      queryClient.invalidateQueries(`lesson${lessonId}`);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
