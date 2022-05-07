import { styled } from 'styles/stitches.config';

export const StyledButton = styled('button', {
  border: '0',
  fontFamily: 'inherit',
  borderRadius: '100px',
  boxShadow: '0 0 2px #aaa',
  transition: 'box-shadow 0.4s',
  padding: '$2 $3',
  '&:focus-visible': { outline: 'none' },
  cursor: 'pointer',

  variants: {
    variant: {
      primary: {
        backgroundColor: '#10434E',
        color: '#fff',
        '&:hover': {
          backgroundColor: '#1d6c7d',
        },
      },
      secondary: {
        backgroundColor: '#fff',
        color: '#10434E',
        border: 'solid 1px #10434E',
        fontWeight: 'bold',
        '&:hover': {
          backgroundColor: '#edf5f7',
        },
      },
      switch: {
        boxSizing: 'border-box',
        padding: '$2',
        backgroundColor: 'rgb(63, 178, 193, 0.85)',
        borderRadius: '100px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        justifyContent: 'center',
        fontSize: '$base',
        '& > div': { display: 'none' },
        '&:hover': {
          backgroundColor: 'rgb(63, 178, 193, 1)',
        },
        '@bp1': {
          '& > div': {
            display: 'block',
          },
        },
      },
      disabled: {
        cursor: 'not-allowed',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
});
