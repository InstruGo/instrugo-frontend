import { useRouter } from 'next/router';

import { useMutation } from 'react-query';

import type { NewStudentRatingInputs, Rating } from '@types';

import { useAxios } from './useAxios';

export const useRating = (id: number) => {
  const router = useRouter();
  const axios = useAxios();

  const rate = async (input: NewStudentRatingInputs): Promise<Rating> => {
    const response = await axios.post(`/ratings/rate/${id}`, input);
    return response.data as Rating;
  };

  return useMutation(rate, {
    onSuccess: () => {},
    onError: (error) => {
      console.log(error);
    },
  });
};
