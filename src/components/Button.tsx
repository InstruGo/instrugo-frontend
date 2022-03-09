import React from 'react';
import { StyledButton } from './styles';
import type * as Stitches from '@stitches/react';

interface ButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
}

type StyledButtonProps = Stitches.VariantProps<typeof StyledButton>;

export const Button = (props: ButtonProps & StyledButtonProps) => {
  return (
    <StyledButton
      onClick={props.onClick}
      type={props.type}
      spacing={props.spacing}
      style={props.style}
    >
      {props.text}
    </StyledButton>
  );
};
