import { styled } from 'styles/stitches.config';

export const RewardsBody = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const RewardsDescription = styled('div', {
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  marginTop: '$3',
});

export const ProgressBarContainer = styled('div', {
  display: 'flex',
  width: '400px',
  marginLeft: '$6',

  '@bp1': {
    width: '400px',
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
