import { styled } from 'styles/stitches.config';

export const CardContainer = styled('div', {});

export const CardStyle = styled('div', {
  width: '14rem',
  height: '10rem',
  border: '2px solid #3FB2C1',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
});

export const CardHeader = styled('div', {
  display: 'flex',
  color: 'white',
  justifyContent: 'space-between',
  fontSize: '$lg',
  fontWeight: '$semibold',
  borderBottom: '1px solid #3FB2C1',
  backgroundColor: '#3FB2C1',
  height: '2',
  alignItems: 'center',
  borderTopLeftRadius: '6px',
  borderTopRightRadius: '6px',
  padding: '$2',
});

export const CardBody = styled('div', {
  display: 'flex',
  backgroundColor: 'rgba(63, 178, 193, 0.0)',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '$xs',
  height: '100%',
  width: '100%',
});

export const CardText = styled('i', {
  display: 'flex',
  padding: '4px',
});

export const CardItem = styled('div', {
  display: 'flex',
  justifyContent: 'start',
  width: '$full',
  alignItems: 'center',
  paddingLeft: '20px',
  height: '20%',
});

export const Row = styled('div', {
  flexGrow: '0',
  justifyContent: 'flex-start',
  alignItems: 'center',
  display: 'flex',
  width: '50%',
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
