import { FormattedMessage, useIntl } from 'react-intl';
import { Button } from '../../components/Button';
import * as S from './styles';

export const LoginForm = () => {
  const intl = useIntl();

  return (
    <S.LoginFormContainer>
      <S.StyledInput placeholder={intl.formatMessage({ id: 'user.email' })} />

      <S.StyledInput
        placeholder={intl.formatMessage({ id: 'user.password' })}
      />

      <S.LinkRef href="url">Forgot password?</S.LinkRef>

      <Button
        text={intl.formatMessage({ id: 'button.login' })}
        style={S.LoginButton}
      />
      <S.LinkRef href="url">Register</S.LinkRef>
    </S.LoginFormContainer>
  );
};
