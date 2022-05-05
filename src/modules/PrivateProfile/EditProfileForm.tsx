import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Input } from '@components';
import { useUpdateProfile } from '@hooks';
import {
  OptionalUser,
  ProfileUpdateFormInputs,
  profileUpdateFormSchema,
} from '@types';

import { EducationLevel } from '../../types/user.types';
import { DropdownOption, Dropdown } from '../NewRequestForm/styles';
import {
  Description,
  EditFormContainer,
  FormTitle,
  InputContainer,
} from './styles';

interface EditProfileFormProps {
  user: OptionalUser;
  setEditing: (value: boolean) => void;
}

export const EditProfileForm = ({ user, setEditing }: EditProfileFormProps) => {
  const intl = useIntl();
  const updateProfile = useUpdateProfile(setEditing);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileUpdateFormInputs>({
    resolver: zodResolver(profileUpdateFormSchema),
  });

  const onSubmit = (data: ProfileUpdateFormInputs) => {
    updateProfile.mutate(data);
  };

  const birthDate = user?.birthDate ? new Date(user?.birthDate) : undefined;

  return (
    <EditFormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>
        <FormattedMessage id="user.edit" />
      </FormTitle>

      <InputContainer>
        <div>
          <FormattedMessage id="user.firstName" />:
        </div>
        <Input
          name="firstName"
          placeholderMsgId={intl.formatMessage({ id: 'user.firstName' })}
          defaultValue={user?.firstName}
          register={register}
          errors={errors.firstName}
        />
      </InputContainer>

      <InputContainer>
        <div>
          <FormattedMessage id="user.lastName" />:
        </div>
        <Input
          name="lastName"
          placeholderMsgId={intl.formatMessage({ id: 'user.lastName' })}
          defaultValue={user?.lastName}
          register={register}
          errors={errors.lastName}
        />
      </InputContainer>

      <InputContainer>
        <div>
          <FormattedMessage id="user.phone" />:
        </div>
        <Input
          name="phone"
          placeholderMsgId={'user.phone'}
          defaultValue={user?.phone}
          register={register}
          errors={errors.phone}
        />
      </InputContainer>

      <InputContainer>
        <div>
          <FormattedMessage id="user.birthDate" />:
        </div>
        <Input
          name="birthDate"
          placeholderMsgId={'user.birthDate'}
          defaultValue={birthDate?.toLocaleDateString('en-CA')}
          type="date"
          register={register}
          errors={errors.birthDate}
        />
      </InputContainer>

      <div style={{ fontWeight: 'bold' }}>
        <FormattedMessage id="user.description" />:
        <Description
          name="description"
          placeholder={intl.formatMessage({ id: 'user.description' })}
          defaultValue={user?.description}
        />
      </div>

      <div style={{ fontWeight: 'bold' }}>
        <FormattedMessage id="user.educationLevel" />:
      </div>
      <Dropdown
        defaultValue={user?.educationLevel}
        style={{ margin: '10px 0' }}
        {...register('educationLevel')}
      >
        <DropdownOption key={0} value=""></DropdownOption>

        {Object.values(EducationLevel).map((educationLevel, index) => (
          <DropdownOption key={index + 1} value={educationLevel}>
            {intl.formatMessage({ id: `educationLevel.${educationLevel}` })}
          </DropdownOption>
        ))}
      </Dropdown>

      <InputContainer>
        <div>
          <FormattedMessage id="user.grade" />:
        </div>

        <Input
          name="grade"
          type="number"
          placeholderMsgId={intl.formatMessage({ id: 'user.grade' })}
          defaultValue={user?.grade}
          register={register}
          errors={errors.grade}
          min={1}
        />
      </InputContainer>

      <Input
        type="submit"
        placeholderMsgId="profile.saveChanges"
        style={{ cursor: 'pointer' }}
      />
    </EditFormContainer>
  );
};
