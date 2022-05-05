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
      {lessons?.map((lesson) => {
        return <LessonCard key={lesson.id} lesson={lesson} />;
      })}
    </StyledContainer>
  );
};

const StyledContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$5',
  marginTop: '$4',
});
