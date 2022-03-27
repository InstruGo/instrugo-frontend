import Link from 'next/link';
import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Input } from '@components';
import { Loader } from '@components/icons';
import { useLogin } from '@hooks';
import { LoginFormInputs, loginFormSchema } from '@types';

import {
  ForgotPassContainer,
  LoaderContainer,
  LoginFormContainer,
  NeedAnAccount,
} from './styles';

export const LoginForm = () => {
  const loginUser = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginFormSchema),
  });

  const [isAuthenticating, setAuthenticating] = React.useState(false);

  const onSubmit = (data: LoginFormInputs) => {
    setAuthenticating(true);
    loginUser.mutate(data);
  };

  return (
    <>
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

        <ForgotPassContainer>
          <Link href="/login">
            <a>
              <FormattedMessage id="login.forgotPassword" />
            </a>
          </Link>
        </ForgotPassContainer>

        <Input
          type="submit"
          variant="authSubmit"
          placeholderMsgId="button.login"
        />

        <NeedAnAccount>
          <FormattedMessage id="login.needAnAccount" />
          <Link href="/register">
            <a>
              <FormattedMessage id="button.register" />
            </a>
          </Link>
        </NeedAnAccount>

        <LoaderContainer>
          {isAuthenticating && (
            <Loader fill="#10434E" width="40px" height="40px" />
          )}
        </LoaderContainer>
      </LoginFormContainer>
    </>
  );
};
