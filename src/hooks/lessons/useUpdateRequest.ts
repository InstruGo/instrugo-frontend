import { useMutation, useQueryClient } from 'react-query';

import type { UpdateRequestFormInputs, Lesson } from '@types';

import { useAxios } from '@hooks';

export const useUpdateRequest = (requestId: number) => {
  const axios = useAxios();
  const queryClient = useQueryClient();

  const updateRequest = async (
    input: UpdateRequestFormInputs
  ): Promise<Lesson> => {
    const response = await axios.patch(`/lessons/${requestId}`, input);

    const data = response.data as Lesson;
    return data;
  };

  return useMutation(updateRequest, {
    onSuccess: () => {
      queryClient.invalidateQueries('lessons');
      queryClient.invalidateQueries('publicRequests');
      queryClient.invalidateQueries(`lesson${requestId}`);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
