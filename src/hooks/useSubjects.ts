import { useQuery } from 'react-query';
import axios from 'axios';
import { Subject } from '@types';

export const useSubjects = () => {
  const getSubjects = async (): Promise<Subject[]> => {
    const response = await axios.get(`http://localhost:3000/api/subjects`);
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
