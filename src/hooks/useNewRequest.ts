import { useMutation, useQueryClient } from 'react-query';

import type { NewRequestFormInputs, Lesson } from '@types';
import { useAxios } from './useAxios';


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
      queryClient.invalidateQueries('upcomingLessons');
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
