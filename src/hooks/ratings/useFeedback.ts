import { useMutation } from 'react-query';

import type { NewTutorFeedbackInputs, Rating } from '@types';

import { useAxios } from '@hooks';

export const useFeedback = (id: number) => {
  const axios = useAxios();

  const rate = async (input: NewTutorFeedbackInputs): Promise<Rating> => {
    const response = await axios.patch(`/ratings/feedback/${id}`, input);
    return response.data as Rating;
  };

  return useMutation(rate, {
    onSuccess: () => {},
    onError: (error) => {
      console.log(error);
    },
  });
};
