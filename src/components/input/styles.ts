import { styled } from '@stitches/react';

export const StyledInput = styled('input', {
  padding: '10px 15px',
  boxSizing: 'border-box',
  border: 'none',
  boxShadow: '0 0 2px #aaa',
  borderRadius: '10px',
  fontSize: '18px',
  fontFamily: 'inherit',
  transition: 'box-shadow 0.4s',
  '&:focus-visible': { outline: 'none' },
  '&:focus': {
    boxShadow: '0 0 6px #44444488',
  },
  '&::placeholder': { color: '#aaa' },
});
