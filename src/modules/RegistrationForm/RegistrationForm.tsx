import { Button, Input } from '@components';
import { FormattedMessage, useIntl } from 'react-intl';
import * as S from './styles';

export const RegistrationForm = () => {
  const intl = useIntl();

  return (
    <>
      <S.RegistrationText>
        <FormattedMessage id="registration.description" />
      </S.RegistrationText>
      <S.RegistrationFormContainer>
        <Input
          type="auth"
          placeholderMsgId="user.firstName"
          required
          css={S.InputStyles}
        />

        <Input
          type="auth"
          placeholderMsgId="user.lastName"
          required
          css={S.InputStyles}
        />

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

        <Input
          type="auth"
          placeholderMsgId="confirmPassword"
          required
          css={S.InputStyles}
        />

        <Input type="auth" placeholderMsgId="user.phone" css={S.InputStyles} />

        <S.LabeledCheckbox>
          <label style={{ marginLeft: '10px' }}>
            <FormattedMessage id={'registration.terms'} />
          </label>
          <input type="checkbox" required />
        </S.LabeledCheckbox>

        <Button
          text={intl.formatMessage({ id: 'button.register' })}
          css={S.RegisterButton}
        />
      </S.RegistrationFormContainer>
    </>
  );
};
