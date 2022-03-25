import axios from 'axios';
import { useMutation } from 'react-query';

import type { RegisterFormInputs } from '@types';

export const useRegister = () => {
  const register = async (input: RegisterFormInputs): Promise<void> => {
    await axios.post('http://localhost:3000/api/auth/register', input);
  };

  return useMutation(register, {
    onSuccess: (data) => {},
    onError: (error) => {},
  });
};
