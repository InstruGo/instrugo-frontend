import { StyledInput } from './styles';

import { useIntl } from 'react-intl';
import React, { InputHTMLAttributes } from 'react';

type StitchesComponentProps = React.ComponentPropsWithoutRef<
  typeof StyledInput
>;

interface InputProps extends StitchesComponentProps {
  placeholderMsgId?: string;
  defaultValueMsgId?: string;
}

export const Input = ({
  placeholderMsgId,
  defaultValueMsgId,
  ...rest
}: InputProps) => {
  const intl = useIntl();

  return (
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
      {...rest}
    />
  );
};
