import { styled } from '@stitches/react';

export const StyledButton = styled('button', {
  border: '0',
  borderRadius: '50px',
  fontFamily: 'inherit',

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
    spacing: {
      compact: {
        padding: '5px 10px',
      },
      comfortable: {
        padding: '8px 25px',
      },
      spacey: {
        padding: '10px 50px',
      },
    },
  },

  defaultVariants: {
    type: 'primary',
    spacing: 'comfortable',
  },
});
