import { useRouter } from 'next/router';
import { useUserContext } from '@hooks';

export const useLogout = () => {
  const { setUser, setAccessToken, setRefreshToken } = useUserContext();
  const router = useRouter();

  const logout = () => {
    setUser(null);
    setAccessToken(null);
    setRefreshToken(null);

    router.push('/');
  };

  return logout;
};
