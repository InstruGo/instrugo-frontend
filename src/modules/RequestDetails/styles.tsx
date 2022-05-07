import { styled } from 'styles/stitches.config';

export const RequestDetailsWrapper = styled('div', {
  padding: '$4',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const RequestDetailsText = styled('div', {
  width: '100%',
  color: 'rgb(47, 147, 160)',
  fontSize: '$xl3',
  textAlign: 'center',
  fontWeight: 'bold',
  marginTop: '$4',
});

export const RequestDetailsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '$14',
  maxWidth: '1100px',
});

export const Row = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const Column = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',

  '> div + div': {
    marginTop: '$6',
  },
});

export const FieldDescription = styled('div', {
  justifyContent: 'flex-start',
  display: 'flex',
  width: '100%',
  font: 'Roboto',
  color: '#0E353D',
  fontSize: '$xl',
});

export const FieldTitle = styled('div', {
  justifyContent: 'center',
  font: 'Roboto',
  color: '#0E353D',
  fontWeight: 'bold',
});

export const EditText = styled('div', {
  fontWeight: 'normal',
  fontSize: '$lg',
  color: '#fffff',
  whiteSpace: 'nowrap',
});

export const CalendarContainer = styled('div', {
  color: '#328fab',
  marginTop: '$3',
});

export const ResponseChildren = styled('div', {
  '> div + div': {
    marginTop: '$3',
  },
});
