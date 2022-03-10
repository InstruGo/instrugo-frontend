import { FormattedMessage, useIntl } from 'react-intl';
import { Button } from '../../components/Button';
import * as S from './styles';

export const RegistrationForm = () => {
  const intl = useIntl();

  return (
    <div>
      <S.RegistrationContainer>
        <S.LabeledInput>
          <S.StyledLabel>
            <FormattedMessage id="user.firstName" />
          </S.StyledLabel>
          <S.StyledInput />
        </S.LabeledInput>

        <S.LabeledInput>
          <S.StyledLabel>
            <FormattedMessage id="user.lastName" />
          </S.StyledLabel>
          <S.StyledInput />
        </S.LabeledInput>

        <S.LabeledInput>
          <S.StyledLabel>
            <FormattedMessage id="user.email" />
          </S.StyledLabel>
          <S.StyledInput />
        </S.LabeledInput>

        <S.LabeledInput>
          <S.StyledLabel>
            <FormattedMessage id="user.password" />
          </S.StyledLabel>
          <S.StyledInput type="password" />
        </S.LabeledInput>

        <S.LabeledInput>
          <S.StyledLabel>
            <FormattedMessage id="registration.confirmPassword" />
          </S.StyledLabel>
          <S.StyledInput type="password" />
        </S.LabeledInput>

        <S.LabeledInput>
          <S.StyledLabel>
            <FormattedMessage id="user.phone" />
          </S.StyledLabel>
          <S.StyledInput />
        </S.LabeledInput>

        <S.LabeledInput
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'center',
            marginTop: '50px',
          }}
        >
          <label style={{ marginLeft: '10px' }}>
            <FormattedMessage id={'registration.terms'} />
          </label>
          <input type="checkbox" />
        </S.LabeledInput>

        <Button
          text={intl.formatMessage({ id: 'button.register' })}
          style={S.RegisterButton}
        />
      </S.RegistrationContainer>
    </div>
  );
};
