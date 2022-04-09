import { useQuery } from 'react-query';
import { useAxios, useUserContext } from '@hooks';
import { Lesson } from '@types';

export const useUpcomingLessons = () => {
  const { user } = useUserContext();
  const axios = useAxios();

  const getUpcomingLessons = async (): Promise<Lesson[]> => {
    const response = await axios.get(`http://localhost:3000/api/lessons`, {
      params: {
        ownerId: user?.id,
        status: 'Lesson',
      },
    });

    return response.data;
  };

  return useQuery(`upcomingLessons`, getUpcomingLessons, {
    onSuccess: () => {},
    onError: (error) => {
      console.log(error);
    },
    staleTime: Infinity,
    enabled: !!user,
  });
};
