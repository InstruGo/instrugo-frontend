import { useMutation, useQueryClient } from 'react-query';

import { useAxios } from '@hooks';
import type { NewRequestFormInputs, Lesson } from '@types';

export const useNewRequest = () => {
  const axios = useAxios();
  const queryClient = useQueryClient();

  const newRequest = async (input: NewRequestFormInputs): Promise<Lesson> => {
    const response = await axios.post('/lessons', input);

    const data = response.data as Lesson;
    return data;
  };

  return useMutation(newRequest, {
    onSuccess: () => {
      queryClient.invalidateQueries('lessons');
      queryClient.invalidateQueries('publicRequests');
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
