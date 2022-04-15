import { useRouter } from 'next/router';

import { useUserContext } from '@hooks';

export const useLogout = () => {
  const { setUser } = useUserContext();
  const router = useRouter();

  const logout = () => {
    setUser(null);
    router.push('/login');
  };

  return logout;
};
