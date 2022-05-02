import { styled } from 'styles/stitches.config';

export const SectionContainer = styled('div', {});

export const SectionHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  fontWeight: 'bold',
  fontSize: '$xl',
});

export const StyledHr = styled('hr', {
  marginLeft: '$6',
  width: '100%',
  borderTop: 'solid 1px #10434E',
});

export const SectionContent = styled('div', {
  marginTop: '$3',
});
