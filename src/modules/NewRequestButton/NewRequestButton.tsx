import { useRouter } from 'next/router';
import React from 'react';

import { FaPlus } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';

import { Button } from '@components';

const ButtonStyles = {
  borderRadius: '100px',
  padding: '15px 25px',
  fontSize: '20px',
  display: 'flex',
  alignItems: 'center',

  '> svg': { marginRight: '15px' },
};

export const NewRequestButton = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push('/student/new-request')}
      css={ButtonStyles}
    >
      <FaPlus size="25px" />
      <FormattedMessage id="button.createRequest" />
    </Button>
  );
};
