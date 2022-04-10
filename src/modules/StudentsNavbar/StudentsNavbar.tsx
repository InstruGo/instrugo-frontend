import Link from 'next/link';
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

export const StudentsNavbar = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  return (
    <HeaderContainer>
      <StyledHeader>
        <StyledNavbar>
          <NavLink>
            <FormattedMessage id={'nav.home'} />
          </NavLink>
          <NavLink>
            <FormattedMessage id={'nav.myLessons'} />
          </NavLink>
          <NavLink>
            <FormattedMessage id={'nav.myRequests'} />
          </NavLink>
        </StyledNavbar>

        <HamburgerMenu>
          <GiHamburgerMenu
            color="white"
            size={'35px'}
            onClick={() => setMenuOpen(!isMenuOpen)}
          />

          <OppenedMenu style={{ display: isMenuOpen ? 'flex' : 'none' }}>
            <NavLink>
              <FormattedMessage id={'nav.home'} />
            </NavLink>
            <NavLink>
              <FormattedMessage id={'nav.myLessons'} />
            </NavLink>
            <NavLink>
              <FormattedMessage id={'nav.myRequests'} />
            </NavLink>
          </OppenedMenu>
        </HamburgerMenu>

        <RightNavSection>
          <Button variant="switch">
            <HiOutlineSwitchVertical size={'25px'} />
            <div className="text">
              <FormattedMessage id="nav.switch" />
            </div>
          </Button>
          <ProfileLink>
            <Link href="/student/profile">
              <a>
                <CgProfile size={'32px'} />
              </a>
            </Link>
          </ProfileLink>
        </RightNavSection>
      </StyledHeader>
    </HeaderContainer>
  );
};
