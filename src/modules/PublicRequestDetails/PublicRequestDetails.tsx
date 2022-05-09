import { useRouter } from 'next/router';

import { FormattedMessage } from 'react-intl';

import { Calendar, Loader } from '@components';
import { useLesson } from '@hooks';
import { NewTutorResponseForm } from '@modules';
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
  FieldTitle,
} from './styles';

interface RequestDetailsProps {
  id: number;
}

export const PublicRequestDetails = ({ id }: RequestDetailsProps) => {
  const router = useRouter();
  const { data, isLoading } = useLesson(id);

  if (isLoading || !data) {
    return <Loader />;
  }

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
            <FieldDescription style={{ alignItems: 'flex-start' }}>
              <FieldTitle>
                <FormattedMessage id="newRequestForm.description" />
              </FieldTitle>
              : {data?.description}
            </FieldDescription>
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
        </Row>
        <CalendarContainer>
          <Calendar requestTimeframes={timeFrames} />
        </CalendarContainer>
        <ResponseHeader>
          <Title>
            <FormattedMessage id="requestDetails.responseForm" />
          </Title>
        </ResponseHeader>
        <NewTutorResponseForm
          onFinish={() => {
            router.push('/tutor/responses');
          }}
          lessonId={id}
          lessonTimeFrames={data?.lessonTimeFrames}
        />
      </RequestDetailsContainer>
    </>
  );
};
