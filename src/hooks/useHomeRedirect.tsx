import { useRouter } from 'next/router';

import { useUserContext } from './useUserContext';

export const useHomeRedirect = () => {
  const { user } = useUserContext();
  const router = useRouter();

  const redirect = () => {
    switch (user?.role) {
      case 'student':
        router.push('/student/home', '/student/home', {
          locale: router.locale,
        });
        break;
      case 'tutor':
        router.push('/tutor/home', '/tutor/home', { locale: router.locale });
        break;
      default:
        break;
    }
  };

  return redirect;
};
