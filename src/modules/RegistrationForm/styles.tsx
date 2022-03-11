import { CSSProperties } from '@stitches/react';

import { styled } from 'styles/stitches.config';

export const RegistrationText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '20px',
});

export const RegistrationFormContainer = styled('form', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '30px',
  'input + input': {
    marginTop: '30px',
  },
  '@bp1': {
    paddingTop: '60px',
  },
});

export const InputStyles: CSSProperties = {
  width: '100%',
  maxWidth: '400px',
  fontSize: '18px',
  color: '#10434E',
  fontFamily: 'inherit',
};

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
