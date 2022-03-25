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

export const NewRequestFormContainer = styled('form', {
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

export const InputDescription = styled('div', {
  alignItems: 'flex-start',
  display: 'flex',
  padding: '$4 0 $1 0',
  width: '100%',
  maxWidth: '400px',
  fontSize: '26',
  font: 'Roboto',
  color: '#0E353D',
});
export const RadioInput = styled('div', {
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'row',
  padding: '$1 0 $1 0',
  width: '100%',
  maxWidth: '400px',
  fontSize: '26',
  font: 'Roboto',
  color: '#0E353D',
});

export const TextBox = styled('textarea', {
  height: '70px',
  width: '100%',
  maxWidth: '370px',
  fontSize: '$base',
  color: '#10434E',
  border: 'none',
  padding: '$2 $4',
  borderRadius: '10px',
  boxShadow: '0 0 2px #aaa',
  transition: 'box-shadow 0.4s',
});
export const FormColumn = styled('div', {
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '450px',
  variants: {
    variant: {
      normal: {
        padding: '$2 $4',
      },
      smallPadding: {
        padding: '$2 $1',
      },
    },
  },

  defaultVariants: {
    variant: 'normal',
  },
});
export const FormRow = styled('div', {
  justifyContent: 'center',
  display: 'flex',
  width: '100%',
  maxWidth: '1400px',
  variants: {
    variant: {
      normal: {
        padding: '$2 $5',
      },
      smallPadding: {
        padding: '$2 $0',
      },
    },
  },

  defaultVariants: {
    variant: 'normal',
  },
});