import { useQuery } from 'react-query';

import { Subject } from '@types';

import { useAxios } from './useAxios';

export const useSubjects = () => {
  const axios = useAxios();

  const getSubjects = async (): Promise<Subject[]> => {
<<<<<<< HEAD
    const response = await axios.get(`/subjects`);

=======
    const response = await axios.get(`http://localhost:8000/api/subjects`);
>>>>>>> resolve lesson and cancel lesson hooks
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
