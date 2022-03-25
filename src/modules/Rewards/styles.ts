import { styled } from 'styles/stitches.config';

export const RewardsContainer = styled('div', {});

export const RewardsHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

export const Title = styled('div', { fontWeight: 'bold', fontSize: '22px' });

export const StyledHr = styled('hr', {
  marginLeft: '20px',
  width: '100%',
  borderTop: 'solid 1px #10434E',
});

export const RewardsBody = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const ProgressBarContainer = styled('div', {
  display: 'flex',
  width: '100%',
  marginTop: '20px',
  '@bp1': {
    width: '70%',
  },
  alignItems: 'center',
  '& progress::-webkit-progress-bar': {
    backgroundColor: '#3FB2C1',
    borderRadius: '20px',
  },
  '& progress::-webkit-progress-value': {
    backgroundColor: '#10434E',
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px',
  },
  '& progress': {
    backgroundColor: '#10434E',
    borderRadius: '20px',
    height: '10px',
  },
  '& label': {
    fontWeight: 'bold',
  },
});

export const RewardsDescription = styled('div', {
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  marginTop: '20px',
});