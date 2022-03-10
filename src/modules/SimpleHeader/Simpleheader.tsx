import { styled } from '@stitches/react';
import { FormattedMessage } from 'react-intl';

import { HeaderContainer } from '@components';

export const StyledAppName = styled('div', {
  color: 'white',
  fontSize: '30px',
  fontWeight: 'bold',
  letterSpacing: '1px',
});

export const SimpleHeader = () => {
  return (
    <HeaderContainer>
      <StyledAppName>
        <FormattedMessage id={'appName'} />
      </StyledAppName>
    </HeaderContainer>
  );
};
