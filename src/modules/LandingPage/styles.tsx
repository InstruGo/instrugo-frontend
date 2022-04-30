import { styled } from 'styles/stitches.config';

export const StyledNavbar = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
});

export const LoginButtonStyles = {
  padding: '8px 20px',
  fontSize: '20px',
  border: 'none',
  boxShadow: 'none',
};

export const ContentLayout = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '$12 $4 $4',
  minHeight: '65vh',

  '> div': {
    width: '90%',
  },

  '@bp2': {
    padding: '$12',
  },
});

export const MainSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export const InfoAndImage = styled('div', {
  fontSize: '$xl3',
  color: '#10434E',
  fontWeight: 'bold',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '> div + div': { marginTop: '$12' },

  '@bp2': {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',

    '> div + div': { margin: '0 0 0 $12' },
  },
});

export const TextInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '600px',

  div: { textAlign: 'center' },

  'div + div': {
    marginTop: '$7p5',
  },

  'div + button': {
    marginTop: '$3',
  },
});

export const FlowContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '$10 0',
  alignItems: 'center',

  '@bp2': {
    flexDirection: 'row',
  },
});

/**
 * Flow item consists of two arrow divs and the content container.
 *
 * On mobile resolutions, the content container is positioned absolutely
 * so that the two wrapping arrow divs come together and then positioning
 * is done by translating the divs.
 */
export const FlowItem = styled('div', {
  color: '#b498ca',
  fontWeight: 'bold',
  display: 'flex',
  flexDirection: 'column',
  height: '60px',
  position: 'relative',

  div: {
    position: 'absolute',
    top: '10px',
    width: '200px',
    transform: 'translate(-50px, 0)',
  },

  '.arrowIn': {
    width: '0',
    height: '0',
    borderTop: '20px solid transparent',
    borderRight: '20px solid #b498ca',
    borderLeft: '20px solid #b498ca',
    borderBottom: '20px solid #b498ca',
    transform: 'translate(-110px)',
  },

  '.arrowOut': {
    width: '0',
    height: '0',
    borderTop: '20px solid #b498ca',
    borderRight: '20px solid transparent',
    borderLeft: '20px solid transparent',
    transform: 'translate(-110px)',
  },

  '@bp2': {
    color: 'white',
    flexDirection: 'row',
    width: '25%',
    height: '40px',

    div: {
      transform: 'none',
      position: 'static',
      backgroundColor: '#b498ca',
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',
      flexGrow: '1',
    },

    '.arrowIn': {
      border: 'none',
      transform: 'none',
      borderTop: '20px solid #b498ca',
      borderBottom: '20px solid #b498ca',
      borderLeft: '20px solid transparent',
    },

    '.arrowOut': {
      border: 'none',
      transform: 'none',
      borderTop: '20px solid transparent',
      borderBottom: '20px solid transparent',
      borderLeft: '20px solid #b498ca',
    },
  },
});

export const Separator = styled('hr', {
  width: '100%',
  borderTop: '1px solid #a0bfc6',
});

export const FeatureDescription = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '$xl2',
  color: '#10434E',
  padding: '$12 0',

  div: {
    maxWidth: '800px',
  },

  '> div + div': {
    margin: '$24 0 0 0',
    maxWidth: '319px',
  },

  '@bp2': {
    flexDirection: 'row',
    justifyContent: 'space-between',

    '> div + div': {
      margin: '0 0 0 $24',
    },
  },
});

export const FooterContainer = styled('div', {
  backgroundColor: '#10434E',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '$10 $3',
  color: 'white',

  'span + div': {
    marginLeft: '$3',
  },

  '> div + div': { marginTop: '$7p5' },

  '@bp1': {
    flexDirection: 'row',
    '> div + div': { margin: '0' },
  },
});

export const FooterColumn = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  'div + div': {
    marginTop: '$3',
  },

  variants: {
    variant: {
      alignLeft: {
        '@bp1': {
          alignItems: 'flex-start',
        },
      },
      alignRight: {
        '@bp1': {
          alignItems: 'flex-end',
        },
      },
    },
  },
});

export const SocialIcons = styled('div', {
  'svg + svg': {
    marginLeft: '$3',
  },
});
