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

  const lessonStart = new Date(data?.finalStartTime);
  const lessonEnd = new Date(data?.finalEndTime);
  let diffHours = lessonEnd.getHours() - lessonStart.getHours();
  const diffMinutes = lessonEnd.getMinutes() - lessonStart.getMinutes();

  if (diffMinutes < 0) {
    diffHours--;
  }

  const totalHours = diffHours + diffMinutes / 60;

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
              <CardText>{data?.subject.name}</CardText>
              {' - '}
              <CardText>{data?.subfield}</CardText>
            </Row>
            <Row>
              <AiOutlineClockCircle />
              <CardText>
                {`${lessonStart.getDate()}\/${lessonStart.getMonth()}\/${lessonStart.getFullYear()}`}
                {',   '}
                {`${lessonStart.getHours()}:${lessonStart.getMinutes()} - ${lessonEnd.getHours()}:${lessonEnd.getMinutes()}`}
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
              <CardText>{totalHours + ' h'} </CardText>
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
                {totalHours * data?.finalPrice + ' kn'}
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

          <Column style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Title style={{ paddingLeft: '100px', paddingBottom: '30px' }}>
              <FormattedMessage id="lessonDetailsAfter.rating" />:
            </Title>
            {data?.rating.studentRating ? (
              data?.rating.studentRating
            ) : (
              <div>
                <Rating
                  style={{ padding: '0px' }}
                  name="simple-controlled"
                  value={studentRating}
                  onChange={(event, newValue) => {
                    if (newValue) {
                      setStudentRating(newValue);
                      setValue('studentRating', newValue);
                    }
                  }}
                />

                <Row style={{ justifyContent: 'center' }}>
                  <Input
                    type="submit"
                    variant="authSubmit"
                    placeholderMsgId="lessonDetailsAfter.submitR"
                  />
                </Row>
              </div>
            )}
          </Column>
        </div>
      </LessonDetailsContainer>
    </>
  );
};
