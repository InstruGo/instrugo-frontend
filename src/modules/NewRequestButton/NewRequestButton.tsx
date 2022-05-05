import { useRouter } from 'next/router';
import React from 'react';

import { FaPlus } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';

import { Button } from '@components';

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

const ButtonStyles = {
  borderRadius: '100px',
  padding: '10px 20px',
  fontSize: '1.1rem',
  display: 'flex',
  alignItems: 'center',

  '> svg': { marginRight: '15px' },
};
