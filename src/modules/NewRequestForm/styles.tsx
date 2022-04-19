import { styled } from 'styles/stitches.config';

export const NewRequestTitle = styled('div', {
  color: 'rgb(63, 178, 193)',
  fontWeight: 'bold',
  fontSize: '$xl2',
  padding: '10px',
  borderBottom: '1px solid rgb(88, 163, 173, 0.7)',
});

export const FormContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxSizing: 'border-box',
  padding: '$4 0',

  '@bp2': {
    padding: '40px 80px',
  },
});

export const InputsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  '> div + div': {
    marginTop: '20px',
  },

  '@bp3': {
    flexDirection: 'row',
    '> div + div': {
      marginTop: '0',
      marginLeft: '30px',
      borderLeft: '1px solid rgb(88, 163, 173, 0.7)',
      paddingLeft: '30px',
    },
  },
});

export const FormColumn = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  '> div + div': {
    marginTop: '20px',
  },
});

export const InputDescription = styled('div', {
  display: 'flex',
  color: '#10434E',
  fontWeight: 'bold',
  borderRadius: '10px',
  boxShadow: '0 0 5px #ccc',
  padding: '10px 20px',
  boxSizing: 'border-box',
  width: '100%',
  maxWidth: '600px',

  variants: {
    variant: {
      row: {
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      column: {
        flexDirection: 'column',
      },
    },
  },

  defaultVariants: {
    variant: 'row',
  },
});

export const Dropdown = styled('select', {
  backgroundColor: '#10434E',
  color: '#fff',
  fontSize: '$sm',
  borderRadius: '5px',
  boxSizing: 'content-box',
  padding: '$1 $2',

  marginLeft: '10px',
  textTransform: 'capitalize',

  '&:hover': {
    cursor: 'pointer',
  },
});

export const DropdownOption = styled('option', {
  font: 'Montserrat',
  backgroundColor: '#fff',
  color: '#10434E',
});

export const RadioInput = styled('div', {
  marginTop: '5px',
  input: {
    marginRight: '10px',
  },
});

export const TextBox = styled('textarea', {
  height: '100%',
  fontSize: '$base',
  color: '#10434E',
  border: 'none',
  padding: '$2 $4',
  boxSizing: 'border-box',
  width: '100%',
  borderRadius: '10px',
  boxShadow: '0 0 2px #aaa',
  transition: 'box-shadow 0.4s',
  marginTop: '10px',
});
