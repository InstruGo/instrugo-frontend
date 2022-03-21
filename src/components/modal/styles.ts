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
  backgroundColor: 'white',
  boxSizing: 'border-box',
  overflow: 'auto',
  margin: '$20 $5',
  width: '$xl',
  '@bp2': {
    width: '$xl3',
  },
  '@bp3': {
    width: '$xl5',
  },
});
