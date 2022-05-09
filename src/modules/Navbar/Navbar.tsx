import { useRouter } from 'next/router';
import React, { useLayoutEffect, useRef, useState } from 'react';

import { BsPersonCircle } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiOutlineSwitchVertical } from 'react-icons/hi';
import { FormattedMessage } from 'react-intl';
import { useQueryClient } from 'react-query';

import { Button, CustomLink, HeaderContainer, Loader } from '@components';
import {
  useBecomeTutor,
  useLogout,
  useMenuAnimation,
  useUserContext,
} from '@hooks';
import { UserRole } from '@types';

import {
  Clickable,
  HamburgerMenu,
  NavLink,
  NavLinkDecorator,
  OpenedMenu,
  OpenedProfileMenu,
  ProfileLink,
  RightNavSection,
  StyledHeader,
  StyledNavbar,
} from './styles';

export const Navbar = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const logout = useLogout();
  const becomeTutor = useBecomeTutor();
  const { user } = useUserContext();

  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const [isProfileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const handleOpenNav = () => {
    setMenuOpen(!isMenuOpen);
    setProfileOpen(false);
  };

  const handleOpenProfile = () => {
    setProfileOpen(!isProfileOpen);
    setMenuOpen(false);
  };

  const { menuAnimation: navbarMenuAnimation } = useMenuAnimation();
  const { menuAnimation: profileMenuAnimation } = useMenuAnimation();

  useLayoutEffect(() => {
    navbarMenuAnimation(menuRef, isMenuOpen);
    profileMenuAnimation(profileRef, isProfileOpen);
  }, [isMenuOpen, isProfileOpen, navbarMenuAnimation, profileMenuAnimation]);

  const becomeATutor = () => {
    becomeTutor.mutate();
  };

  const handleSwitchAction = () => {
    if (user?.role === UserRole.STUDENT) {
      becomeATutor();
    } else {
      queryClient.removeQueries('lessons');

      if (router.pathname.startsWith('/student')) {
        router.push('/tutor/home');
      } else {
        router.push('/student/home');
      }
    }
  };

  const switchButtonMsgId =
    user?.role === UserRole.STUDENT
      ? 'nav.becomeATutor'
      : router.pathname.startsWith('/student')
      ? 'nav.switchToTutor'
      : 'nav.switchToStudent';

  const currentUrl = router.pathname;

  if (!user) {
    return <Loader />;
  }

  return (
    <HeaderContainer>
      <StyledHeader>
        {user.role === UserRole.STUDENT ||
        router.pathname.startsWith('/student') ? (
          <StyledNavbar>
            <NavLinkDecorator
              style={{
                backgroundColor:
                  currentUrl === '/student/home' ? '#06333c' : 'transparent',
              }}
            >
              <NavLink>
                <CustomLink href="/student/home">
                  <FormattedMessage id={'nav.home'} />
                </CustomLink>
              </NavLink>
            </NavLinkDecorator>

            <NavLinkDecorator
              style={{
                backgroundColor:
                  currentUrl === '/student/lessons' ? '#06333c' : 'transparent',
              }}
            >
              <NavLink>
                <CustomLink href="/student/lessons">
                  <FormattedMessage id={'nav.myLessons'} />
                </CustomLink>
              </NavLink>
            </NavLinkDecorator>

            <NavLinkDecorator
              style={{
                backgroundColor:
                  currentUrl === '/student/requests'
                    ? '#06333c'
                    : 'transparent',
              }}
            >
              <NavLink>
                <CustomLink href="/student/requests">
                  <FormattedMessage id={'nav.myRequests'} />
                </CustomLink>
              </NavLink>
            </NavLinkDecorator>
          </StyledNavbar>
        ) : (
          <StyledNavbar>
            <NavLinkDecorator
              style={{
                backgroundColor:
                  currentUrl === '/tutor/home' ? '#06333c' : 'transparent',
              }}
            >
              <NavLink>
                <CustomLink href="/tutor/home">
                  <FormattedMessage id={'nav.home'} />
                </CustomLink>
              </NavLink>
            </NavLinkDecorator>

            <NavLinkDecorator
              style={{
                backgroundColor:
                  currentUrl === '/tutor/lessons' ? '#06333c' : 'transparent',
              }}
            >
              <NavLink>
                <CustomLink href="/tutor/lessons">
                  <FormattedMessage id={'nav.myLessons'} />
                </CustomLink>
              </NavLink>
            </NavLinkDecorator>

            <NavLinkDecorator
              style={{
                backgroundColor:
                  currentUrl === '/tutor/requests' ? '#06333c' : 'transparent',
              }}
            >
              <NavLink>
                <CustomLink href="/tutor/requests">
                  <FormattedMessage id={'nav.publicRequests'} />
                </CustomLink>
              </NavLink>
            </NavLinkDecorator>

            <NavLinkDecorator
              style={{
                backgroundColor:
                  currentUrl === '/tutor/responses' ? '#06333c' : 'transparent',
              }}
            >
              <NavLink>
                <CustomLink href="/tutor/responses">
                  <FormattedMessage id={'nav.tutorResponses'} />
                </CustomLink>
              </NavLink>
            </NavLinkDecorator>
          </StyledNavbar>
        )}

        <HamburgerMenu>
          <Clickable onClick={handleOpenNav}>
            <GiHamburgerMenu color="white" size={'35px'} />
          </Clickable>

          {router.pathname.startsWith('/student') ? (
            <OpenedMenu ref={menuRef}>
              <NavLink style={{ margin: '20px 15px' }}>
                <CustomLink href="/student/home">
                  <FormattedMessage id={'nav.home'} />
                </CustomLink>
              </NavLink>
              <NavLink style={{ margin: '20px 15px' }}>
                <CustomLink href="/student/lessons">
                  <FormattedMessage id={'nav.myLessons'} />
                </CustomLink>
              </NavLink>
              <NavLink style={{ margin: '20px 15px' }}>
                <CustomLink href="/student/requests">
                  <FormattedMessage id={'nav.myRequests'} />
                </CustomLink>
              </NavLink>
            </OpenedMenu>
          ) : (
            <OpenedMenu ref={menuRef}>
              <NavLink style={{ margin: '20px 15px' }}>
                <CustomLink href="/tutor/home">
                  <FormattedMessage id={'nav.home'} />
                </CustomLink>
              </NavLink>
              <NavLink style={{ margin: '20px 15px' }}>
                <CustomLink href="/tutor/lessons">
                  <FormattedMessage id={'nav.myLessons'} />
                </CustomLink>
              </NavLink>
              <NavLink style={{ margin: '20px 15px' }}>
                <CustomLink href="/tutor/requests">
                  <FormattedMessage id={'nav.publicRequests'} />
                </CustomLink>
              </NavLink>
              <NavLink style={{ margin: '20px 15px' }}>
                <CustomLink href="/tutor/responses">
                  <FormattedMessage id={'nav.tutorResponses'} />
                </CustomLink>
              </NavLink>
            </OpenedMenu>
          )}
        </HamburgerMenu>

        <RightNavSection>
          <Button variant="switch" onClick={handleSwitchAction}>
            <HiOutlineSwitchVertical size={'25px'} />
            <div style={{ marginLeft: '10px' }}>
              <FormattedMessage id={switchButtonMsgId} />
            </div>
          </Button>

          <ProfileLink>
            <BsPersonCircle
              size={'41px'}
              color="#fff"
              onClick={handleOpenProfile}
            />

            <OpenedProfileMenu ref={profileRef}>
              <NavLink
                style={{
                  margin: '20px 15px',
                  cursor: 'default',
                  color: 'white',
                  fontSize: '$lg',
                  fontWeight: 'bold',
                }}
              >
                {user.firstName + ' ' + user.lastName}
              </NavLink>
              <NavLink style={{ margin: '20px 15px' }}>
                <CustomLink href="/profile">
                  <FormattedMessage id={'nav.profile'} />
                </CustomLink>
              </NavLink>
              <NavLink
                onClick={() => logout.mutate()}
                style={{ margin: '20px 15px' }}
              >
                <a>
                  <FormattedMessage id={'nav.logout'} />
                </a>
              </NavLink>
            </OpenedProfileMenu>
          </ProfileLink>
        </RightNavSection>
      </StyledHeader>
    </HeaderContainer>
  );
};
