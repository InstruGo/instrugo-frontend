import Image from 'next/image';
import React from 'react';
import { StyledHeaderContainer } from './styles';

type StitchesComponentProps = React.ComponentPropsWithoutRef<
  typeof StyledHeaderContainer
>;

export const HeaderContainer = ({
  children,
  ...rest
}: React.PropsWithChildren<StitchesComponentProps>) => {
  return (
    <StyledHeaderContainer {...rest}>
      <div style={{ flexBasis: '50px', marginLeft: '15px' }}>
        <Image
          src="/favicon.ico"
          width="50px"
          height="50px"
          alt="appLogo"
          layout="fixed"
        />
      </div>
      <div
        style={{
          width: '100%',
          height: '100%',
          marginLeft: '15px',
        }}
      >
        {children}
      </div>
    </StyledHeaderContainer>
  );
};
