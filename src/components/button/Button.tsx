import React from 'react';

import { StyledButton } from './styles';

type StitchesComponentProps = React.ComponentProps<typeof StyledButton>;

export const Button = ({
  children,
  ...rest
}: React.PropsWithChildren<StitchesComponentProps>) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};
