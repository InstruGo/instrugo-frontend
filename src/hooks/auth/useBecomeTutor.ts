import { useMutation } from 'react-query';

import { useAxios, useUserContext } from '@hooks';
import { User } from '@types';

export const useBecomeTutor = () => {
  const axios = useAxios();
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
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
