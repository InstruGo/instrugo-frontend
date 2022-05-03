import { Loader } from '@components/icons';
import { useTutorResponses } from '@hooks';

import { ResponseContainer } from './ResponseContainer';

export const ResponsesContainer = () => {
  const { data: responseIds, isLoading } = useTutorResponses();

  if (isLoading)
    return (
      <div>
        <Loader width="40px" height="40px" />
      </div>
    );

  return (
    <div style={{ display: 'flex' }}>
      {responseIds?.map((response) => {
        return <ResponseContainer key={response.id} responseId={response.id} />;
      })}
    </div>
  );
};
