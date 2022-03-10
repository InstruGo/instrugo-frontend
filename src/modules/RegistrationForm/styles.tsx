import { CSSProperties } from '@stitches/react';

import { styled } from 'styles/stitches';

export const RegistrationContainer = styled('form', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '20px',
  marginTop: '30px',
  'div + div': {
    marginTop: '30px',
  },
});

export const LabeledInput = styled('div', {
  width: '100%',
  maxWidth: '400px',
  display: 'flex',
  flexDirection: 'column',
});

export const StyledLabel = styled('label', {
  fontSize: '20px',
  color: '#10434E',
  textTransform: 'capitalize',
  '&:after': {
    content: ':',
  },
});

export const StyledInput = styled('input', {
  border: 'none',
  padding: '0',
  paddingLeft: '2px',
  marginTop: '10px',
  borderBottom: 'solid 2px #5a7b83',
  fontSize: '18px',
  fontFamily: 'inherit',
  color: '#10434E',
  width: '100%',
  transition: 'width 0.5s',
  '&:focus-visible': { outline: 'none' },
  '&:focus': {
    borderBottom: 'solid 2px #10434e',
  },
  '&::selection': {
    backgroundColor: '#f5d2a5',
  },
  '@sm': {
    '&:focus': {
      width: '103%',
    },
  },
});

export const RegisterButton: CSSProperties = {
  marginTop: '20px',
  borderRadius: '50px',
  padding: '10px 50px',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  fontSize: '16px',
};
