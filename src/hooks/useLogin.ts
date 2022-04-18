import { useRouter } from 'next/router';

import { useMutation } from 'react-query';

import type { LoginFormInputs, LoginResponse } from '@types';

import { useAxios } from './useAxios';

export const useLogin = () => {
  const router = useRouter();
  const axios = useAxios();

  const login = async (input: LoginFormInputs): Promise<LoginResponse> => {
<<<<<<< HEAD
    const response = await axios.post('/auth/login', input);
=======
    const response = await axios.post(
      'http://localhost:8000/api/auth/login',
      input
    );
>>>>>>> resolve lesson and cancel lesson hooks

    const data = response.data as LoginResponse;
    return data;
  };

  return useMutation(login, {
    onSuccess: () => {
      let returnUrl = '/';
      if (router.query.returnUrl) {
        returnUrl = router.query.returnUrl as string;
      }

      router.push(returnUrl);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
