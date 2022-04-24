import { useRouter } from 'next/router';

import { useMutation } from 'react-query';

import type { LoginFormInputs, LoginResponse } from '@types';

import { useAxios } from '@hooks';

export const useLogin = () => {
  const router = useRouter();
  const axios = useAxios();

  const login = async (input: LoginFormInputs): Promise<LoginResponse> => {
    const response = await axios.post('/auth/login', input);

    const data = response.data as LoginResponse;
    return data;
  };

  return useMutation(login, {
    onSuccess: () => {
      let returnUrl = '/auth';
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
