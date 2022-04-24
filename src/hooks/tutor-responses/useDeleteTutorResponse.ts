import { useMutation, useQueryClient } from 'react-query';

import { useAxios } from '@hooks';

export const useDeleteTutorResponse = (
  responseId: number,
  lessonId: number
) => {
  const axios = useAxios();
  const queryClient = useQueryClient();

  const deleteResponse = async (responseId: number): Promise<void> => {
    await axios.delete(`/tutor-responses/${responseId}`);
  };

  return useMutation(deleteResponse, {
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
