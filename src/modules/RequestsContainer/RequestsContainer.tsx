import { FormattedMessage } from 'react-intl';

import { Card } from '@components';
import { useLessonRequests } from '@hooks';

import {
  RequestsBody,
  LessonsHeader,
  StyledContainer,
  StyledHr,
  Title,
} from './styles';

export const RequestsContainer = () => {
  const { data, isLoading } = useLessonRequests();

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
        {data.map((lesson) => (
          <Card
            key={lesson.id}
            index={lesson.id}
            subject={lesson.subject.name}
            subfield={lesson.subfield}
            location={lesson.location}
            meetingType={lesson.type}
            dateAndTime={lesson.lessonTimeFrames[0].startTime}
            color={lesson.subject.color}
          />
        ))}
      </RequestsBody>
    </StyledContainer>
  );
};
