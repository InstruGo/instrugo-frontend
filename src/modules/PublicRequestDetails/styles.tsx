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

export const ResponseHeader = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  padding: '$5 0px $5 0px',
});

export const CalendarContainer = styled('div', {
  maxWidth: '1400px',
  padding: '$10',
  color: '#328fab',
});

export const Title = styled('div', {
  fontWeight: 'normal',
  fontSize: '$xl2',
  color: '#10434E',
  whiteSpace: 'nowrap',
  padding: '$0 $5 $0 $2',
});

export const FieldTitle = styled('div', {
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$lg',
  font: 'Roboto',
  color: '#0E353D',
  fontWeight: '$black',
});

export const FieldDescription = styled('div', {
  alignItems: 'center',
  justifyContent: 'flex-start',
  display: 'flex',
  padding: '$4 0 $1 0',
  width: '100%',
  maxWidth: '400px',
  fontSize: '$lg',
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
  fontSize: '$xl3',
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
  justifyContent: 'space-evenly',
  display: 'flex',
  width: '100%',
  variants: {
    variant: {
      normal: {
        padding: '$2 $5',
      },
      bigPadding: {
        padding: '$2 $5',
        justifyContent: 'flex-start',
      },
    },
  },

  defaultVariants: {
    variant: 'normal',
  },
});
