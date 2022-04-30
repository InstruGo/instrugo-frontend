import { styled } from 'styles/stitches.config';

export const ProfileContainer = styled('div', {
  padding: '$6',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const PublicProfileName = styled('div', {
  marginTop: '$5',
  fontSize: '$xl4',
  fontWeight: 'bold',
});

export const Description = styled('div', {
  marginTop: '$10',
  fontSize: '$base',
  '> div + div': {
    marginTop: '$2',
  },
  ':first-child': {
    fontWeight: 'bold',
  },
});

export const Subjects = styled('div', {
  marginTop: '$8',
  fontSize: '$base',
  display: 'flex',
  '> :first-child': {
    fontWeight: 'bold',
  },
});

export const SubjectsList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '$5',
  '> div + div': {
    marginTop: '$1',
  },
  div: {
    textTransform: 'capitalize',
  },
});
