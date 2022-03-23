import { Button } from '@components';
import { FaPlus } from 'react-icons/fa';
import { config, css } from 'styles/stitches.config';

import * as Stitches from '@stitches/react';
import { FormattedMessage } from 'react-intl';

type CSS = Stitches.CSS<typeof config>;

const ButtonStyles = css({
  position: 'fixed !important',
  bottom: '20px',
  right: '20px',
  borderRadius: '100px',
  padding: '15px',
  fontSize: '20px',
  display: 'flex',
  alignItems: 'center',
});

export const NewRequestButton = (props: { onClick: () => void }) => {
  return (
    <Button className={`${ButtonStyles}`} {...props}>
      <FaPlus size="30px" style={{ marginRight: '15px' }} />
      <FormattedMessage id="button.createRequest" />
    </Button>
  );
};
