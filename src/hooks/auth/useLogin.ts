import { useRouter } from 'next/router';

import { useMutation } from 'react-query';

import { useAxios } from '@hooks';
import type { LoginFormInputs, LoginResponse } from '@types';

import { useUserContext } from './useUserContext';

export const useLogin = () => {
  const axios = useAxios();
  const router = useRouter();
  const { setIsLoggedIn } = useUserContext();

  const login = async (input: LoginFormInputs): Promise<LoginResponse> => {
    const response = await axios.post('/auth/login', input);

    const data = response.data as LoginResponse;
    return data;
  };

  return useMutation(login, {
    onSuccess: () => {
      setIsLoggedIn(true);

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
