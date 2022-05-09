import { useMutation } from 'react-query';

import { useUserContext, useAxios } from '@hooks';

export const useLogout = () => {
  const axios = useAxios();
  const {
    setUser,
    setIsLoggedIn,
    isLoggedInWithGoogle,
    setIsLoggedInWithGoogle,
  } = useUserContext();

  const logout = async () => {
    const data = await axios.post('/auth/logout');

    return data;
  };

  return useMutation(logout, {
    onSuccess: async () => {
      setIsLoggedIn(false);

      if (isLoggedInWithGoogle) {
        setIsLoggedInWithGoogle(false);

        const gapi = await import('gapi-script').then((pack) => pack.gapi);
        const auth2 = gapi.auth2.getAuthInstance();

        if (auth2 != null) {
          auth2.signOut().then(auth2.disconnect());
        }
      }

      setUser(null);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
