import { Button, Input } from '@components';
import { FormattedMessage, useIntl } from 'react-intl';
import Link from 'next/link';
import * as S from './styles';

export const LoginForm = () => {
  const intl = useIntl();

  return (
    <S.LoginFormContainer>
      <Input
        type="auth"
        placeholderMsgId="user.email"
        required
        css={S.InputStyles}
      />
      <Input
        type="auth"
        placeholderMsgId="user.password"
        required
        css={S.InputStyles}
      />

      <Link href="/">
        <S.LinkRef>
          <FormattedMessage id="login.forgotPassword" />
        </S.LinkRef>
      </Link>

      <Button
        text={intl.formatMessage({ id: 'button.login' })}
        css={S.LoginButton}
      />

      <Link href="/registration">
        <S.LinkRef>
          <FormattedMessage id="button.register" />
        </S.LinkRef>
      </Link>
    </S.LoginFormContainer>
  );
};
