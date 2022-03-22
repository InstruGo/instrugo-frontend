import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import axios from 'axios';

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
      setAccessToken(data.accessToken);
      router.push('/');
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
