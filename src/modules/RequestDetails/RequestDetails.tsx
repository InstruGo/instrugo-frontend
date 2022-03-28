import { FormattedMessage } from 'react-intl';

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
} from './styles';

interface RequestDetailsProps {
  id: number;
}
export const RequestDetails = (props: RequestDetailsProps) => {
  const { data, isLoading, refetch } = useLesson(props.id);
  if (isLoading) return <div>Loading...</div>;
  if (refetch) {
    refetch();
  }
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
                const end = new Date(timeFrame.startTime);
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
      </RequestDetailsContainer>
    </>
  );
};
