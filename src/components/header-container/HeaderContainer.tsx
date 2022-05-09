import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';

import { CustomLink } from '@components';
import { useUserContext } from '@hooks';
import { UserRole } from '@types';

import {
  ChildrenContainer,
  LogoContainer,
  StyledHeaderContainer,
  HomeContainer,
} from './styles';

type StitchesComponentProps = React.ComponentPropsWithoutRef<
  typeof StyledHeaderContainer
>;

export const HeaderContainer = ({
  children,
  ...rest
}: React.PropsWithChildren<StitchesComponentProps>) => {
  const { user } = useUserContext();
  const router = useRouter();

  const homeRoute = user
    ? user.role === UserRole.STUDENT
      ? '/student/home'
      : router.pathname.startsWith('/student')
      ? '/student/home'
      : '/tutor/home'
    : '/';

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

      {!user && (
        <HomeContainer>
          <CustomLink href="/">
            <AiOutlineHome
              style={{ color: 'white', height: '100%', width: '100%' }}
            />
          </CustomLink>
        </HomeContainer>
      )}
    </StyledHeaderContainer>
  );
};
