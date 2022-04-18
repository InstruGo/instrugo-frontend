import { useRouter } from 'next/router';

import { useMutation } from 'react-query';

import type { RegisterFormInputs } from '@types';

import { useAxios } from './useAxios';

export const useRegister = () => {
  const router = useRouter();
  const axios = useAxios();

  const register = async (input: RegisterFormInputs): Promise<void> => {
    await axios.post('/auth/register', input);
  };

  return useMutation(register, {
    onSuccess: () => {
      router.push('/login');
    },
    onError: () => {},
  });
};
