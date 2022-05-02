import { FormattedMessage } from 'react-intl';

import { useLessons } from '@hooks';
import { LessonCard } from '@modules';
import { NewRequestButton } from '@modules';

import {
  RequestsBody,
  LessonsHeader,
  StyledContainer,
  StyledHr,
  Title,
} from './styles';

export const RequestsContainer = () => {
  const { data, isLoading } = useLessons({ status: 'requested' });

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No requests...</div>;

  return (
    <StyledContainer>
      <LessonsHeader>
        <Title>
          <FormattedMessage id="student.request.requests" />
        </Title>
        <StyledHr />
      </LessonsHeader>

      <RequestsBody style={{ height: '200px' }}>
        {data.map((lesson) => {
          return <LessonCard key={lesson.id} lesson={lesson} />;
        })}
      </RequestsBody>

      <NewRequestButton />
    </StyledContainer>
  );
};
