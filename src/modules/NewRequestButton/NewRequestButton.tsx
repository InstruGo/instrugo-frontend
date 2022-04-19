import React from 'react';

import { FaPlus } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';

import { Button } from '@components';

const ButtonStyles = {
  position: 'fixed !important',
  bottom: '20px',
  right: '20px',
  borderRadius: '100px',
  padding: '15px 25px',
  fontSize: '20px',
  display: 'flex',
  alignItems: 'center',

  '> svg': { marginRight: '15px' },
};

export const NewRequestButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button onClick={onClick} css={ButtonStyles}>
      <FaPlus size="25px" />
      <FormattedMessage id="button.createRequest" />
    </Button>
  );
};
