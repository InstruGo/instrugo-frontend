import { useMutation } from 'react-query';

import { useAxios, useUserContext } from '@hooks';
import type { ProfileUpdateFormInputs, User } from '@types';

export const useUpdateProfile = (onSuccess?: (editing: boolean) => void) => {
  const axios = useAxios();
  const { setUser } = useUserContext();

  const updateProfile = async (
    input: ProfileUpdateFormInputs
  ): Promise<User> => {
    const response = await axios.patch('/auth/profile', input);

    return response.data as User;
  };

  return useMutation(updateProfile, {
    onSuccess: (data) => {
      setUser(data);
      onSuccess?.(false);
    },
    onError: () => {},
  });
};
