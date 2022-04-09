import { useQuery } from 'react-query';
import { useAxios, useUserContext } from '@hooks';
import { Lesson } from '@types';

export const useLessonRequests = () => {
  const { user } = useUserContext();
  const axios = useAxios();

  const getLessonRequests = async (): Promise<Lesson[]> => {
    const response = await axios.get(`http://localhost:3000/api/lessons`, {
      params: {
        studentId: user?.id,
        status: 'Request',
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
