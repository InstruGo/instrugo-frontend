import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Rating } from '@mui/material';
import { useForm } from 'react-hook-form';
import { AiOutlineClockCircle, AiOutlineDollar } from 'react-icons/ai';
import { BsPerson, BsBookHalf } from 'react-icons/bs';
import { FormattedMessage } from 'react-intl';

import { Button, Input, Loader } from '@components';
import { useLesson, useRating } from '@hooks';
import { NewStudentRatingInputs, NewStudentRatingSchema } from '@types';

import {
  LessonDetailsContainer,
  LessonDetailsText,
  Row,
  Column,
  Title,
  CardText,
} from './styles';

interface LessonDetailsAfterProps {
  id: number;
}
export const LessonDetailsAfterStudent = (props: LessonDetailsAfterProps) => {
  const { data, isLoading } = useLesson(props.id);
  const rating = useRating(props.id);
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<NewStudentRatingInputs>({
    resolver: zodResolver(NewStudentRatingSchema),
  });

  const onSubmit = async (data: NewStudentRatingInputs) => {
    rating.mutate(data);
  };
  const [studentRating, setStudentRating] = useState(0);
  if (isLoading) {
    return <Loader />;
  }

  if (!(data?.finalStartTime && data?.finalEndTime)) {
    return <div>this lesson time not yet arranged...</div>;
  }

  const start = new Date(data?.finalStartTime);
  const end = new Date(data?.finalEndTime);

  const startMinutes =
    start.getMinutes() < 10 ? '0' + start.getMinutes() : start.getMinutes();
  const startHours =
    start.getHours() < 10 ? '0' + start.getHours() : start.getHours();
  const endMinutes =
    end.getMinutes() < 10 ? '0' + end.getMinutes() : end.getMinutes();
  const endHours = end.getHours() < 10 ? '0' + end.getHours() : end.getHours();

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
              <BsBookHalf />
              <CardText>
                <FormattedMessage id={`subjects.${data?.subject.name}`} />
              </CardText>
              {' - '}
              <CardText>{data?.subfield}</CardText>
            </Row>
            <Row>
              <AiOutlineClockCircle />
              <CardText>
                {`${start.getDate()}\/${start.getMonth()}\/${start.getFullYear()}`}
                {',   '}
                {`${startHours}:${startMinutes} - ${endHours}:${endMinutes}`}
              </CardText>
            </Row>
            <Row>
              <BsPerson />
              <CardText>
                {data?.tutor.firstName + '  ' + data?.tutor.lastName}
              </CardText>
            </Row>

            <Row>
              <AiOutlineClockCircle />
              <CardText>
                {Math.floor(data?.duration / 60) +
                  ' h ' +
                  (data?.duration % 60) +
                  ' min'}{' '}
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
              <CardText>
                <FormattedMessage id="lessonDetailsAfter.total" />:{' '}
                {(data?.duration / 60) * data?.finalPrice + ' kn'}
              </CardText>
            </Row>
          </Column>

          <div
            style={{
              backgroundColor: '#0E353D',
              width: '2px',
              borderRadius: '6px',
            }}
          ></div>

          <Column style={{ justifyContent: 'flex-start', marginTop: '60px' }}>
            <Title>
              <FormattedMessage id="lessonDetailsAfter.rating" />:
            </Title>

            <Rating
              style={{ padding: '0px' }}
              name="simple-controlled"
              value={
                !!data?.rating.studentRating
                  ? data?.rating.studentRating
                  : studentRating
              }
              readOnly={!!data?.rating.studentRating}
              onChange={(event, newValue) => {
                if (newValue) {
                  setStudentRating(newValue);
                  setValue('studentRating', newValue);
                }
              }}
            />
            {!data?.rating.studentRating && (
              <Row style={{ justifyContent: 'center' }}>
                <Input
                  type="submit"
                  variant="authSubmit"
                  placeholderMsgId="lessonDetailsAfter.submitReview"
                />
              </Row>
            )}
            {data?.rating.tutorFeedback && (
              <>
                <Title>
                  <FormattedMessage id="lessonDetailsAfter.feedback" />:
                </Title>
                {data?.rating.tutorFeedback}
              </>
            )}
          </Column>
        </div>
      </LessonDetailsContainer>
    </>
  );
};
