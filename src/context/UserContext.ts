import React, { useMemo, useState, createContext } from 'react';

import { OptionalUser } from '@types';

type OptionalString = string | null;

interface UserContextType {
  accessToken: OptionalString;
  setAccessToken: React.Dispatch<React.SetStateAction<OptionalString>>;
  refreshToken: OptionalString;
  setRefreshToken: React.Dispatch<React.SetStateAction<OptionalString>>;
  user: OptionalUser;
  setUser: React.Dispatch<React.SetStateAction<OptionalUser>>;
}

export const UserContext = createContext<UserContextType>({
  accessToken: null,
  setAccessToken: () => null,
  refreshToken: null,
  setRefreshToken: () => null,
  user: null,
  setUser: () => null,
});

export const UserContextProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const [accessToken, setAccessToken] = useState<OptionalString>(null);
  const [refreshToken, setRefreshToken] = useState<OptionalString>(null);
  const [user, setUser] = useState<OptionalUser>(null);

  const providerUser = useMemo(
    () => ({
      accessToken,
      setAccessToken,
      refreshToken,
      setRefreshToken,
      user,
      setUser,
    }),
    [accessToken, setAccessToken, refreshToken, setRefreshToken, user, setUser]
  );

  return React.createElement(
    UserContext.Provider,
    { value: providerUser },
    children
  );
};
