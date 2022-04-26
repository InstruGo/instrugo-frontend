import { useRouter } from 'next/router';
import React, { useLayoutEffect, useRef, useState } from 'react';

import { BsPersonCircle } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiOutlineSwitchVertical } from 'react-icons/hi';
import { FormattedMessage } from 'react-intl';

import { Button, HeaderContainer, CustomLink } from '@components';
import { useMenuAnimation, useLogout } from '@hooks';

import {
  HamburgerMenu,
  NavLink,
  OppenedMenu,
  ProfileLink,
  RightNavSection,
  StyledHeader,
  StyledNavbar,
  OppenedProfileMenu,
} from './styles';

export const TutorsNavbar = () => {
  const logout = useLogout();
  const router = useRouter();

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);

  const profileRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

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

  return (
    <HeaderContainer>
      <StyledHeader>
        <StyledNavbar>
          <NavLink onClick={() => router.push('/tutor/home')}>
            <FormattedMessage id={'nav.home'} />
          </NavLink>
          <NavLink onClick={() => router.push('/tutor/lessons')}>
            <FormattedMessage id={'nav.myLessons'} />
          </NavLink>
          <NavLink onClick={() => router.push('/tutor/requests')}>
            <FormattedMessage id={'nav.publicRequests'} />
          </NavLink>
          <NavLink onClick={() => router.push('/tutor/responses')}>
            <FormattedMessage id={'nav.tutorResponses'} />
          </NavLink>
        </StyledNavbar>

        <HamburgerMenu>
          <GiHamburgerMenu
            color="white"
            size={'35px'}
            onClick={() => setMenuOpen(!isMenuOpen)}
          />

          <OppenedMenu style={{ display: isMenuOpen ? 'flex' : 'none' }}>
            <NavLink onClick={() => router.push('/tutor/home')}>
              <FormattedMessage id={'nav.home'} />
            </NavLink>
            <NavLink onClick={() => router.push('/tutor/home')}>
              <FormattedMessage id={'nav.myLessons'} />
            </NavLink>
            <NavLink onClick={() => router.push('/tutor/requests')}>
              <FormattedMessage id={'nav.publicRequests'} />
            </NavLink>
            <NavLink onClick={() => router.push('/tutor/responses')}>
              <FormattedMessage id={'nav.tutorResponses'} />
            </NavLink>
          </OppenedMenu>
        </HamburgerMenu>

        <RightNavSection>
          <Button variant="switch" onClick={() => router.push('/student/home')}>
            <HiOutlineSwitchVertical size={'25px'} />
            <div className="text">
              <FormattedMessage id="nav.switch.tutor" />
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
