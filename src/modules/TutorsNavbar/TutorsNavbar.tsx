import { useRouter } from 'next/router';
import React from 'react';

import { CgProfile } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiOutlineSwitchVertical } from 'react-icons/hi';
import { FormattedMessage } from 'react-intl';

import { Button, HeaderContainer } from '@components';

import {
  HamburgerMenu,
  NavLink,
  OppenedMenu,
  ProfileLink,
  RightNavSection,
  StyledHeader,
  StyledNavbar,
} from './styles';

export const TutorsNavbar = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const router = useRouter();
  return (
    <HeaderContainer>
      <StyledHeader>
        <StyledNavbar>
          <NavLink onClick={() => router.push('/tutor/home')}>
            <FormattedMessage id={'nav.home'} />
          </NavLink>
          <NavLink>
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
            <NavLink>
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
            <CgProfile size={'32px'} />
          </ProfileLink>
        </RightNavSection>
      </StyledHeader>
    </HeaderContainer>
  );
};
