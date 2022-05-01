import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import Paper from '@mui/material/Paper';
import { FormattedMessage } from 'react-intl';

import { TutorResponse, Button } from '@components';
import { useLesson } from '@hooks';

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

  if (isLoading) return <div>Loading...</div>;

  const schedulerData: any = [];

  data?.lessonTimeFrames.map(
    (timeFrame: { startTime: string; endTime: string }) => {
      const start = new Date(timeFrame.startTime);
      const end = new Date(timeFrame.endTime);
      schedulerData.push({
        startDate: start.toString(),
        endDate: end.toString(),
        title: 'Available timeslot',
      });
    }
  );
  const currentDate = schedulerData[0].startDate;

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
          <Paper>
            <Scheduler data={schedulerData}>
              <ViewState currentDate={currentDate} />
              <WeekView startDayHour={5} endDayHour={23} cellDuration={120} />
              <Appointments />
            </Scheduler>
          </Paper>
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
