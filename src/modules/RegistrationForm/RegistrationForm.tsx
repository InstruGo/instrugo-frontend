import { FormattedMessage, useIntl } from 'react-intl';
import { Button } from '../../components/Button';
import * as S from './styles';

export const RegistrationForm = () => {
  const intl = useIntl();

  return (
    <S.RegistrationFormContainer>
      <S.StyledInput
        placeholder={intl.formatMessage({ id: 'user.firstName' })}
      />

      <S.StyledInput
        placeholder={intl.formatMessage({ id: 'user.lastName' })}
      />

      <S.StyledInput placeholder={intl.formatMessage({ id: 'user.email' })} />

      <S.StyledInput
        type="password"
        placeholder={intl.formatMessage({ id: 'user.password' })}
      />

      <S.StyledInput
        type="password"
        placeholder={intl.formatMessage({
          id: 'registration.confirmPassword',
        })}
      />

      <S.StyledInput placeholder={intl.formatMessage({ id: 'user.phone' })} />

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
  );
};
