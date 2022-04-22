import { styled } from 'styles/stitches.config';

export const ResponseContainer = styled('div', {
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
});

export const StyledHr = styled('hr', {
  marginLeft: '20px',
  width: '98%',
  borderTop: 'solid 1px #10434E',
});

export const ResponseItem = styled('div', {
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: '2',
  padding: '$2',
});

export const FieldDescription = styled('div', {
  justifyContent: 'center',
  display: 'flex',
  padding: '$2 $2',
  width: '100%',
  maxWidth: '400px',
  fontSize: '26',
  font: 'Roboto',
  color: '#0E353D',
});

export const ItemRow = styled('div', {
  justifyContent: 'flex-start',
  display: 'flex',
  flexDirection: 'row',
  padding: '$2',
});
