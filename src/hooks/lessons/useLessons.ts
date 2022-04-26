import { useQuery } from 'react-query';

import { useAxios } from '@hooks';
import { Lesson, LessonFilter } from '@types';

export const useLessons = (filter: LessonFilter) => {
  const axios = useAxios();

  const getLessons = async (filter: LessonFilter): Promise<Lesson[]> => {
    const response = await axios.get(`/lessons`, {
      params: filter,
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
