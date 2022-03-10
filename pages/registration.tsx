import { styled } from '@stitches/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { FormattedMessage } from 'react-intl';

import { HeaderContainer } from '@components';
import { RegistrationForm } from '@modules';

export const StyledAppName = styled('div', {
  color: 'white',
  fontSize: '30px',
  fontWeight: 'bold',
  letterSpacing: '1px',
});

const Registration: NextPage = () => {
  return (
    <div>
      <Head>
        <title>InstruGo | Register an account</title>
      </Head>

      <HeaderContainer>
        <StyledAppName>
          <FormattedMessage id={'appName'} />
        </StyledAppName>
      </HeaderContainer>

      <RegistrationForm />
    </div>
  );
};

export default Registration;
