import { CSSProperties } from '@stitches/react';
import { CSS } from '@stitches/react';

import { styled } from '../../../styles/stitches.config';

export const LoginFormContainer = styled('form', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  height: '80vh',
  justifyContent: 'center',
  padding: '30px',
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

export const StyledInput = styled('input', {
  width: '100%',
  maxWidth: '400px',
  padding: '10px 15px',
  boxSizing: 'border-box',
  border: 'none',
  boxShadow: '0 0 2px #aaa',
  borderRadius: '10px',
  fontSize: '18px',
  color: '#10434E',
  fontFamily: 'inherit',
  transition: 'box-shadow 0.4s',
  '&:focus-visible': { outline: 'none' },
  '&:focus': {
    boxShadow: '0 0 6px #375d64b3',
  },
  '&::selection': {
    backgroundColor: '#f5d2a5',
  },
  '&::placeholder': { textTransform: 'capitalize', color: '#aaa' },
});

export const LoginButton: CSSProperties = {
  marginTop: '40px',
  borderRadius: '50px',
  padding: '10px 50px',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  fontSize: '16px',
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

export const InputStyles: CSS = {
  width: '100%',
  maxWidth: '400px',
  fontSize: '$base',
  color: '#10434E',
  fontFamily: 'inherit',
};
