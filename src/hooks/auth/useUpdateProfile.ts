import { useMutation, useQueryClient } from 'react-query';

import type { ProfileUpdateFormInputs, User } from '@types';

import { useAxios } from '@hooks';

export const useUpdateProfile = () => {
  const axios = useAxios();
  const queryClient = useQueryClient();
  const updateProfile = async (
    input: ProfileUpdateFormInputs
  ): Promise<User> => {
    const response = await axios.patch('/auth/profile', input);

    return response.data as User;
  };

  return useMutation(updateProfile, {
    onSuccess: () => {
      queryClient.invalidateQueries('profile');
    },
    onError: () => {},
  });
};
