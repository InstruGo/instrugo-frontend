import { styled } from 'styles/stitches.config';

export const ProfileLayout = styled('div', {
  display: 'flex',
  justifyContent: 'center',
});

export const ProfileCard = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '$12 $5',
  boxSizing: 'border-box',
  margin: '$5 0',
  backgroundColor: '#fdfdfd',

  '@bp1': {
    width: '580px',
    boxShadow: '0 1px 10px #bbb',
    borderRadius: '10px',
  },
});

export const EditButtonStyles = {
  position: 'absolute',
  top: '20px',
  right: '20px',
  padding: '0',
  backgroundColor: 'transparent',
  borderRadius: '2px',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#ddd',
  },
};

export const SaveChangesButtonStyles = {
  position: 'absolute',
  top: '20px',
  right: '20px',
};

export const ProfileName = styled('div', {
  fontWeight: 'bold',
  fontSize: '$xl3',
  marginTop: '$5',
});

export const Stats = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '$12',
});

export const Stat = styled('div', {
  width: '70px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  ':first-child': {
    fontWeight: 'bold',
    color: '#10434E',
  },
  'div + div': {
    marginTop: '$2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#10434E',
    width: '40px',
    height: '40px',
    borderRadius: '100px',
    color: 'white',
  },
});

export const Details = styled('div', {
  marginTop: '$16',
  alignSelf: 'flex-start',
  div: {
    display: 'flex',
    alignItems: 'center',
    '.detail': {
      marginLeft: '$3',
    },
  },
  'div + div': {
    marginTop: '$2',
  },
});

export const Subjects = styled('div', {
  alignSelf: 'flex-start',
  marginTop: '$8',
});

export const AboutMe = styled('div', {
  marginTop: '$8',
  ':first-child': {
    fontWeight: 'bold',
    fontSize: '$lg',
  },
  'div + div': {
    marginTop: '$3',
  },
});
