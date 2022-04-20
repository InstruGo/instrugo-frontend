import React, { Fragment } from 'react';

import { useIntl } from 'react-intl';

import { styled } from 'styles/stitches.config';

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
  style,
  ...rest
}: InputProps) => {
  const intl = useIntl();

  const [isErrorDismissed, dismissError] = React.useState(false);

  React.useEffect(() => {
    dismissError(false);
  }, [errors]);

  return (
    <InputContainer style={style}>
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
        onChange={() => dismissError(true)}
        {...rest}
      />
      {errors && (
        <ErrorsContainer>
          {!isErrorDismissed && <span>{errors.message}</span>}
        </ErrorsContainer>
      )}
    </InputContainer>
  );
};
