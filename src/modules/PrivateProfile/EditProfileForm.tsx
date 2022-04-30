import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Input } from '@components';
import { useUpdateProfile } from '@hooks';
import {
  OptionalUser,
  ProfileUpdateFormInputs,
  profileUpdateFormSchema,
} from '@types';

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
  const registerUser = useUpdateProfile();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileUpdateFormInputs>({
    resolver: zodResolver(profileUpdateFormSchema),
  });

  const onSubmit = (data: ProfileUpdateFormInputs) => registerUser.mutate(data);

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
          placeholderMsgId={user?.firstName}
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
          placeholderMsgId={user?.lastName}
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
          placeholderMsgId={user?.phone || 'user.phone'}
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
          placeholderMsgId={
            birthDate?.toLocaleDateString('hr') || 'user.birthDate'
          }
          onClick={function (e) {
            e.currentTarget.type = 'date';
          }}
          register={register}
          errors={errors.birthDate}
        />
      </InputContainer>

      <div style={{ fontWeight: 'bold' }}>
        <FormattedMessage id="user.description" />
        <Description
          name="description"
          placeholder={user?.description || 'user.description'}
        />
      </div>

      <InputContainer>
        <div>
          <FormattedMessage id="user.educationLevel" />:
        </div>
        <Input
          name="educationLevel"
          placeholderMsgId={
            `user.${user?.educationLevel}` || 'user.educationLevel'
          }
          register={register}
          errors={errors.educationLevel}
        />
      </InputContainer>

      <InputContainer>
        <div>
          <FormattedMessage id="user.grade" />:
        </div>
        <Input
          name="grade"
          type="number"
          placeholderMsgId={`${user?.grade}` || 'user.grade'}
          register={register}
          errors={errors.grade}
        />
      </InputContainer>

      <Input
        type="submit"
        placeholderMsgId="profile.saveChanges"
        style={{ marginTop: '50px' }}
      />
    </EditFormContainer>
  );
};
