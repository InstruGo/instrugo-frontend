import { FormattedMessage } from 'react-intl';

import { useLogout } from '@hooks';

import { NavLink } from './styles';

export const Logout = () => {
  const logout = useLogout();

  return (
    <NavLink onClick={() => logout.mutate()} style={{ margin: '20px 15px' }}>
      <FormattedMessage id={'nav.logout'} />
    </NavLink>
  );
};
