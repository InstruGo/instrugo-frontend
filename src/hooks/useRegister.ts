import axios from 'axios';
import { useMutation } from 'react-query';

import type { RegisterFormInputs } from '@types';

export const useRegister = () => {
  const register = async (input: RegisterFormInputs) => {
    const { data } = await axios.post(
      'http://localhost:3000/api/auth/register',
      input
    );
  };

  return useMutation(register, {
    onSuccess: (data) => {
      console.log('Successful registration!');
      console.log(data);
    },
    onError: (error) => {
      console.log('Error during registration!');
      console.log(error);
    },
  });
};
