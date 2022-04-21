import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { styled } from 'styles/stitches.config';

const RatingContainer = styled('div', {
  display: 'flex',
  marginTop: '$3',
});

export const Rating = ({ rating }: { rating: number }) => {
  return (
    <RatingContainer>
      {[...Array(5)].map((_, i) => {
        return i < rating ? (
          <AiFillStar key={i} size="30px" fill="#b5c643" />
        ) : (
          <AiOutlineStar key={i} size="30px" fill="#b5c643" />
        );
      })}
    </RatingContainer>
  );
};
