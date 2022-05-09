import { useRouter } from 'next/router';

import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import { useMutation } from 'react-query';

import { useAxios } from '@hooks';
import type { LoginResponse } from '@types';

import { useUserContext } from './useUserContext';

export const useGoogleLogin = () => {
  const axios = useAxios();
  const router = useRouter();
  const { setIsLoggedIn } = useUserContext();

  const loginWithGoogle = async (token: string): Promise<LoginResponse> => {
    const response = await axios.post('/auth/login/google', { token });

    const data = response.data as LoginResponse;
    return data;
  };

  const googleLogin = useMutation(loginWithGoogle, {
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

  const onGoogleResponse = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    if ('accessToken' in response) {
      googleLogin.mutate(response.accessToken);
    }
  };

  const onGoogleFailure = (error: any) => {
    console.log(error);
  };

  return {
    onGoogleResponse,
    onGoogleFailure,
  };
};
