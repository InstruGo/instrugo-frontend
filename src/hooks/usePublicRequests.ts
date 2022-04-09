import { useQuery } from 'react-query';
import { useAxios } from '@hooks';
import { Lesson } from '@types';

export const usePublicRequests = () => {
  const axios = useAxios();

  const getPublicRequests = async (): Promise<Lesson[]> => {
    const response = await axios.get(`http://localhost:3000/api/lessons`, {
      params: {
        status: 'Requested',
      },
    });

    return response.data;
  };

  return useQuery('publicRequests', getPublicRequests, {
    onSuccess: () => {},
    onError: (error) => {
      console.log(error);
    },
    staleTime: Infinity,
  });
};
