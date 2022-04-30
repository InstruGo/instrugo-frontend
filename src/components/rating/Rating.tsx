import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FormattedMessage } from 'react-intl';

import { styled } from 'styles/stitches.config';

const RatingContainer = styled('div', {
  display: 'flex',
  marginTop: '$3',
});

// Rating domain: {1, 2, 3, 4, 5}
// Rating with value 0 means that tutor's never been rated

export const Rating = ({ rating }: { rating: number }) => {
  return (
    <RatingContainer>
      {rating !== 0 ? (
        [...Array(5)].map((_, i) => {
          return i < rating ? (
            <AiFillStar key={i} size="30px" fill="#b5c643" />
          ) : (
            <AiOutlineStar key={i} size="30px" fill="#b5c643" />
          );
        })
      ) : (
        <FormattedMessage id="user.noRating" />
      )}
    </RatingContainer>
  );
};
