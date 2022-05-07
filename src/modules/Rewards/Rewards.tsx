import Image from 'next/image';
import { AiFillGift } from 'react-icons/ai';
import { GiRank3 } from 'react-icons/gi';
import { FormattedMessage, useIntl } from 'react-intl';

import {
  ProgressBarContainer,
  RewardsBody,
  RewardsDescription,
} from './styles';

export const Rewards = () => {
  const intl = useIntl();

  return (
    <RewardsBody>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <RewardsDescription>
          <div>
            <FormattedMessage id="rewards.description" />
          </div>
        </RewardsDescription>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '40px',
          }}
        >
          <AiFillGift size="30px" />

          <ProgressBarContainer>
            <progress
              id="rewardsBar"
              value="3"
              max="8"
              style={{ flexGrow: 1 }}
            />
            <label htmlFor="rewardsBar" style={{ marginLeft: '20px' }}>
              3/8
            </label>
          </ProgressBarContainer>
        </div>
      </div>

      <div
        style={{
          marginLeft: '40px',
          borderLeft: '1px solid black',
          paddingLeft: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{ fontWeight: 'bold', color: '#5e5341' }}
        >{`${intl.formatMessage({ id: 'rewards.rank' })} 3`}</div>

        <Image
          src="/rewardslevel.png"
          width="60px"
          height="60px"
          alt="rewardsLevelIcon"
          style={{ marginTop: '5px' }}
        />
      </div>
    </RewardsBody>
  );
};
