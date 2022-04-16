import { useMutation, useQueryClient } from 'react-query';

import type { NewRequestFormInputs, Lesson } from '@types';

import { useAxios } from './useAxios';

export const useNewRequest = () => {
  const queryClient = useQueryClient();
  const axios = useAxios();

  const newRequest = async (input: NewRequestFormInputs): Promise<Lesson> => {
    const response = await axios.post('/lessons', input);

    const data = response.data as Lesson;
    return data;
  };

  return useMutation(newRequest, {
    onSuccess: (data) => {
      queryClient.invalidateQueries('upcomingLessons');
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
