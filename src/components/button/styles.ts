import { styled } from '@stitches/react';

export const StyledButton = styled('button', {
  border: '0',
  fontFamily: 'inherit',
  borderRadius: '10px',
  boxShadow: '0 0 2px #aaa',
  transition: 'box-shadow 0.4s',
  '&:focus': {
    boxShadow: '0 0 6px #375d64b3',
  },
  padding: '$1 $2',
  '&:focus-visible': { outline: 'none' },

  variants: {
    variant: {
      primary: {
        backgroundColor: '#10434E',
        color: '#fff',
      },
      secondary: {
        backgroundColor: '#fff',
        color: '#3FB2C1',
        fontWeight: 'bold',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
});
