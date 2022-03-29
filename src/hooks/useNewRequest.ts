import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

import type { NewRequestFormInputs, Lesson } from '@types';

export const useNewRequest = () => {
  const queryClient = useQueryClient();
  const newRequest = async (input: NewRequestFormInputs): Promise<Lesson> => {
    const response = await axios.post(
      'http://localhost:3000/api/lessons',
      input
    );
    const data = response.data as Lesson;
    return data;
  };

  return useMutation(newRequest, {
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries('upcomingLessons');
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
