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
  alignItems: 'center',
  '> div + div': {
    marginLeft: '20px',
  },
});

export const LessonsBody = styled('div', {
  marginTop: '20px',
});
