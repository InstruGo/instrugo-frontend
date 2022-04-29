import { useMutation, useQueryClient } from 'react-query';

import { useAxios, useUserContext } from '@hooks';
import { UserRole } from '@types';

export const useBecomeTutor = () => {
  const { user, setUser } = useUserContext();
  const axios = useAxios();
  const queryClient = useQueryClient();
  const becomeTutor = async (): Promise<void> => {
    const result = await axios.post('/auth/become-a-tutor');
  };

  return useMutation(becomeTutor, {
    onSuccess: () => {
      queryClient.invalidateQueries('profile');
      if (user) {
        user.role = UserRole.TUTOR;
        setUser(user);
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
