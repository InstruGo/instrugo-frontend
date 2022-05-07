import { FormattedMessage } from 'react-intl';

import { Loader } from '@components';
import { useTutorResponses } from '@hooks';

import { ResponseContainer } from './ResponseContainer';

export const ResponsesContainer = () => {
  const { data: responseIds, isLoading } = useTutorResponses();

  if (isLoading || !responseIds) return <Loader />;

  return (
    <div
      style={{
        display: 'flex',
        gap: '30px',
        flexWrap: 'wrap',
      }}
    >
      {responseIds.length !== 0 ? (
        responseIds.map((response) => {
          return (
            <ResponseContainer key={response.id} responseId={response.id} />
          );
        })
      ) : (
        <FormattedMessage id="responsesPage.noResponses" />
      )}
    </div>
  );
};
