import { useRouter } from 'next/router';

import { useMutation, useQueryClient } from 'react-query';

import { useAxios, useUserContext } from '@hooks';
import { User } from '@types';

export const useBecomeTutor = () => {
  const queryClient = useQueryClient();
  const axios = useAxios();
  const router = useRouter();
  const { setUser } = useUserContext();

  const becomeTutor = async (): Promise<User> => {
    const response = await axios.post('/auth/become-a-tutor');

    if (!response || !response.data) {
      throw new Error();
    }

    return response.data as User;
  };

  return useMutation(becomeTutor, {
    onSuccess: (data) => {
      setUser(data);
      queryClient.removeQueries('lessons');
      router.push('/tutor/home');
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
