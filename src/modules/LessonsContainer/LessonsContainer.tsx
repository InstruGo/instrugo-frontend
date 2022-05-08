import { FormattedMessage } from 'react-intl';

import { Loader } from '@components';
import { useLessons } from '@hooks';
import { LessonCard } from '@modules';
import { LessonFilter } from '@types';
import { styled } from 'styles/stitches.config';

interface LessonsContainerProps {
  filter: LessonFilter;
}

export const LessonsContainer = ({ filter }: LessonsContainerProps) => {
  const { data: lessons, isLoading } = useLessons(filter);

  if (isLoading) return <Loader />;

  return (
    <StyledContainer>
      {lessons && lessons.length !== 0 ? (
        lessons.map((lesson) => {
          return <LessonCard key={lesson.id} lesson={lesson} />;
        })
      ) : (
        <FormattedMessage id="lessons.noLessons" />
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$5',
  marginTop: '$4',
});
