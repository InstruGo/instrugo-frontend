import React from 'react';
import { StyledButton } from './styles';

type StitchesComponentProps = React.ComponentPropsWithoutRef<
  typeof StyledButton
>;

export const Button = (props: StitchesComponentProps) => {
  return (
    <StyledButton
      onClick={props.onClick}
      type={props.type}
      spacing={props.spacing}
      style={props.style}
    >
      {props.children}
    </StyledButton>
  );
};
