import { useRouter } from 'next/router';

import { useMutation, useQueryClient } from 'react-query';

import { useUserContext } from '@hooks';

import { useAxios } from './useAxios';

export const useLogout = () => {
  const { setUser } = useUserContext();
  const router = useRouter();
  const axios = useAxios();
  const queryClient = useQueryClient();

  const logout = async () => {
    const data = axios.post('/auth/logout');

    return data;
  };

  return useMutation(logout, {
    onSuccess: () => {
      setUser(null);
      queryClient.invalidateQueries('profile');
      router.push('/login');
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
