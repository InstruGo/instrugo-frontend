import { styled } from 'styles/stitches.config';

export const ControlPanel = styled('div', {
  display: 'flex',
  marginTop: '$4',
  alignItems: 'center',
  '> button + button': {
    marginLeft: '$2',
  },
});

export const FilterMenuContainer = styled('div', {
  margin: '$5 0',
  backgroundColor: '#eee',
  borderRadius: '10px',
  overflow: 'hidden',
  display: 'flex',
});

export const FilterGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
  '> div': { marginBottom: '$2' },
  '> button + button': {
    marginLeft: '10px',
  },
});

export const FilterButtonStyles = {
  backgroundColor: 'white',
  color: '#10434E',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  boxShadow: 'none',
};

export const NewRequestButtonContainer = styled('div', {
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'flex-end',
});
