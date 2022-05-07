import { CSS } from '@stitches/react';
import { Controller } from 'react-hook-form';

import { styled } from 'styles/stitches.config';

export const RegistrationFormContainer = styled('form', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '$8',
  'div + div': {
    marginTop: '$6',
  },
  '@bp1': {
    paddingTop: '$16',
  },
});

export const SubjectsInput = styled('div', {
  py: '$2',
  'div + div': {
    marginTop: 0,
  },
});

export const SubjectsLabel = styled('div', {
  py: '$2',
  mb: '$2',
});

export const LabeledCheckbox = styled('div', {
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '$12',
  userSelect: 'none',
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
  a: {
    marginLeft: '5px',
    color: '#3FB2C1',
  },
  'a:hover': { textDecoration: 'underline' },
  userSelect: 'none',
});
