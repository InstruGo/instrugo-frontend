import { useQuery } from 'react-query';
import { useAxios } from '@hooks';
import { Lesson } from '@types';
import { useUserContext } from './useUserContext';

export const usePublicRequests = () => {
  const axios = useAxios();
  const { accessToken } = useUserContext();
  const getPublicRequests = async (): Promise<Lesson[]> => {
    const response = await axios.get(`http://localhost:3000/api/lessons`, {
      headers: { Authorization: `Bearer ${accessToken}` },
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
