import { useRouter } from 'next/router';
import { useState } from 'react';

import { AiOutlineClockCircle, AiOutlineDollar } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { FormattedMessage } from 'react-intl';

import { Button, Loader } from '@components';
import { useLesson, useResolveLesson } from '@hooks';

import { LessonDetailsText, Row, Column, CardText } from './styles';

interface LessonDetailsPaymentProps {
  id: number;
  responseId: number;
}
export const LessonDetailsPayment = (props: LessonDetailsPaymentProps) => {
  const { data, isLoading } = useLesson(props.id);
  const acceptResponse = useResolveLesson(props.id);
  const router = useRouter();

  const onAccept = async () => {
    acceptResponse.mutate(props.responseId);
    router.push('/student/home');
  };

  if (isLoading) {
    return <Loader />;
  }

  const tutorResponse = data?.tutorResponses.filter((response) => {
    return response.id === props.responseId;
  })[0];

  if (
    !(
      tutorResponse?.tutorResponseTimeFrame.startTime &&
      tutorResponse?.tutorResponseTimeFrame.endTime
    )
  ) {
    return <div>this lesson time not yet arranged...</div>;
  }

  const lessonStart = new Date(tutorResponse.tutorResponseTimeFrame.startTime);
  const lessonEnd = new Date(tutorResponse.tutorResponseTimeFrame.endTime);
  let diffHours = lessonEnd.getHours() - lessonStart.getHours();
  const diffMinutes = lessonEnd.getMinutes() - lessonStart.getMinutes();

  if (diffMinutes < 0) {
    diffHours--;
  }

  const totalHours = diffHours + diffMinutes / 60;

  return (
    <>
      <LessonDetailsText>
        <FormattedMessage id="lessonDetails.payment" />
      </LessonDetailsText>
      <div
        style={{ display: 'flex', justifyContent: 'center', height: '100%' }}
      >
        <Column>
          <Row>
            <BsPerson />
            <CardText>
              {tutorResponse.tutor.firstName +
                '  ' +
                tutorResponse.tutor.lastName}
            </CardText>
          </Row>
          <Row>
            <AiOutlineClockCircle />
            <CardText>{totalHours + ' h'} </CardText>
          </Row>
          <Row>
            <AiOutlineDollar />
            <CardText>{tutorResponse.price + '  kn/h'}</CardText>
          </Row>
          <Row
            style={{
              backgroundColor: '#0E353D',
              height: '2px',
              width: '300px',
              padding: '0',
            }}
          ></Row>
          <Row>
            <CardText>
              <FormattedMessage id="lessonDetailsAfter.total" />:{' '}
              {totalHours * tutorResponse.price + ' kn'}
            </CardText>
          </Row>
          <Row style={{ justifyContent: 'center' }}>
            <Button
              style={{ backgroundColor: '#0E353D', width: '80px' }}
              onClick={onAccept}
            >
              <FormattedMessage id="lessonDetailsAfter.pay"></FormattedMessage>
            </Button>
          </Row>
        </Column>
      </div>
    </>
  );
};
