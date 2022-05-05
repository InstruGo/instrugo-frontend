import { styled } from 'styles/stitches.config';

export const CardContainer = styled('div', {
  width: '18rem',
  border: '2px solid #3FB2C1',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#f2f2f2',
  },
});

export const CardHeader = styled('div', {
  display: 'flex',
  color: 'white',
  justifyContent: 'space-between',
  fontSize: '$xl',
  fontWeight: '$semibold',
  borderBottom: '1px solid #3FB2C1',
  backgroundColor: '#3FB2C1',
  alignItems: 'center',
  borderTopLeftRadius: '6px',
  borderTopRightRadius: '6px',
  padding: '$2',
});

export const CardBody = styled('div', {
  backgroundColor: 'rgba(63, 178, 193, 0.0)',
  fontSize: '$m',
  width: '100%',
  padding: '$3 $2',
  boxSizing: 'border-box',

  '> div + div': {
    marginTop: '$3',
  },
});

export const CardItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
});

export const CardText = styled('div', {
  display: 'flex',
  marginLeft: '$2',
});

export const ResponseSeparator = styled('div', {
  height: '1px',
  width: '100%',
});
