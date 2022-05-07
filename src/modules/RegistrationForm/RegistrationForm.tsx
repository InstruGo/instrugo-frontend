import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import Select from 'react-select';

import { CustomLink, Input, Loader } from '@components';
import { useRegister, useSubjects } from '@hooks';
import { SubjectSelectOption } from '@types';

import {
  RegisterFormInputs,
  registerFormSchema,
} from '../../types/register.type';
import { SubjectsLabel, selectStyles } from './styles';
import {
  AlreadyHaveAccount,
  LabeledCheckbox,
  RegistrationFormContainer,
  SubjectsInput,
} from './styles';

export const RegistrationForm = () => {
  const intl = useIntl();
  const registerUser = useRegister();
  const { data, isLoading } = useSubjects();

  const subjectSelectOptions = data?.map((subject) => ({
    value: subject.id,
    label: intl.formatMessage({ id: `subjects.${subject.name}` }),
  }));

  const {
    register,
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerFormSchema),
  });

  const watchIsTutor = watch('isTutor');

  const onSubmit = (data: RegisterFormInputs) => {
    if (data.phone === '') {
      delete data.phone;
    }

    registerUser.mutate(data);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
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
            <FormattedMessage id={'registration.tutor'} />
          </label>
          <input type="checkbox" {...register('isTutor')} />
        </LabeledCheckbox>

        {watchIsTutor && (
          <SubjectsInput>
            <SubjectsLabel>
              <FormattedMessage id="registration.subjects" />:
            </SubjectsLabel>

            <Controller
              control={control}
              defaultValue={[]}
              name="subjectIds"
              render={({ field }) => (
                <Select
                  isMulti
                  defaultValue={[] as SubjectSelectOption[]}
                  ref={field.ref}
                  options={subjectSelectOptions}
                  styles={selectStyles}
                  onChange={(values) =>
                    field.onChange(values.map((value) => value.value))
                  }
                />
              )}
            ></Controller>
          </SubjectsInput>
        )}

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

        <AlreadyHaveAccount>
          <FormattedMessage id="registration.alreadyHaveAnAccount" />
          <CustomLink href="/login">
            <FormattedMessage id="button.login" />
          </CustomLink>
        </AlreadyHaveAccount>
      </RegistrationFormContainer>
    </>
  );
};
