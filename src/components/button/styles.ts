import { styled } from 'styles/stitches.config';

export const StyledButton = styled('button', {
  border: '0',
  fontFamily: 'inherit',
  '&:focus-visible': { outline: 'none' },
  cursor: 'pointer',

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
      switch: {
        height: '40px',
        width: '40px',
        boxSizing: 'border-box',
        marginRight: '20px',
        padding: '7px',
        backgroundColor: 'rgb(63, 178, 193, 0.85)',
        borderRadius: '50px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        justifyContent: 'center',
        fontSize: '17px',
        '& > .text': {
          display: 'none',
        },
        '@bp1': {
          padding: '10px 20px',
          width: 'auto',
          '& > .text': {
            display: 'block',
            marginLeft: '10px',
          },
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
});
