import { styled } from 'styles/stitches.config';

export const StyledContainer = styled('div', {});

export const LessonsHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

export const Title = styled('div', { fontWeight: 'bold', fontSize: '22px' });

export const StyledHr = styled('hr', {
  marginLeft: '20px',
  width: '100%',
  borderTop: 'solid 1px #10434E',
});

export const ControlPanel = styled('div', {
  display: 'flex',
  marginTop: '20px',
  justifyContent: 'space-between',
  alignItems: 'center',
  '> div + div': {
    marginLeft: '20px',
  },
});

export const FilterContainer = styled('div', {
  marginTop: '10px',
  backgroundColor: '#eee',
  borderRadius: '10px',
  overflow: 'hidden',
  height: '0',
});

export const FilterGroup = styled('div', {
  display: 'flex',
  padding: '10px',
  '> button': {
    textTransform: 'capitalize',
  },
  '> button + button': {
    marginLeft: '10px',
  },
});

export const LessonsBody = styled('div', {
  marginTop: '15px',
  display: 'flex',
  flexWrap: 'wrap',
  padding: '0 $6',
  gap: '$6',
});

export const TableBody = styled('div', {
  marginTop: '20px',
  display: 'flex',
  flexWrap: 'wrap',
  padding: '0 $6',
  gap: '$6',
  justifyContent: 'center',
  width: '300px',
  margin: '40px auto 0',

  '@bp1': {
    margin: '40px 0 0',
    width: 'auto',
    justifyContent: 'flex-start',
  },
});
