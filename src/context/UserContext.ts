import React, { useMemo, useState } from 'react';
import { OptionalUser } from '@types';
import { createContext } from 'react';

interface UserContextType {
  user: OptionalUser;
  setUser: React.Dispatch<React.SetStateAction<OptionalUser>>;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => null,
});

export const UserContextProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const [user, setUser] = useState<OptionalUser>(null);
  const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);

  return React.createElement(
    UserContext.Provider,
    { value: providerUser },
    children
  );
};
