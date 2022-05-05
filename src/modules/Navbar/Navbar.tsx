import { useRouter } from 'next/router';
import React, { useLayoutEffect, useRef, useState } from 'react';

import { BsPersonCircle } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiOutlineSwitchVertical } from 'react-icons/hi';
import { FormattedMessage } from 'react-intl';

import { Button, CustomLink, HeaderContainer } from '@components';
import { Loader } from '@components/icons';
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
  OppenedMenu,
  OppenedProfileMenu,
  ProfileLink,
  RightNavSection,
  StyledHeader,
  StyledNavbar,
} from './styles';

export const Navbar = () => {
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

  // Animations for navbar hamburger menu and profile menu
  const { menuAnimation: navbarMenuAnimation } = useMenuAnimation();
  const { menuAnimation: profileMenuAnimation } = useMenuAnimation();

  useLayoutEffect(() => {
    navbarMenuAnimation(menuRef, isMenuOpen);
    profileMenuAnimation(profileRef, isProfileOpen);
  }, [isMenuOpen, isProfileOpen, navbarMenuAnimation, profileMenuAnimation]);

  if (!user) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Loader width="40px" height="40px" />
      </div>
    );
  }

  const becomeATutor = () => {
    becomeTutor.mutate();
    router.push('/tutor/home');
  };

  const handleSwitchAction = () => {
    if (user.role === UserRole.STUDENT) {
      becomeATutor();
    } else {
      if (router.pathname.startsWith('/tutor')) router.push('/student/home');
      else router.push('/tutor/home');
    }
  };

  const switchButtonMsgId =
    user.role === UserRole.STUDENT
      ? 'nav.becomeATutor'
      : router.pathname.startsWith('/student')
      ? 'nav.switchToTutor'
      : 'nav.switchToStudent';

  return (
    <HeaderContainer>
      <StyledHeader>
        {router.pathname.startsWith('/student') ? (
          <StyledNavbar>
            <NavLink>
              <CustomLink href="/student/home">
                <FormattedMessage id={'nav.home'} />
              </CustomLink>
            </NavLink>
            <NavLink>
              <CustomLink href="/student/lessons">
                <FormattedMessage id={'nav.myLessons'} />
              </CustomLink>
            </NavLink>
            <NavLink>
              <CustomLink href="/student/requests">
                <FormattedMessage id={'nav.myRequests'} />
              </CustomLink>
            </NavLink>
          </StyledNavbar>
        ) : (
          <StyledNavbar>
            <NavLink>
              <CustomLink href="/tutor/home">
                <FormattedMessage id={'nav.home'} />
              </CustomLink>
            </NavLink>
            <NavLink>
              <CustomLink href="/tutor/lessons">
                <FormattedMessage id={'nav.myLessons'} />
              </CustomLink>
            </NavLink>
            <NavLink>
              <CustomLink href="/tutor/requests">
                <FormattedMessage id={'nav.publicRequests'} />
              </CustomLink>
            </NavLink>
            <NavLink>
              <CustomLink href="/tutor/responses">
                <FormattedMessage id={'nav.tutorResponses'} />
              </CustomLink>
            </NavLink>
          </StyledNavbar>
        )}

        <HamburgerMenu>
          <Clickable onClick={handleOpenNav}>
            <GiHamburgerMenu color="white" size={'35px'} />
          </Clickable>

          {router.pathname.startsWith('/student') ? (
            <OppenedMenu ref={menuRef}>
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
            </OppenedMenu>
          ) : (
            <OppenedMenu ref={menuRef}>
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
            </OppenedMenu>
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

            <OppenedProfileMenu ref={profileRef}>
              <NavLink style={{ margin: '20px 15px' }}>
                <CustomLink href="/profile">Profile</CustomLink>
              </NavLink>
              <NavLink
                onClick={() => logout.mutate()}
                style={{ margin: '20px 15px' }}
              >
                <a>Log out</a>
              </NavLink>
            </OppenedProfileMenu>
          </ProfileLink>
        </RightNavSection>
      </StyledHeader>
    </HeaderContainer>
  );
};
