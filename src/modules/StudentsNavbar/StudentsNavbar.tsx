import { useRouter } from 'next/router';
import React, { useLayoutEffect, useRef, useState } from 'react';

import { BsPersonCircle } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiOutlineSwitchVertical } from 'react-icons/hi';
import { FormattedMessage } from 'react-intl';

import { Button, CustomLink, HeaderContainer } from '@components';
import { useLogout, useMenuAnimation } from '@hooks';

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

export const StudentsNavbar = () => {
  const router = useRouter();
  const logout = useLogout();

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

  return (
    <HeaderContainer>
      <StyledHeader>
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

        <HamburgerMenu>
          <Clickable onClick={handleOpenNav}>
            <GiHamburgerMenu color="white" size={'35px'} />
          </Clickable>

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
        </HamburgerMenu>

        <RightNavSection>
          <Button variant="switch" onClick={() => router.push('/tutor/home')}>
            {/* <Button
            variant="switch"
            onClick={() => router.push('/tutor/requests')}
          > */}
            <HiOutlineSwitchVertical size={'25px'} />
            <div style={{ marginLeft: '10px' }}>
              <FormattedMessage id="nav.switch" />
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
