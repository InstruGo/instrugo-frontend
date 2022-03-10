import { CSSProperties } from '@stitches/react';

import { styled } from 'styles/stitches';

export const RegistrationFormContainer = styled('form', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '30px',
  'input + input': {
    marginTop: '30px',
  },
  '@sm': {
    paddingTop: '60px',
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

export const LabeledCheckbox = styled('div', {
  width: '100%',
  maxWidth: '400px',
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '50px',
});

export const RegisterButton: CSSProperties = {
  marginTop: '20px',
  borderRadius: '50px',
  padding: '10px 50px',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  fontSize: '16px',
};
