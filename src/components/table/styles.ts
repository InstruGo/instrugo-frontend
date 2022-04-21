import { CSS } from '@stitches/react';

import { styled } from '../../../styles/stitches.config';

export const TableStyle = styled('div', {
  width: '100%',
  // height: '100%',
  border: '2px solid #10434E',
  borderRadius: '10px',
  // display: 'flex',
  // flexDirection: 'column',
});
export const TableHeader = styled('tr', {
  color: 'white',
  justifyContent: 'center',
  fontSize: '$lg',
  fontWeight: '$semibold',
  height: '$2',
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
  backgroundColor: 'rgba(63, 178, 193, 0.2)',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: '$xs',
  height: '100%',
  width: '100%',
});

export const TableText = styled('i', {
  padding: '4px',
});

export const TableItem = styled('tr', {
  hover: { backgroundColor: '#ddd' },

  fontSize: '14px',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  borderTop: '1px',
  borderStyle: 'solid',
  borderColor: '#000',
  paddingTop: '12px',
  paddingBottom: '12px',
  height: '30px',
});
export const TableData = styled('td', {
  cursor: 'pointer',
  paddingTop: '$3',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  height: '30px',
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
