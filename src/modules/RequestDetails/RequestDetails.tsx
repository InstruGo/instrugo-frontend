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
  FieldTitle,
  EditText,
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
              <FieldTitle>
                <FormattedMessage id="card.subject" />
              </FieldTitle>
              : <FormattedMessage id={`subjects.${data?.subject.name}`} />
            </FieldDescription>

            <FieldDescription>
              <FieldTitle>
                <FormattedMessage id="card.subfield" />
              </FieldTitle>
              : {data?.subfield}
            </FieldDescription>
            <FieldDescription>
              <FieldTitle>
                <FormattedMessage id="newRequestForm.educationLevel" />
              </FieldTitle>
              :{' '}
              <FormattedMessage id={`educationLevel.${data?.educationLevel}`} />
            </FieldDescription>

            <FieldDescription>
              <FieldTitle>
                <FormattedMessage id="newRequestForm.grade" />
              </FieldTitle>
              : {data?.grade}.
            </FieldDescription>
          </Column>
          <Column>
            <FieldDescription>
              <FieldTitle>
                <FormattedMessage id="newRequestForm.budget" />
              </FieldTitle>
              : {data?.budget} kn/h
            </FieldDescription>
            <FieldDescription>
              <FieldTitle>
                <FormattedMessage id="card.meetingType" />
              </FieldTitle>
              : <FormattedMessage id={`meetingType.${data?.type}`} />
            </FieldDescription>

            <FieldDescription>
              <FieldTitle>
                <FormattedMessage id="card.location" />
              </FieldTitle>
              : {data?.location}
            </FieldDescription>
            <FieldDescription>
              <FieldTitle>
                <FormattedMessage id="newRequestForm.description" />
              </FieldTitle>
              : {data?.description}
            </FieldDescription>
          </Column>
          <Column
            style={{
              justifyContent: 'center',
              alignItems: 'flex-start',
              maxWidth: '200px',
            }}
          >
            <Button
              variant="primary"
              onClick={() =>
                router.push({
                  pathname: '/student/edit-request/[id]',
                  query: { id: props.id },
                })
              }
            >
              <EditText>
                <FormattedMessage id="button.edit" />
              </EditText>
            </Button>
          </Column>
        </Row>
        <Row>
          <Column>
            <FieldDescription>
              <FieldTitle>
                <FormattedMessage id="newRequestForm.availableDates" />
              </FieldTitle>
              :{' '}
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
