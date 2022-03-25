import { styled } from 'styles/stitches.config';

export const ModalBackground = styled('div', {
  position: 'fixed',
  zIndex: 1,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0 ,0, 0.6)',
  display: 'flex',
  justifyContent: 'center',
});

export const ModalBody = styled('div', {
  position: 'relative',
  backgroundColor: 'white',
  boxSizing: 'border-box',
  overflow: 'auto',
  margin: '$20 $5',
  width: '$xl',
  borderRadius: '10px',
  padding: '10px',
  '@bp2': {
    width: '$xl3',
  },
  '@bp3': {
    width: '$xl6',
  },

  // Scrollbar styles
  '&::-webkit-scrollbar': {
    width: '5px',
  },

  // Track
  '&::-webkit-scrollbar-track': {
    background: '#f1f1f1',
  },

  // Handle
  '&::-webkit-scrollbar-thumb': {
    background: '#3FB2C1',
  },
});

export const ModalClose = styled('div', {
  position: 'absolute',
  top: '10px',
  right: '10px',
  cursor: 'pointer',
  backgroundColor: 'white',
});
