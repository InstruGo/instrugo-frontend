import { Loader } from '@components/icons';
import { useLessons } from '@hooks';
import { LessonCard } from '@modules';
import { LessonFilter } from '@types';

interface LessonsContainerProps {
  filter: LessonFilter;
}

export const LessonsContainer = ({ filter }: LessonsContainerProps) => {
  const { data: lessons, isLoading } = useLessons(filter);

  if (isLoading)
    return (
      <div>
        <Loader width="40px" height="40px" />
      </div>
    );

  return (
    <div style={{ display: 'flex' }}>
      {lessons?.map((lesson) => {
        return <LessonCard key={lesson.id} lesson={lesson} />;
      })}
    </div>
  );
};
