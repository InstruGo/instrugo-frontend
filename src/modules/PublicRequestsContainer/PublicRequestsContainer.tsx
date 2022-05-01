import { FormattedMessage } from 'react-intl';

import { Card } from '@components';
import { usePublicRequests, useUserContext } from '@hooks';

import {
  RequestsBody,
  LessonsHeader,
  StyledContainer,
  StyledHr,
  Title,
} from './styles';

interface publicRequestProps {
  title: string;
}
export const PublicRequestsContainer = ({ title }: publicRequestProps) => {
  const { user } = useUserContext();
  const subjectIds: number[] = [];
  if (user) {
    user.subjects.map((subject) => subjectIds.push(subject.id));
  }
  const filter = subjectIds !== [] ? { subjectIds: subjectIds } : {};
  const { data, isLoading } = usePublicRequests(filter);

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No public requests...</div>;

  return (
    <StyledContainer>
      <LessonsHeader>
        <Title>
          <FormattedMessage id={title} />
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
            grade={lesson.grade}
            educationLvl={lesson.educationLevel}
            color={lesson.subject.color}
            lessonStatus={lesson.status}
            forTutors={true}
          />
        ))}
      </RequestsBody>
    </StyledContainer>
  );
};
