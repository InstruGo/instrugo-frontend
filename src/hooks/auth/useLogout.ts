import { useRouter } from 'next/router';

import { useMutation, useQueryClient } from 'react-query';

import { useUserContext, useAxios } from '@hooks';

export const useLogout = () => {
  const { setUser } = useUserContext();
  const router = useRouter();
  const axios = useAxios();
  const queryClient = useQueryClient();

  const logout = async () => {
    const data = await axios.post('/auth/logout');

    return data;
  };

  return useMutation(logout, {
    onSuccess: () => {
      setUser(null);
      router.push('/login');
    },
    onError: (error) => {
      console.log(error);
    },
  });
};