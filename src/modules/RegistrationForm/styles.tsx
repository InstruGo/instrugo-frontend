import { CSS } from '@stitches/react';

import { styled } from 'styles/stitches.config';

export const RegistrationFormContainer = styled('form', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '$8',
  'div + input': {
    marginTop: '$6',
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

export const AlreadyHaveAccount = styled('div', {
  marginTop: '10px',
  fontSize: '13px',
  a: { marginLeft: '5px', color: '#3FB2C1' },
});
