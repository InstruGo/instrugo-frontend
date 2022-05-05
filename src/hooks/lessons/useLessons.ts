import { useRouter } from 'next/router';

import { useQuery } from 'react-query';

import { useAxios } from '@hooks';
import { Lesson, LessonFilter } from '@types';

export const useLessons = (filter: LessonFilter) => {
  const axios = useAxios();

  const router = useRouter();

  const getLessons = async (filter: LessonFilter): Promise<Lesson[]> => {
    const response = await axios.get(`/lessons`, {
      params: {
        ...filter,
        isLessonTutor: router.pathname.startsWith('/tutor') ? true : undefined,
      },
    });

    return response.data;
  };

  return useQuery([`lessons`, filter], () => getLessons(filter), {
    onSuccess: () => {},
    onError: (error) => {
      console.log(error);
    },
    staleTime: Infinity,
  });
};
