import { useRouter } from 'next/router';

import { useMutation } from 'react-query';

import { useAxios } from '@hooks';
import type { LoginResponse } from '@types';

import { useUserContext } from './useUserContext';

export const useGoogleLogin = () => {
  const axios = useAxios();
  const router = useRouter();
  const { setIsLoggedIn } = useUserContext();

  const googleLogin = async (token: string): Promise<LoginResponse> => {
    const response = await axios.post('/auth/login/google', { token });

    const data = response.data as LoginResponse;
    return data;
  };

  return useMutation(googleLogin, {
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
