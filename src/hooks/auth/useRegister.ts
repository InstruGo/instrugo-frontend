import { useRouter } from 'next/router';

import { useMutation } from 'react-query';

import { useAxios } from '@hooks';
import type { RegisterFormInputs } from '@types';

export const useRegister = () => {
  const router = useRouter();
  const axios = useAxios();

  const register = async (input: RegisterFormInputs): Promise<void> => {
    const response = await axios.post('/auth/register', input);

    if (!response) {
      throw new Error();
    }

    return response.data;
  };

  return useMutation(register, {
    onSuccess: () => {
      router.push('/login');
    },
    onError: () => {},
  });
};
