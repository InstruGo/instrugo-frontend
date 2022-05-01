import { useRouter } from 'next/router';

import { FormattedMessage } from 'react-intl';

import { useLesson } from '@hooks';
import { NewTutorResponseForm } from '@modules';
import { Calendar } from '@components';
import { TimeFrame } from '@types';

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
          <Calendar timeFrames={timeFrames} />
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
          lessonTimeFrames={data?.lessonTimeFrames}
        />
      </RequestDetailsContainer>
    </>
  );
};
