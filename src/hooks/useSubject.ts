import { useQuery } from 'react-query';
import axios from 'axios';
import { Subject } from '@types';

export const useSubject = (id: number) => {
  const getSubject = async (): Promise<Subject[]> => {
    const response = await axios.get(
      `http://localhost:8000/api/subjects/${id}`
    );
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
