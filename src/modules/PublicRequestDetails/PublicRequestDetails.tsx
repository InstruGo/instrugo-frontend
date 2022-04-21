import { useRouter } from 'next/router';

import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import Paper from '@mui/material/Paper';
import { FormattedMessage } from 'react-intl';

import { useLesson } from '@hooks';
import { NewTutorResponseForm } from '@modules/TutorResponseForm/TutorResponseForm';

import {
  RequestDetailsContainer,
  RequestDetailsText,
  Row,
  Column,
  FieldDescription,
  ResponseHeader,
  Title,
  CalendarContainer,
} from './styles';

interface RequestDetailsProps {
  id: number;
}

export const PublicRequestDetails = (props: RequestDetailsProps) => {
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
              {data?.level}
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
        </Row>
        <Row>
          <Column>
            <FieldDescription>
              <FormattedMessage id="newRequestForm.availableDates" />:{' '}
            </FieldDescription>
          </Column>
          <Column />
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
        <ResponseHeader>
          <Title>
            <FormattedMessage id="requestDetails.responseForm" />
          </Title>
        </ResponseHeader>
        <NewTutorResponseForm
          onFinish={() => {
            router.push('/tutor/requests'); //change to tutor responses when page is made
          }}
          lessonId={props.id}
        />
      </RequestDetailsContainer>
    </>
  );
};
