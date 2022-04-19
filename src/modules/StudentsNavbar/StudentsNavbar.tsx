import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';

import { BsPersonCircle } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiOutlineSwitchVertical } from 'react-icons/hi';
import { FormattedMessage } from 'react-intl';

import { Button, CustomLink, HeaderContainer } from '@components';
import { useLogout } from '@hooks';

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

  // Menu accordion animations
  React.useLayoutEffect(() => {
    if (menuRef.current) {
      let menuContainer = menuRef.current;
      menuContainer.style.transition = '';
      let rect = menuContainer.getBoundingClientRect();

      // Remember start height
      let startHeight = rect.height;

      menuContainer.style.height = isMenuOpen ? 'auto' : '0';
      rect = menuContainer.getBoundingClientRect();

      // Remember end height
      let endHeight = rect.height;

      // Set to start height
      menuContainer.style.height = `${startHeight}px`;

      requestAnimationFrame(() => {
        // Move to end height
        menuContainer.style.height = `${endHeight}px`;
        menuContainer.style.transition = 'height 0.3s';
      });
    }
  }, [isMenuOpen]);

  React.useLayoutEffect(() => {
    if (profileRef.current) {
      let profileMenuContainer = profileRef.current;
      profileMenuContainer.style.transition = '';
      let rect = profileMenuContainer.getBoundingClientRect();

      // Remember start height
      let startHeight = rect.height;

      profileMenuContainer.style.height = isProfileOpen ? 'auto' : '0';
      rect = profileMenuContainer.getBoundingClientRect();

      // Remember end height
      let endHeight = rect.height;

      // Set to start height
      profileMenuContainer.style.height = `${startHeight}px`;

      requestAnimationFrame(() => {
        // Move to end height
        profileMenuContainer.style.height = `${endHeight}px`;
        profileMenuContainer.style.transition = 'height 0.3s';
      });
    }
  }, [isProfileOpen]);

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
          <Button variant="switch">
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
                <CustomLink href="/student/profile">Profile</CustomLink>
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
