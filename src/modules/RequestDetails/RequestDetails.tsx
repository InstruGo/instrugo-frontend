import { FormattedMessage } from 'react-intl';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

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
import { TutorResponse } from '@components';

interface RequestDetailsProps {
  id: number;
}
export const RequestDetails = (props: RequestDetailsProps) => {
  const { data, isLoading } = useLesson(props.id);
  if (isLoading) return <div>Loading...</div>;
  const schedulerData: any = [
    // {
    //   startDate: '2018-11-01T09:45',
    //   endDate: '2018-11-01T11:00',
    //   title: 'Meeting',
    // },
    // {
    //   startDate: '2018-11-01T12:00',
    //   endDate: '2018-11-01T13:30',
    //   title: 'Go to a gym',
    // },
  ];
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
        <CalendarContainer>
          <Paper>
            <Scheduler data={schedulerData}>
              <ViewState currentDate={currentDate} />
              <WeekView startDayHour={5} endDayHour={23} cellDuration={60} />
              <Appointments />
            </Scheduler>
          </Paper>
        </CalendarContainer>
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
            <FieldDescription>
              <FormattedMessage id="newRequestForm.budget" />: {data?.budget}{' '}
              kn/h
            </FieldDescription>
          </Column>
          <Column>
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
          <Column>
            <FieldDescription>
              <FormattedMessage id="newRequestForm.availableDates" />:{' '}
            </FieldDescription>

            {data?.lessonTimeFrames.map(
              (timeFrame: { startTime: string; endTime: string }) => {
                const start = new Date(timeFrame.startTime);
                const end = new Date(timeFrame.endTime);
                const idx = data?.lessonTimeFrames.indexOf(timeFrame);
                return (
                  <FieldDescription key={idx}>
                    <Column>
                      {`${start.getDate()}\/${start.getMonth()}\/${start.getFullYear()}`}
                    </Column>
                    <Column>
                      {`${start.getHours()}:${start.getMinutes()} - ${end.getHours()}:${end.getMinutes()}`}
                    </Column>
                  </FieldDescription>
                );
              }
            )}
          </Column>
        </Row>
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
              index={response.id}
              firstName={response.tutor.firstName}
              lastName={response.tutor.lastName}
              avgRating={
                response.tutor.ratingsCount != 0
                  ? response.tutor.averageRating
                  : undefined
              }
              price={response.price}
              timeslots={response.tutorResponseTimeFrames}
            />
          );
        })}
      </RequestDetailsContainer>
    </>
  );
};
