import { styled } from 'styles/stitches.config';

export const FormColumn = styled('div', {
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '450px',
  variants: {
    variant: {
      normal: {
        padding: '$2 $4',
      },
      smallPadding: {
        padding: '$2 $1',
      },
    },
  },

  defaultVariants: {
    variant: 'normal',
  },
});
export const FormRow = styled('div', {
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  width: '100%',
  maxWidth: '1400px',
  variants: {
    variant: {
      normal: {
        padding: '$2 $5',
      },
      smallPadding: {
        padding: '$2 $0',
      },
    },
  },

  defaultVariants: {
    variant: 'normal',
  },
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
