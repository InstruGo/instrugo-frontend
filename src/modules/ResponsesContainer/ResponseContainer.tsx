import { useTutorResponse } from '@hooks';
import { LessonCard } from '@modules/LessonCard/LessonCard';

export const ResponseContainer = ({ responseId }: { responseId: number }) => {
  const { data: response, isLoading } = useTutorResponse(responseId);

  if (isLoading || !response) return null;

  return <LessonCard lesson={response.lesson} response={response} />;
};
