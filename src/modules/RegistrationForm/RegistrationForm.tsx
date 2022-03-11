import { Button, Input } from '@components';
import { FormattedMessage, useIntl } from 'react-intl';
import * as S from './styles';

export const RegistrationForm = () => {
  const intl = useIntl();

  return (
    <>
      <S.RegistrationText>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px 15px',
            boxSizing: 'border-box',
            width: '100%',
            background: 'linear-gradient(#fff, #eee)',
            color: 'rgb(47, 147, 160)',
            fontWeight: 'bold',
            fontSize: '24px',
            textAlign: 'center',
          }}
        >
          Register an account and join the community
        </div>
      </S.RegistrationText>
      <S.RegistrationFormContainer>
        <Input
          type="auth"
          placeholderMsgId="user.firstName"
          style={S.InputStyles}
        />

        <Input
          type="auth"
          placeholderMsgId="user.lastName"
          style={S.InputStyles}
        />

        <Input
          type="auth"
          placeholderMsgId="user.email"
          style={S.InputStyles}
        />

        <Input
          type="auth"
          placeholderMsgId="user.password"
          style={S.InputStyles}
        />

        <Input
          type="auth"
          placeholderMsgId="registration.confirmPassword"
          style={S.InputStyles}
        />

        <Input
          type="auth"
          placeholderMsgId="user.phone"
          style={S.InputStyles}
        />

        <S.LabeledCheckbox>
          <label style={{ marginLeft: '10px' }}>
            <FormattedMessage id={'registration.terms'} />
          </label>
          <input type="checkbox" />
        </S.LabeledCheckbox>

        <Button
          text={intl.formatMessage({ id: 'button.register' })}
          style={S.RegisterButton}
        />
      </S.RegistrationFormContainer>
    </>
  );
};
