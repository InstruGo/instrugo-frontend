import { useMutation, useQueryClient } from 'react-query';

import { useAxios } from '@hooks';

export const useDeleteRequest = (lessonId: number) => {
  const axios = useAxios();
  const queryClient = useQueryClient();

  const deleteRequest = async (lessonId: number): Promise<void> => {
    await axios.delete(`/lessons/${lessonId}`);
  };

  return useMutation(deleteRequest, {
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
