import axios from 'axios';
import { useMutation } from 'react-query';

import type { LoginFormInputs } from '@types';
import { User } from '@types';

export const useLogin = () => {
  const login = async (input: LoginFormInputs): Promise<User | null> => {
    const { data } = await axios.post(
      'http://localhost:3000/api/auth/login',
      input
    );

    return data;
  };

  return useMutation(login, {
    onSuccess: (data) => {
      console.log('Successful login!');
      console.log(data);
    },
    onError: (error) => {
      console.log('Error during login!');
      console.log(error);
    },
  });
};
