import { styled } from '@stitches/react';

export const StyledHeaderContainer = styled('div', {
  display: 'flex',
  background: 'linear-gradient(#10434E, #134b57)',
  height: '80px',
  alignItems: 'center',
  overflow: 'hidden',
});

export const LogoContainer = styled('div', {
  flexBasis: '50px',
  marginLeft: '$6',
});

export const ChildrenContainer = styled('div', {
  display: 'flex',
  width: '100%',
  height: '100%',
  margin: '0 $6',
  alignItems: 'center',
});
