import { styled } from 'styles/stitches.config';

export const ResponseFormContainer = styled('form', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '$4',
  'input + input': {
    marginTop: '$8',
  },
  '@bp1': {
    paddingTop: '$2',
  },
});

export const InputDescription = styled('div', {
  alignItems: 'flex-start',
  display: 'flex',
  padding: '$4 0 $1 0',
  width: '100%',
  maxWidth: '400px',
  fontSize: '26',
  font: 'Roboto',
  color: '#0E353D',
});

export const RadioInput = styled('div', {
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'row',
  padding: '$1 0 $1 0',
  width: '100%',
  maxWidth: '400px',
  fontSize: '26',
  font: 'Roboto',
  color: '#0E353D',
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

export const FormColumn = styled('div', {
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '700px',
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

export const FormRow = styled('div', {
  justifyContent: 'center',
  display: 'flex',
  width: '100%',
  maxWidth: '1400px',
  variants: {
    variant: {
      normal: {
        padding: '$2 $5',
      },
      smallPadding: {
        padding: '$2 $0',
      },
    },
  },

  defaultVariants: {
    variant: 'normal',
  },
});

export const Dropdown = styled('select', {
  font: 'Montserrat',
  backgroundColor: '#10434E',
  color: '#fff',
  fontSize: '$sm',
  borderRadius: '5px',
  boxSizing: 'content-box',
  padding: '$1 $2',
});

export const DropdownOption = styled('option', {
  font: 'Montserrat',
  backgroundColor: '#fff',
  color: '#10434E',
});
