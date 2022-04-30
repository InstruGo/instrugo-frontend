import Image from 'next/image';
import React from 'react';

import { CustomLink } from '@components';
import { useUserContext } from '@hooks';

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
  const { user } = useUserContext();
  const homeRoute = user
    ? user.role === 'student'
      ? '/student/home'
      : '/tutor/home'
    : '';

  return (
    <StyledHeaderContainer {...rest}>
      <LogoContainer>
        <CustomLink href={homeRoute}>
          <Image
            src="/neural.png"
            width="50px"
            height="50px"
            alt="appLogo"
            layout="fixed"
          />
        </CustomLink>
      </LogoContainer>
      <ChildrenContainer>{children}</ChildrenContainer>
    </StyledHeaderContainer>
  );
};
