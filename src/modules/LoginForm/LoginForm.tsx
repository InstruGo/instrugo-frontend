import Link from 'next/link';
import React, { SyntheticEvent } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { FormattedMessage } from 'react-intl';

import { CustomLink, Input } from '@components';
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

  const onSubmit = (data: LoginFormInputs) => {
    loginUser.mutate(data);
  };

  const handleKeyPress = (e: SyntheticEvent<HTMLInputElement>) => {
    console.log(e);
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
          onKeyPress={handleKeyPress}
        />

        <NeedAnAccount>
          <FormattedMessage id="login.needAnAccount" />
          <CustomLink href="/register">
            <FormattedMessage id="button.register" />
          </CustomLink>
        </NeedAnAccount>

        <LoaderContainer>
          {loginUser.isLoading && (
            <Loader fill="#10434E" width="40px" height="40px" />
          )}
          {loginUser.isSuccess && (
            <IoCheckmarkCircle fill="#23b067" size="40px" />
          )}
        </LoaderContainer>
      </LoginFormContainer>
    </>
  );
};
