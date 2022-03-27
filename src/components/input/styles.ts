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
        borderBottom: 'solid 1px #ccc',
        padding: '$2 $1',
        transition: 'border-color 0.2s, background-color 0.2s',
        '&:focus': {
          borderColor: '#10434E',
          backgroundColor: '#e6f2f5',
        },
        '&::placeholder': {
          textTransform: 'capitalize',
        },
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
        fontWeight: 'bold',
        cursor: 'pointer',
        border: 'none',
        letterSpacing: '0.5px',
      },
    },
  },

  defaultVariants: {
    variant: 'auth',
  },
});

export const ErrorsContainer = styled('div', {
  marginTop: '10px',
  color: 'firebrick',
  fontSize: '13px',
  // Same width as the input above
  width: '100%',
  maxWidth: '400px',
  paddingLeft: '5px',
});
