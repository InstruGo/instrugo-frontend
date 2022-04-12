import { useQuery } from 'react-query';
import { useAxios, useUserContext } from '@hooks';
import { Lesson } from '@types';

export const useUpcomingLessons = () => {
  const { user, accessToken } = useUserContext();
  const axios = useAxios();

  const getUpcomingLessons = async (): Promise<Lesson[]> => {
    const response = await axios.get(`http://localhost:3000/api/lessons`, {
      headers: { Authorization: `Bearer ${accessToken}` },
      params: {
        status: 'Pending',
      },
    });

    return response.data;
  };

  return useQuery('upcomingLessons', getUpcomingLessons, {
    onSuccess: () => {},
    onError: (error) => {
      console.log(error);
    },
    staleTime: Infinity,
    enabled: !!user,
  });
};
