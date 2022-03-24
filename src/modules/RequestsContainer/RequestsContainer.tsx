import { FormattedMessage } from 'react-intl';

import { Button, Card } from '@components';
import { useUpcomingLessons } from '@hooks';

import {
  LessonsBody,
  LessonsHeader,
  StyledContainer,
  StyledHr,
  Title,
} from './styles';

export const LessonsContainer = () => {
  const { data, isLoading } = useUpcomingLessons();

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No lessons...</div>;

  return (
    <StyledContainer>
      <LessonsHeader>
        <Title>
          <FormattedMessage id="student.request.requests" />
        </Title>
        <StyledHr />
      </LessonsHeader>

      <LessonsBody style={{ height: '200px' }}>
        {data.map((lesson) => (
          <Card
            key={lesson.id}
            subject={lesson.subject.name}
            subfield={lesson.subfield}
            location={lesson.location}
            meetingType={lesson.type}
            dateAndTime={lesson.lessonTimeFrames[0].startTime}
          />
        ))}
      </LessonsBody>
    </StyledContainer>
  );
};
