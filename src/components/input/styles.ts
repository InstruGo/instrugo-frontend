import { styled } from 'styles/stitches.config';

export const StyledInput = styled('input', {
  boxSizing: 'border-box',
  border: 'solid 1px #aaa',
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
        fontFamily: 'inherit',
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
    },
  },

  defaultVariants: {
    variant: 'auth',
  },
});
