import { useRouter } from 'next/router';

import { FormattedMessage } from 'react-intl';

import {
  TutorResponse,
  Button,
  Calendar,
  Loader,
  TitledSection,
} from '@components';
import { useLesson } from '@hooks';
import { TimeFrame } from '@types';

import {
  RequestDetailsContainer,
  RequestDetailsText,
  Row,
  Column,
  FieldDescription,
  CalendarContainer,
  FieldTitle,
  EditText,
  RequestDetailsWrapper,
  ResponseChildren,
} from './styles';

interface RequestDetailsProps {
  id: number;
}

export const RequestDetails = (props: RequestDetailsProps) => {
  const router = useRouter();
  const { data, isLoading } = useLesson(props.id);

  const timeFrames: { timeFrame: TimeFrame; color: string; title: string }[] =
    [];

  data?.lessonTimeFrames.map((timeFrame) =>
    timeFrames.push({
      timeFrame: timeFrame,
      color: 'rgba(63, 178, 193, 0.85)',
      title: 'Available timeslot',
    })
  );

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <div>No details for this lesson.</div>;
  }

  return (
    <RequestDetailsWrapper>
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

          <div style={{}}>
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
          </div>
        </Row>

        <div
          style={{
            fontSize: '22px',
            fontWeight: 'bold',
            width: '100%',
            marginTop: '40px',
          }}
        >
          <FormattedMessage id="newRequestForm.availableDates" />:
        </div>

        <CalendarContainer>
          <Calendar requestTimeframes={timeFrames} />
        </CalendarContainer>

        <div style={{ width: '100%', marginTop: '50px' }}>
          <TitledSection titleMsgId="requestDetails.tutorResponses">
            <ResponseChildren>
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
            </ResponseChildren>
          </TitledSection>
        </div>
      </RequestDetailsContainer>
    </RequestDetailsWrapper>
  );
};
