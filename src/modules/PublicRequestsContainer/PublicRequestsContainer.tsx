import { FormattedMessage } from 'react-intl';

import { Card } from '@components';
import { usePublicRequests } from '@hooks';

import {
  RequestsBody,
  LessonsHeader,
  StyledContainer,
  StyledHr,
  Title,
} from './styles';

export const PublicRequestsContainer = () => {
  const { data, isLoading } = usePublicRequests({});

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No public requests...</div>;

  return (
    <StyledContainer>
      <LessonsHeader>
        <Title>
          <FormattedMessage id="tutor.request.requests" />
        </Title>
        <StyledHr />
      </LessonsHeader>

      <RequestsBody style={{ height: '200px' }}>
        {data.map((lesson) => (
          <Card
            key={lesson.id}
            lessonStatus={lesson.status}
            index={lesson.id}
            subject={lesson.subject.name}
            subfield={lesson.subfield}
            location={lesson.location}
            meetingType={lesson.type}
            grade={lesson.grade}
            educationLvl={lesson.educationLevel}
            color={lesson.subject.color}
            forTutors={true}
            responseStart={
              new Date(
                lesson.tutorResponses[0].tutorResponseTimeFrame.startTime
              )
            }
            responseEnd={
              new Date(lesson.tutorResponses[0].tutorResponseTimeFrame.endTime)
            }
          />
        ))}
      </RequestsBody>
    </StyledContainer>
  );
};
