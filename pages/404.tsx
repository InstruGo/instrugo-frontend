import type { NextPage } from 'next';
import Head from 'next/head';

import { SimpleHeader } from '@modules';
import { styled } from 'styles/stitches.config';

const ErrorContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  borderRadius: '10px',
  padding: '20px',
  boxSizing: 'border-box',
  marginTop: '100px',

  ':first-child': { fontWeight: 'bold', color: '#3FB2C1' },

  'div + div': {
    marginTop: '20px',
  },

  '@bp1': {
    width: '580px',
    margin: '100px auto',
    boxShadow: '0 0 10px #ccc',
    backgroundColor: '#f3f3f3',
  },
});

const PageNotFound: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          InstruGo | Get help with math, physics, languages and more
        </title>
      </Head>

      <SimpleHeader />

      <ErrorContainer>
        <div>404 Error</div>
        <div>
          Sorry, <br />
          this page could not be found. :(
        </div>
      </ErrorContainer>
    </div>
  );
};

export default PageNotFound;
