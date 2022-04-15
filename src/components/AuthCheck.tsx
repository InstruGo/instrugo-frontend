import { useProfile } from '../hooks/useProfile';

export const AuthCheck = ({ children }: React.PropsWithChildren<unknown>) => {
  const { isLoading } = useProfile();

  return <>{!isLoading && children}</>;
};
