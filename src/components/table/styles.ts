import { CSS } from '@stitches/react';

import { styled } from '../../../styles/stitches.config';

export const TableStyle = styled('div', {
  width: '100%',
  height: '100%',
  border: '2px solid #3FB2C1',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
});
export const TableHeader = styled('tr', {
  display: 'flex',
  color: 'white',
  justifyContent: 'center',
  fontSize: '$lg',
  fontWeight: '$semibold',
  height: '2',
  alignItems: 'center',
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
  padding: '0px 0px',
  width: '100%',
});
export const StyledHr = styled('hr', {
  width: '100%',
  borderTop: 'solid 1px #10434E',
});
export const TableBody = styled('table', {
  display: 'flex',
  backgroundColor: 'rgba(63, 178, 193, 0.2)',
  flexDirection: 'column',
  justifyContent: 'flex-start',
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
  display: 'flex',
  width: '100%',
  justifyContent: 'space-evenly',
});
export const TableData = styled('td', {
  textAlign: 'center',
  flexGrow: '1',
  flexShrink: '1',
});
export const TableTitles = styled('th', {
  paddingTop: '12px',
  paddingBottom: '12px',
  textAlign: 'center',
  backgroundColor: '#10434E',
  color: 'white',
  flexGrow: '1',
  flexShrink: '0',
});
