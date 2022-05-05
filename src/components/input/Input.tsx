import React, { useState, useEffect } from 'react';

import { useIntl } from 'react-intl';

import { ErrorsContainer, InputContainer, StyledInput } from './styles';

type StitchesComponentProps = React.ComponentPropsWithoutRef<
  typeof StyledInput
>;

interface InputProps extends StitchesComponentProps {
  name?: string;
  register?: any;
  errors?: any;
  placeholderMsgId?: string;
  defaultValueMsgId?: string;
  isNumber?: boolean;
}

export const Input = ({
  name,
  register,
  errors,
  placeholderMsgId,
  defaultValueMsgId,
  isNumber,
  ...rest
}: InputProps) => {
  const intl = useIntl();

  return (
    <InputContainer>
      <StyledInput
        placeholder={
          placeholderMsgId
            ? intl.formatMessage({ id: placeholderMsgId })
            : undefined
        }
        defaultValue={
          defaultValueMsgId
            ? intl.formatMessage({ id: defaultValueMsgId })
            : undefined
        }
        value={
          placeholderMsgId && rest.type === 'submit'
            ? intl.formatMessage({ id: placeholderMsgId })
            : undefined
        }
        {...(register && name && register(name, { valueAsNumber: isNumber }))}
        {...rest}
      />
      {errors && (
        <ErrorsContainer>
          <span>{errors.message}</span>
        </ErrorsContainer>
      )}
    </InputContainer>
  );
};
