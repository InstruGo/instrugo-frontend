import { useMutation, useQueryClient } from 'react-query';

import { useAxios } from '@hooks';

export const useBecomeTutor = () => {
  const axios = useAxios();
  const queryClient = useQueryClient();
  const becomeTutor = async (): Promise<void> => {
    await axios.post('/auth/become-a-tutor');
  };

  return useMutation(becomeTutor, {
    onSuccess: () => {
      queryClient.invalidateQueries('profile');
    },
    onError: () => {},
  });
};
