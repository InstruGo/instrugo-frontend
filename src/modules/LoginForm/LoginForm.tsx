import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@components';
import { useLogin } from '@hooks';
import { LoginFormInputs, loginFormSchema } from '@types';

import { LoginFormContainer, LoginText } from './styles';

export const LoginForm = () => {
  const loginUser = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = (data: LoginFormInputs) => loginUser.mutate(data);

  return (
    <>
      <LoginText>
        <FormattedMessage id="login.description" />
      </LoginText>

      <LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
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
          type="submit"
          variant="authSubmit"
          placeholderMsgId="button.login"
        />
      </LoginFormContainer>
    </>
  );
};
