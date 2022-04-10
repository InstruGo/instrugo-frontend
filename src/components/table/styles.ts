import { CSS } from '@stitches/react';

import { styled } from '../../../styles/stitches.config';

export const TableStyle = styled('div', {
  width: '14rem',
  height: '8rem',
  border: '2px solid #3FB2C1',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
});
export const TableHeader = styled('div', {
  display: 'flex',
  color: 'white',
  justifyContent: 'center',
  fontSize: '$lg',
  fontWeight: '$semibold',
  borderBottom: '1px solid #3FB2C1',
  backgroundColor: '#3FB2C1',
  height: '2',
  alignItems: 'center',
  borderTopLeftRadius: '6px',
  borderTopRightRadius: '6px',
  padding: '5px 0px',
});

export const TableBody = styled('div', {
  display: 'flex',
  backgroundColor: 'rgba(63, 178, 193, 0.2)',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '$xs',
  height: '100%',
  width: '100%',
});

export const TableText = styled('i', {
  display: 'flex',
  padding: '4px',
});

export const TableItem = styled('tr', {
  hover: { backgroundColor: '#ddd' },
});

export const TableTitles = styled('th', {
  paddingTop: '12px',
  paddingBottom: '12px',
  textAlign: 'left',
  backgroundColor: '#10434E',
  color: 'white',
});
