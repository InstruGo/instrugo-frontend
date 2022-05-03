import { AiFillGift } from 'react-icons/ai';

import {
  ProgressBarContainer,
  RewardsBody,
  RewardsDescription,
} from './styles';

export const Rewards = () => {
  return (
    <RewardsBody>
      <ProgressBarContainer>
        <progress id="rewardsBar" value="3" max="8" style={{ flexGrow: '1' }} />
        <label htmlFor="rewardsBar" style={{ marginLeft: '20px' }}>
          3/8
        </label>
      </ProgressBarContainer>

      <RewardsDescription>
        <div>5 more to get 30% discount on Your next lesson</div>
        <AiFillGift size="20px" style={{ marginLeft: '10px' }} />
      </RewardsDescription>
    </RewardsBody>
  );
};
