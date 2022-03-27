import { styled } from 'styles/stitches.config';

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
        height: '$10',
        width: '$10',
        boxSizing: 'border-box',
        marginRight: '$5',
        padding: '$2',
        backgroundColor: 'rgb(63, 178, 193, 0.85)',
        borderRadius: '50px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        justifyContent: 'center',
        fontSize: '$base',
        '& > .text': {
          display: 'none',
        },
        '@bp1': {
          padding: '$3 $5',
          width: 'auto',
          '& > .text': {
            display: 'block',
            marginLeft: '$5',
          },
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
});
