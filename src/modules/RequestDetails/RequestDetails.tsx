import { FormattedMessage } from 'react-intl';

import { TutorResponse, Button, Calendar } from '@components';
import { useLesson } from '@hooks';
import { TimeFrame } from '@types';

import {
  RequestDetailsContainer,
  RequestDetailsText,
  Row,
  Column,
  FieldDescription,
  StyledHr,
  ResponsesHeader,
  Title,
  CalendarContainer,
} from './styles';
import { useRouter } from 'next/router';

interface RequestDetailsProps {
  id: number;
}

export const RequestDetails = (props: RequestDetailsProps) => {
  const { data, isLoading } = useLesson(props.id);
  const router = useRouter();

  if (isLoading || !data) return <div>Loading...</div>;
  const timeFrames: { timeFrame: TimeFrame; color: string; title: string }[] =
    [];
  data?.lessonTimeFrames.map((timeFrame) =>
    timeFrames.push({
      timeFrame: timeFrame,
      color: 'rgba(63, 178, 193, 0.85)',
      title: 'Available timeslot',
    })
  );

  return (
    <>
      <RequestDetailsText>
        <FormattedMessage id="requestDetails.description" />
      </RequestDetailsText>
      <RequestDetailsContainer>
        <Row>
          <Column>
            <FieldDescription>
              <FormattedMessage id="card.subject" />: {data?.subject.name}
            </FieldDescription>

            <FieldDescription>
              <FormattedMessage id="card.subfield" />: {data?.subfield}
            </FieldDescription>
            <FieldDescription>
              <FormattedMessage id="newRequestForm.educationLevel" />:{' '}
              {data?.educationLevel}
            </FieldDescription>

            <FieldDescription>
              <FormattedMessage id="newRequestForm.grade" />: {data?.grade}.
            </FieldDescription>
          </Column>
          <Column>
            <FieldDescription>
              <FormattedMessage id="newRequestForm.budget" />: {data?.budget}{' '}
              kn/h
            </FieldDescription>
            <FieldDescription>
              <FormattedMessage id="card.meetingType" />: {data?.type}
            </FieldDescription>

            <FieldDescription>
              <FormattedMessage id="card.location" />: {data?.location}
            </FieldDescription>
            <FieldDescription>
              <FormattedMessage id="newRequestForm.description" />:{' '}
              {data?.description}
            </FieldDescription>
          </Column>
          <Column style={{ justifyContent: 'center', maxWidth: '100px' }}>
            <Button
              variant="primary"
              onClick={() =>
                router.push({
                  pathname: '/student/edit-request/[id]',
                  query: { id: props.id },
                })
              }
            >
              <FormattedMessage id="button.edit" />
            </Button>
          </Column>
        </Row>
        <Row>
          <Column>
            <FieldDescription>
              <FormattedMessage id="newRequestForm.availableDates" />:{' '}
            </FieldDescription>
          </Column>
          <Column />
          <Column style={{ maxWidth: '100px' }} />
        </Row>
        <CalendarContainer>
          <Calendar timeFrames={timeFrames} />
        </CalendarContainer>
        <ResponsesHeader>
          <Title>
            <FormattedMessage id="requestDetails.tutorResponses" />
          </Title>

          <StyledHr />
        </ResponsesHeader>
        {data?.tutorResponses.map((response) => {
          return (
            <TutorResponse
              key={response.id}
              lessonId={data?.id}
              index={response.id}
              firstName={response.tutor.firstName}
              lastName={response.tutor.lastName}
              avgRating={
                response.tutor.ratingsCount != 0
                  ? parseInt(response.tutor.averageRating)
                  : undefined
              }
              price={response.price}
              timeFrame={response.tutorResponseTimeFrame}
            />
          );
        })}
      </RequestDetailsContainer>
    </>
  );
};
