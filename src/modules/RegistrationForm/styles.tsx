import { CSS } from '@stitches/react';

import { styled } from 'styles/stitches.config';

export const RegistrationText = styled('div', {
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

export const RegistrationFormContainer = styled('form', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '$8',
  'input + input': {
    marginTop: '$8',
  },
  '@bp1': {
    paddingTop: '$16',
  },
});

export const LabeledCheckbox = styled('div', {
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '$12',
});

export const RegisterButton: CSS = {
  marginTop: '$5',
  borderRadius: '50px',
  padding: '$2 $12',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  fontSize: '$base',
};
