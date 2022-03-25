import React from 'react';
import { StyledButton } from './styles';

type StitchesComponentProps = React.ComponentProps<typeof StyledButton>;

interface ButtonProps extends StitchesComponentProps {
  children: React.ReactNode | React.ReactNode[];
}

export const Button = ({ children, css, ...rest }: ButtonProps) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};
