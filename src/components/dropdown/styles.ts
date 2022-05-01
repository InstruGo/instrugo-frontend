import { styled } from 'styles/stitches.config';

export const DropdownMainBox = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100px',
  backgroundColor: ' #f3f3f3',
  borderTopLeftRadius: '2px',
  borderTopRightRadius: '2px',
  padding: '5px',
  boxSizing: 'border-box',
  borderTop: '1px solid #10434E',
  borderRight: '1px solid #10434E',
  borderLeft: '1px solid #10434E',
  textTransform: 'capitalize',
});

export const DropdownIcon = styled('div', {
  width: '15px',
  height: '15px',
  transition: 'transform 0.2s',
});

export const DropdownOptionsContainer = styled('div', {
  height: '0',
  position: 'fixed',
  width: '100px',
  overflow: 'hidden',
  borderRight: '1px solid #10434E',
  borderBottom: '1px solid #10434E',
  borderLeft: '1px solid #10434E',
  boxSizing: 'border-box',
  borderBottomRightRadius: '2px',
  borderBottomLeftRadius: '2px',
  backgroundColor: 'white',
});

export const DropdownOptions = styled('div', {
  margin: '$1',
  textTransform: 'capitalize',
  ':hover': {
    cursor: 'pointer',
    backgroundColor: '#f3f3f3',
  },

  '> div + div': {
    marginTop: '$1',
  },
});
