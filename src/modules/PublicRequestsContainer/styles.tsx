import { styled } from 'styles/stitches.config';

export const StyledContainer = styled('div', {});

export const LessonsHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

export const Title = styled('div', {
  fontWeight: 'bold',
  fontSize: '22px',
});

export const StyledHr = styled('hr', {
  marginLeft: '20px',
  width: '88%',
  borderTop: 'solid 1px #10434E',
});

export const RequestsBody = styled('div', {
  marginTop: '$4',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$6',
});
