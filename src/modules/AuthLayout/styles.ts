import { styled } from 'styles/stitches.config';

export const AuthDescription = styled('div', {
  display: 'flex',
  padding: '$5 $4',
  boxSizing: 'border-box',
  background: 'linear-gradient(#fff, #eee)',
  color: 'rgb(47, 147, 160)',
  fontWeight: 'bold',
  fontSize: '$lg',
  '@bp1': {
    justifyContent: 'center',
  },
});

export const LocaleSection = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '150px 0 50px',
  'div + div': {
    marginLeft: '10px',
    borderLeft: 'solid 1px #10434E',
    paddingLeft: '10px',
  },
});

export const LocaleLink = styled('div', {
  color: '#10434E',
  ':hover': {
    color: '#47b9d3',
  },
  a: {
    display: 'flex',
    alignItems: 'center',
  },
  '.text': {
    marginLeft: '10px',
  },
});
