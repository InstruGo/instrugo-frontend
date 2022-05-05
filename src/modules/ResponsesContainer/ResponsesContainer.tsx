import { Loader } from '@components';
import { useTutorResponses } from '@hooks';

import { ResponseContainer } from './ResponseContainer';

export const ResponsesContainer = () => {
  const { data: responseIds, isLoading } = useTutorResponses();

  if (isLoading) return <Loader />;

  return (
    <div
      style={{
        display: 'flex',
        gap: '30px',
        flexWrap: 'wrap',
      }}
    >
      {responseIds?.map((response) => {
        return <ResponseContainer key={response.id} responseId={response.id} />;
      })}
    </div>
  );
};
