import { styled } from 'styles/stitches.config';

export const StyledInput = styled('input', {
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  '&::placeholder': { color: '#aaa' },
  '&:focus-visible': { outline: 'none' },

  variants: {
    variant: {
      auth: {
        width: '100%',
        maxWidth: '400px',
        fontSize: '$base',
        color: '#10434E',
        border: 'none',
        padding: '$2 $4',
        borderRadius: '10px',
        boxShadow: '0 0 2px #aaa',
        transition: 'box-shadow 0.4s',
        '&:focus': {
          boxShadow: '0 0 6px #375d64b3',
        },
        '&::placeholder': { textTransform: 'capitalize' },
        '&::selection': {
          backgroundColor: '#f5d2a5',
        },
      },
      authSubmit: {
        backgroundColor: '#10434E',
        color: '#fff',
        borderRadius: '20px',
        padding: '$2 $4',
        fontSize: '$base',
        marginTop: '20px',
        textTransform: 'uppercase',
      },
    },
  },

  defaultVariants: {
    variant: 'auth',
  },
});
