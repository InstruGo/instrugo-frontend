import Image from 'next/image';
import React from 'react';
import {
  ChildrenContainer,
  LogoContainer,
  StyledHeaderContainer,
} from './styles';

type StitchesComponentProps = React.ComponentPropsWithoutRef<
  typeof StyledHeaderContainer
>;

export const HeaderContainer = ({
  children,
  ...rest
}: React.PropsWithChildren<StitchesComponentProps>) => {
  return (
    <StyledHeaderContainer {...rest}>
      <LogoContainer>
        <Image
          src="/neural.png"
          width="50px"
          height="50px"
          alt="appLogo"
          layout="fixed"
        />
      </LogoContainer>
      <ChildrenContainer>{children}</ChildrenContainer>
    </StyledHeaderContainer>
  );
};
