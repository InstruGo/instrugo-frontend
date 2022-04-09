import { useRouter } from 'next/router';

import axios from 'axios';
import { useMutation } from 'react-query';

import { useUserContext } from '@hooks';
import type { LoginFormInputs, LoginResponse } from '@types';

export const useLogin = () => {
  const router = useRouter();
  const { setAccessToken } = useUserContext();

  const login = async (input: LoginFormInputs): Promise<LoginResponse> => {
    const response = await axios.post(
      'http://localhost:3000/api/auth/login',
      input
    );

    const data = response.data as LoginResponse;
    return data;
  };

  return useMutation(login, {
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.accessToken);
      setAccessToken(data.accessToken);
      router.push('/student/home');
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
