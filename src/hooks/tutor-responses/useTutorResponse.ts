import { useQuery } from 'react-query';

import { useAxios } from '@hooks';
import { TutorResponse } from '@types';

export const useTutorResponse = (responseId: number) => {
  const axios = useAxios();

  const getResponse = async (responseId: number): Promise<TutorResponse> => {
    const response = await axios.get(`/tutor-responses/${responseId}`);

    return response.data as TutorResponse;
  };

  return useQuery(
    [`tutorResponse`, responseId],
    () => getResponse(responseId),
    {
      onSuccess: () => {},
      onError: (error) => {
        console.log(error);
      },
      staleTime: Infinity,
    }
  );
};
