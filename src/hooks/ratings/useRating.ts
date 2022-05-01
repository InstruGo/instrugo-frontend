import { useMutation } from 'react-query';

import { useAxios } from '@hooks';
import type { NewStudentRatingInputs, Rating } from '@types';

export const useRating = (id: number) => {
  const axios = useAxios();

  const rate = async (input: NewStudentRatingInputs): Promise<Rating> => {
    const response = await axios.patch(`/ratings/rate/${id}`, input);
    return response.data as Rating;
  };

  return useMutation(rate, {
    onSuccess: () => {},
    onError: (error) => {
      console.log(error);
    },
  });
};
