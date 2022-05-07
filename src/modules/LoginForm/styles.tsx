import { CSS } from '@stitches/react';

import { styled } from '../../../styles/stitches.config';

export const LoginFormContainer = styled('form', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '$20 $8 $8',
  boxSizing: 'border-box',
  justifyContent: 'center',
  '> div + div': {
    marginTop: '$6',
  },
  'input + a': {
    marginTop: '10px',
    alignItems: 'flex-start',
  },
  'button + a': {
    marginTop: '10px',
    justifyContent: 'center',
  },
});

export const ForgotPassContainer = styled('div', {
  width: '100%',
  maxWidth: '400px',
  margin: '10px 0 0 5px',
  fontSize: '13px',
  a: {
    color: '#3FB2C1',
  },
  'a:hover': {
    textDecoration: 'underline',
  },
});

export const NeedAnAccount = styled('div', {
  display: 'flex',
  fontSize: '13px',
  marginTop: '10px',
  a: { color: '#3FB2C1', marginLeft: '5px' },
  'a:hover': {
    textDecoration: 'underline',
  },
  userSelect: 'none',
});

export const LinkRef = styled('a', {
  width: '100%',
  maxWidth: '400px',
  display: 'flex',
  color: '#3FB2C1',
  fontSize: '14px',
  fontWeight: 'bold',
  textDecoration: 'none',
});

export const LoaderContainer = styled('div', {
  marginTop: '40px',
  width: '40px',
  height: '40px',
});

export const LoginActionsBox = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '$5',
});
