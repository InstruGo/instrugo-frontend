import { useQuery } from 'react-query';
import { useAxios, useUserContext } from '@hooks';
import { Lesson } from '@types';

export const useLessonRequests = () => {
  const { user, accessToken } = useUserContext();
  const axios = useAxios();

  const getLessonRequests = async (): Promise<Lesson[]> => {
    const response = await axios.get(`http://localhost:8000/api/lessons`, {
      headers: { Authorization: `Bearer ${accessToken}` },
      params: {
        studentId: user?.id,
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
