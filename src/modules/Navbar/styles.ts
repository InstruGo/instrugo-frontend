import { styled } from 'styles/stitches.config';

export const StyledHeader = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
});

export const StyledNavbar = styled('div', {
  display: 'none',
  '@bp2': {
    display: 'flex',
  },
  alignItems: 'center',
  '> div + div': {
    marginLeft: '$3',
  },
});

export const NavLinkDecorator = styled('div', {
  height: '$full',
  display: 'flex',
  alignItems: 'center',
  padding: '0 $3',
  borderRadius: '5px',
});

export const NavLink = styled('div', {
  color: 'white',
  fontSize: '$lg',
  fontWeight: 'bold',
  cursor: 'pointer',
  '&:hover': { color: '#a4e4ed' },
});

export const HamburgerMenu = styled('div', {
  display: 'flex',
  '@bp2': {
    display: 'none',
  },
  alignItems: 'center',
});

export const Clickable = styled('div', {
  '&:hover': {
    cursor: 'pointer',
  },
});

export const OpenedMenu = styled('div', {
  position: 'absolute',
  top: '83px',
  left: '3px',
  borderRadius: '5px',
  backgroundColor: 'rgb(16, 67, 78)',
  flexDirection: 'column',
  overflow: 'hidden',
  height: '0',

  'div + div': {
    marginTop: '20px',
  },
});

export const RightNavSection = styled('div', { display: 'flex' });

export const ProfileLink = styled('div', {
  width: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  marginLeft: '15px',
});

export const OpenedProfileMenu = styled('div', {
  position: 'absolute',
  zIndex: 1000,
  top: '83px',
  right: '3px',
  backgroundColor: 'rgb(16, 67, 78)',
  borderRadius: '10px',
  flexDirection: 'column',
  boxSizing: 'border-box',
  overflow: 'hidden',
  height: '0',
  // marginBottom: '20px',
});

export const LocaleSection = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '10px',
  'div + div': {
    borderLeft: 'solid 1px #10434E',
    paddingLeft: '10px',
  },
});

export const LocaleLink = styled('div', {
  color: '#10434E',
  ':hover': {
    color: '#47b9d3',
  },
});
