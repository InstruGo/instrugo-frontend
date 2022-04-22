import { useQuery } from 'react-query';

import { useAxios, useUserContext } from '@hooks';
import { Lesson } from '@types';

export const useLessonRequests = () => {
  const { user } = useUserContext();
  const axios = useAxios();

  const getLessonRequests = async (): Promise<Lesson[]> => {
    const response = await axios.get(`/lessons`, {
      params: {
        status: 'Requested',
      },
    });

    return response.data;
  };

  return useQuery(`lessonRequests`, getLessonRequests, {
    onSuccess: () => {},
    onError: (error) => {
      console.log(error);
    },
    staleTime: Infinity,
    enabled: !!user,
  });
};
