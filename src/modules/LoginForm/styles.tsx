import { CSS } from '@stitches/react';

import { styled } from '../../../styles/stitches.config';

export const LoginFormContainer = styled('form', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '$8',
  height: '80vh',
  justifyContent: 'center',
  'input + input': {
    marginTop: '30px',
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

export const LoginButton: CSS = {
  marginTop: '$5',
  borderRadius: '50px',
  padding: '$2 $12',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  fontSize: '$base',
};

export const LinkRef = styled('a', {
  width: '100%',
  maxWidth: '400px',
  display: 'flex',
  color: '#3FB2C1',
  fontSize: '14px',
  fontWeight: 'bold',
  textDecoration: 'none',
});

export const LoginText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '$5 $4',
  boxSizing: 'border-box',
  background: 'linear-gradient(#fff, #eee)',
  color: 'rgb(47, 147, 160)',
  fontWeight: 'bold',
  fontSize: '$xl2',
  textAlign: 'center',
});
