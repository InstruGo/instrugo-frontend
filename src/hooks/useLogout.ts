import { useRouter } from 'next/router';

import { useMutation } from 'react-query';

import { useUserContext } from '@hooks';

import { useAxios } from './useAxios';

export const useLogout = () => {
  const { setUser } = useUserContext();
  const router = useRouter();
  const axios = useAxios();

  const logout = async () => {
    const data = axios.post('/auth/logout');

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
