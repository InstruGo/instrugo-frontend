import { styled } from '@stitches/react';

export const StyledButton = styled('button', {
  border: '0',
  fontFamily: 'inherit',
  '&:focus-visible': { outline: 'none' },

  variants: {
    type: {
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
    type: 'primary',
  },
});