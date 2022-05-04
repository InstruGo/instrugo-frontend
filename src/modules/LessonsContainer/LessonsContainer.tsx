import { Loader } from '@components/icons';
import { useLessons } from '@hooks';
import { LessonCard } from '@modules';
import { LessonFilter } from '@types';
import { styled } from 'styles/stitches.config';

interface LessonsContainerProps {
  filter: LessonFilter;
}

const StyledContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
});

export const LessonsContainer = ({ filter }: LessonsContainerProps) => {
  const { data: lessons, isLoading } = useLessons(filter);

  if (isLoading)
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Loader width="40px" height="40px" />
      </div>
    );

  return (
    <StyledContainer>
      {lessons?.map((lesson) => {
        return <LessonCard key={lesson.id} lesson={lesson} />;
      })}
    </StyledContainer>
  );
};
