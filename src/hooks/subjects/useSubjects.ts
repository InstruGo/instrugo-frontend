import { useQuery } from 'react-query';

import { useAxios } from '@hooks';
import { Subject } from '@types';

export const useSubjects = () => {
  const axios = useAxios();

  const getSubjects = async (): Promise<Subject[]> => {
    const response = await axios.get(`/subjects`);

    return response.data;
  };

  return useQuery('subjects', getSubjects, {
    onSuccess: () => {},
    onError: (error) => {
      console.log(error);
    },
    staleTime: Infinity,
  });
};
