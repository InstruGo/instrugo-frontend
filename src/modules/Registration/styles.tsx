import { css, CSSProperties, styled } from '@stitches/react';

export const Header = styled('div', {
  height: '100px',
  backgroundColor: '#10434E',
  display: 'flex',
  alignItems: 'center',
});

export const AppName = styled('div', {
  marginLeft: '15px',
  color: 'white',
  fontSize: '40px',
  textShadow: '4px 4px 10px #000',
  fontWeight: 'bold',
  letterSpacing: '1px',
});

export const RegistrationContainer = styled('form', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: '100px',
  'div + div': {
    marginTop: '20px',
  },
});

export const LabeledInput = styled('div', {
  width: '500px',
  display: 'flex',
  flexDirection: 'column',
});

export const StyledLabel = styled('label', {
  fontSize: '20px',
  color: '#10434E',
  '&:first-letter': { textTransform: 'uppercase' },
});

export const StyledInput = styled('input', {
  border: 'none',
  marginTop: '15px',
  borderBottom: 'solid 1px #10434E66',
  fontSize: '18px',
  color: '#10434E',
  '&:focus-visible': { outline: 'none' },
  '&:focus': {
    borderBottom: 'solid 1px #10434Eff',
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
