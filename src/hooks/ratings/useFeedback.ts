import { useMutation, useQueryClient } from 'react-query';

import { useAxios } from '@hooks';
import type { NewTutorFeedbackInputs, Rating } from '@types';

export const useFeedback = (id: number) => {
  const axios = useAxios();
  const queryClient = useQueryClient();

  const rate = async (input: NewTutorFeedbackInputs): Promise<Rating> => {
    const response = await axios.patch(`/ratings/feedback/${id}`, input);
    return response.data as Rating;
  };

  return useMutation(rate, {
    onSuccess: () => {
      queryClient.invalidateQueries(`lesson${id}`);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
