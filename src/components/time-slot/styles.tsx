import { styled } from 'styles/stitches.config';

export const FormRow = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1400px',

  '@bp2': {
    flexDirection: 'row',
  },
});

export const FormColumn = styled('div', {
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '450px',
});

export const DestroyButton = styled('button', {
  border: '0',
  fontFamily: 'inherit',
  borderRadius: '10px',
  boxShadow: '0 0 2px #aaa',
  transition: 'box-shadow 0.4s',
  '&:focus': {
    boxShadow: '0 0 6px #375d64b3',
  },
  padding: '$2 $3',
  '&:focus-visible': { outline: 'none' },
  height: '$2',

  variants: {
    variant: {
      primary: {
        backgroundColor: '#fff',
        color: '#DA1C1C',
        fontWeight: 'bold',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
});
