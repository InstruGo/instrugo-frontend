import { AiFillGift } from 'react-icons/ai';
import { FormattedMessage } from 'react-intl';

import {
  ProgressBarContainer,
  RewardsBody,
  RewardsContainer,
  RewardsDescription,
  RewardsHeader,
  StyledHr,
  Title,
} from './styles';

export const Rewards = () => {
  return (
    <RewardsContainer>
      <RewardsHeader>
        <Title>
          <FormattedMessage id="home.rewards" />
        </Title>
        <StyledHr />
      </RewardsHeader>

      <RewardsBody>
        <ProgressBarContainer>
          <progress
            id="rewardsBar"
            value="3"
            max="8"
            style={{ flexGrow: '1' }}
          />
          <label htmlFor="rewardsBar" style={{ marginLeft: '20px' }}>
            3/8
          </label>
        </ProgressBarContainer>

        <RewardsDescription>
          <div>5 more to get 30% discount on Your next lesson</div>
          <AiFillGift size="20px" style={{ marginLeft: '10px' }} />
        </RewardsDescription>
      </RewardsBody>
    </RewardsContainer>
  );
};
