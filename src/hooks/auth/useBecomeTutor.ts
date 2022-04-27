import { useMutation, useQueryClient } from 'react-query';

import { useAxios } from '@hooks';

export const useBecomeTutor = () => {
  const axios = useAxios();
  const queryClient = useQueryClient();
  const becomeTutor = async (): Promise<void> => {
    console.log('kita');
    const result = await axios.post('/auth/become-a-tutor');
    console.log('Proslo', result);
  };

  return useMutation(becomeTutor, {
    onSuccess: () => {
      // queryClient.invalidateQueries('profile');
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
