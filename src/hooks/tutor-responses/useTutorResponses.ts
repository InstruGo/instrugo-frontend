import { useQuery } from 'react-query';

import { useAxios } from '@hooks';
import { TutorResponse } from '@types';

export const useTutorResponses = () => {
  const axios = useAxios();

  const getResponses = async (): Promise<TutorResponse[]> => {
    const response = await axios.get(`/tutor-responses`);

    return response.data as TutorResponse[];
  };

  return useQuery([`tutorResponses`], () => getResponses(), {
    onSuccess: () => {},
    onError: (error) => {
      console.log(error);
    },
    staleTime: Infinity,
  });
};
