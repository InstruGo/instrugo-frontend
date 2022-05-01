import { useQuery } from 'react-query';

import { useAxios } from '@hooks';
import { Subject } from '@types';

export const useSubject = (id: number) => {
  const axios = useAxios();

  const getSubject = async (): Promise<Subject[]> => {
    const response = await axios.get(`/subjects/${id}`);
    return response.data;
  };

  return useQuery(`subject${id}`, getSubject, {
    onSuccess: () => {},
    onError: (error) => {
      console.log(error);
    },
    staleTime: Infinity,
  });
};
