import { styled } from 'styles/stitches.config';

export const LessonDetailsContainer = styled('form', {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '80%',
  width: '95%',
  padding: '$4',
  color: '#0E353D',
  'input + input': {
    marginTop: '$8',
  },
  '@bp1': {
    paddingTop: '$2',
  },
});

export const Title = styled('div', {
  fontWeight: 'normal',
  fontSize: '20px',
  color: '#10434E',
  whiteSpace: 'nowrap',
  padding: '$0 $5 $0 $2',
  width: '100%',
  textAlign: 'left',
  paddingLeft: '$5',
  paddingBottom: '$5',
  textSize: '$lg',
});

export const FieldDescription = styled('div', {
  alignItems: 'flex-start',
  display: 'flex',
  padding: '$4 0 $1 0',
  width: '100%',
  maxWidth: '400px',
  fontSize: '26',
  font: 'Roboto',
});

export const LessonDetailsText = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  padding: '$3 $3',
  boxSizing: 'border-box',
  color: 'rgb(47, 147, 160)',
  fontWeight: 'bold',
  fontSize: '$xl2',
  textAlign: 'center',
});

export const StyledVr = styled('div', {
  color: '#0E353D',
  backgroundColor: '#0E353D',
  height: '500px',
});

export const Column = styled('div', {
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '450px',
  border: '5px',
  variants: {
    variant: {
      normal: {
        padding: '$2 $4',
      },
      smallPadding: {
        padding: '$2 $1',
      },
    },
  },

  defaultVariants: {
    variant: 'normal',
  },
});

export const Row = styled('div', {
  flexGrow: '0',
  justifyContent: 'flex-start',
  alignItems: 'center',
  display: 'flex',
  width: '50%',
  variants: {
    variant: {
      normal: {
        padding: '$2 $5',
      },
      bigPadding: {
        padding: '$2 $5',
        justifyContent: 'flex-start',
      },
    },
  },

  defaultVariants: {
    variant: 'normal',
  },
});

export const CardText = styled('i', {
  display: 'flex',
  padding: '4px',
  fontSize: '$lg',
});

export const TutorLink = styled('div', {
  '&:hover': {
    opacity: '0.5',
    cursor: 'pointer',
  },
});

export const TextBox = styled('textarea', {
  height: '70px',
  width: '100%',
  maxWidth: '370px',
  fontSize: '$base',
  color: '#10434E',
  border: 'none',
  padding: '$2 $4',
  borderRadius: '10px',
  boxShadow: '0 0 2px #aaa',
  transition: 'box-shadow 0.4s',
});
