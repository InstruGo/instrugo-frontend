import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@components';
import { useRegister } from '../../hooks/useRegister';

import {
  LabeledCheckbox,
  RegistrationFormContainer,
  RegistrationText,
} from './styles';
import {
  RegisterFormInputs,
  registerFormSchema,
} from '../../types/register.type';

export const RegistrationForm = () => {
  const registerUser = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerFormSchema),
  });

  const onSubmit = (data: RegisterFormInputs) => registerUser.mutate(data);

  return (
    <>
      <RegistrationText>
        <FormattedMessage id="registration.description" />
      </RegistrationText>

      <RegistrationFormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="firstName"
          register={register}
          errors={errors.firstName}
          placeholderMsgId="user.firstName"
        />

        <Input
          name="lastName"
          register={register}
          errors={errors.lastName}
          placeholderMsgId="user.lastName"
        />

        <Input
          name="email"
          register={register}
          errors={errors.email}
          type="email"
          placeholderMsgId="user.email"
        />

        <Input
          name="password"
          register={register}
          errors={errors.password}
          type="password"
          placeholderMsgId="user.password"
        />

        <Input
          name="confirmPassword"
          register={register}
          errors={errors.confirmPassword}
          type="password"
          placeholderMsgId="confirmPassword"
        />

        <Input
          name="phone"
          register={register}
          errors={errors.phone}
          placeholderMsgId="user.phone"
        />

        <LabeledCheckbox>
          <label style={{ marginLeft: '10px' }}>
            <FormattedMessage id={'registration.terms'} />
          </label>
          <input type="checkbox" required />
        </LabeledCheckbox>

        <Input
          type="submit"
          variant="authSubmit"
          placeholderMsgId="button.register"
        />
      </RegistrationFormContainer>
    </>
  );
};
