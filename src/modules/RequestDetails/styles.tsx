import { CSS } from '@stitches/react';

import { styled } from 'styles/stitches.config';

export const RequestDetailsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '$4',
  'input + input': {
    marginTop: '$8',
  },
  '@bp1': {
    paddingTop: '$2',
  },
});
export const StyledHr = styled('hr', {
  width: '100%',
  borderTop: 'solid 1px #10434E',
});
export const ResponsesHeader = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  width: '100%',
});

export const Title = styled('div', {
  fontWeight: 'normal',
  fontSize: '20px',
  color: '#10434E',
  width: '20%',
});
export const FieldDescription = styled('div', {
  alignItems: 'flex-start',
  display: 'flex',
  padding: '$4 0 $1 0',
  width: '100%',
  maxWidth: '400px',
  fontSize: '26',
  font: 'Roboto',
  color: '#0E353D',
});

export const RequestDetailsText = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  padding: '$3 $3',
  boxSizing: 'border-box',
  color: 'rgb(47, 147, 160)',
  fontWeight: 'bold',
  fontSize: '$xl2',
  textAlign: 'center',
});

export const Column = styled('div', {
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
export const Row = styled('div', {
  justifyContent: 'left',
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
        flexDirection: 'flex-start',
      },
    },
  },

  defaultVariants: {
    variant: 'normal',
  },
});