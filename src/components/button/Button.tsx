import React from 'react';
import { StyledButton } from './styles';

type StitchesComponentProps = React.ComponentProps<typeof StyledButton>;

interface ButtonProps extends StitchesComponentProps {
  text: string;
}

export const Button = ({ text, ...rest }: ButtonProps) => {
  return <StyledButton {...rest}>{text}</StyledButton>;
};
