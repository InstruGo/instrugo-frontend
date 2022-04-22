import { useRouter } from 'next/router';

import { useMutation } from 'react-query';

import type { newTutorFeedbackInputs, Rating } from '@types';

import { useAxios } from './useAxios';

export const useFeedback = (id: number) => {
  const router = useRouter();
  const axios = useAxios();

  const rate = async (input: newTutorFeedbackInputs): Promise<Rating> => {
    const response = await axios.post(`/ratings/feedback/${id}`, input);
    return response.data as Rating;
  };

  return useMutation(rate, {
    onSuccess: () => {},
    onError: (error) => {
      console.log(error);
    },
  });
};
