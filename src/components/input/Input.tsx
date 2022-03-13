import React, { Fragment } from 'react';
import { useIntl } from 'react-intl';

import { StyledInput } from './styles';

type StitchesComponentProps = React.ComponentPropsWithoutRef<
  typeof StyledInput
>;

interface InputProps extends StitchesComponentProps {
  name: string;
  register: any;
  errors: any;
  placeholderMsgId?: string;
  defaultValueMsgId?: string;
}

export const Input = ({
  name,
  register,
  errors,
  placeholderMsgId,
  defaultValueMsgId,
  ...rest
}: InputProps) => {
  const intl = useIntl();

  return (
    <Fragment>
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
        {...register(name)}
      />

      {errors && <span>{errors.message}</span>}
    </Fragment>
  );
};
