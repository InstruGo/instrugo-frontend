import { FormattedMessage } from 'react-intl';
import { AiOutlineClockCircle, AiOutlineDollar } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { Rating } from '@mui/material';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button, Input } from '@components';

import { useLesson } from '@hooks';
import {
  LessonDetailsContainer,
  LessonDetailsText,
  Row,
  Column,
  Title,
  CardText,
  TextBox,
} from './styles';
import { useCancelLesson } from '@hooks/useCancelLesson';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { newTutorFeedbackSchema, newTutorFeedbackInputs } from '@types';
import { useFeedback } from '@hooks/useFeedback';

interface LessonDetailsAfterProps {
  id: number;
  ratingId: number;
}
export const LessonDetailsAfter = (props: LessonDetailsAfterProps) => {
  const { data, isLoading } = useLesson(props.id);
  const feedback = useFeedback(props.ratingId);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<newTutorFeedbackInputs>({
    resolver: zodResolver(newTutorFeedbackSchema),
  });

  const onSubmit = async (data: newTutorFeedbackInputs) => {
    feedback.mutate(data);
  };
  if (isLoading) return <div>Loading...</div>;
  // if (!(data?.finalStartTime && data?.finalEndTime))
  //   return <div>this lesson time not yet arranged...</div>;

  // const lessonStart = new Date(data?.finalStartTime);
  // const lessonEnd = new Date(data?.finalEndTime);
  // let diffHours = lessonEnd.getHours() - lessonStart.getHours();
  // const diffMinutes = lessonEnd.getMinutes() - lessonStart.getMinutes();
  // if (diffMinutes < 0) diffHours--;
  return (
    <>
      <LessonDetailsText>
        <FormattedMessage id="lessonDetails.description" />
      </LessonDetailsText>
      <LessonDetailsContainer onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{ display: 'flex', justifyContent: 'center', height: '100%' }}
        >
          <Column>
            <Row>
              <BsPerson />
              <CardText>
                {/* {data?.tutor.firstName + '  ' + data?.tutor.lastName} */}
              </CardText>
            </Row>
            <Row>
              <AiOutlineClockCircle />
              <CardText>
                {/* {`${lessonStart.getDate()}\/${lessonStart.getMonth()}\/${lessonStart.getFullYear()}`}
                {',   '}
                {`${lessonStart.getHours()}:${lessonStart.getMinutes()} - ${lessonEnd.getHours()}:${lessonEnd.getMinutes()}`} */}
              </CardText>
            </Row>
            <Row>
              <AiOutlineDollar />
              <CardText>{data?.finalPrice + '  kn/h'}</CardText>
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
              <FormattedMessage id="lessonDetailsAfter.total" />: 240kn
            </Row>
            <Row style={{ justifyContent: 'center' }}>
              <Button
                // onClick={onCancel}
                style={{ backgroundColor: '#0E353D', width: '80px' }}
              >
                <FormattedMessage id="lessonDetailsAfter.pay"></FormattedMessage>
              </Button>
            </Row>
          </Column>
          <div
            style={{
              backgroundColor: '#0E353D',
              width: '2px',
              borderRadius: '6px',
            }}
          ></div>
          <Column style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Title style={{ paddingLeft: '100px' }}>
              <FormattedMessage id="lessonDetailsAfter.review" />:
            </Title>
            <TextBox {...register('tutorFeedback', { required: true })} />
            <Row style={{ justifyContent: 'center' }}>
              <Input
                type="submit"
                variant="authSubmit"
                placeholderMsgId="lessonDetailsAfter.submitR"
              />
            </Row>
          </Column>
        </div>
      </LessonDetailsContainer>
    </>
  );
};
