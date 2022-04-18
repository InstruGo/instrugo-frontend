import { useRouter } from 'next/router';

import { useMutation } from 'react-query';

import type { RegisterFormInputs } from '@types';

import { useAxios } from './useAxios';

export const useRegister = () => {
  const router = useRouter();
  const axios = useAxios();

  const register = async (input: RegisterFormInputs): Promise<void> => {
<<<<<<< HEAD
    await axios.post('/auth/register', input);
=======
    await axios.post('http://localhost:8000/api/auth/register', input);
>>>>>>> resolve lesson and cancel lesson hooks
  };

  return useMutation(register, {
    onSuccess: () => {
      router.push('/login');
    },
    onError: () => {},
  });
};
