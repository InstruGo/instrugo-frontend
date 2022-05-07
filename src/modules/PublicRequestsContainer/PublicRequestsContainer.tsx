import { FormattedMessage } from 'react-intl';

import { Loader } from '@components';
import { usePublicRequests, useUserContext } from '@hooks';
import { LessonCard } from '@modules/LessonCard/LessonCard';
import { LessonFilter } from '@types';
import { styled } from 'styles/stitches.config';

interface PublicRequestsContainerProps {
  filter?: LessonFilter;
}

export const PublicRequestsContainer = ({
  filter,
}: PublicRequestsContainerProps) => {
  const { user } = useUserContext();

  const subjectIds: number[] | undefined = user?.subjects.map(
    (subject) => subject.id
  );
  const defaultSubjectsFilter =
    subjectIds && subjectIds.length !== 0 ? { subjectIds } : {};

  const { data: requests, isLoading } = usePublicRequests({
    ...defaultSubjectsFilter,
    ...filter,
  });

  if (isLoading || !requests) return <Loader />;

  return (
    <StyledContainer>
      {requests.length !== 0 ? (
        requests.map((request) => {
          return <LessonCard key={request.id} lesson={request} />;
        })
      ) : (
        <FormattedMessage id="tutor.request.noRequests" />
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
