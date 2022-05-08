import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { AiOutlineClockCircle, AiOutlineDollar } from 'react-icons/ai';
import { BsPerson, BsBookHalf } from 'react-icons/bs';
import { FormattedMessage } from 'react-intl';
import { Rating } from '@mui/material';

import { Button, Input, Loader } from '@components';
import { useLesson, useFeedback } from '@hooks';
import { NewTutorFeedbackSchema, NewTutorFeedbackInputs } from '@types';

import {
  LessonDetailsContainer,
  LessonDetailsText,
  Row,
  Column,
  Title,
  CardText,
  TextBox,
} from './styles';

interface LessonDetailsAfterProps {
  id: number;
}
export const LessonDetailsAfterTutor = (props: LessonDetailsAfterProps) => {
  const { data, isLoading } = useLesson(props.id);
  const feedback = useFeedback(props.id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewTutorFeedbackInputs>({
    resolver: zodResolver(NewTutorFeedbackSchema),
  });

  const onSubmit = async (data: NewTutorFeedbackInputs) => {
    feedback.mutate(data);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!(data?.finalStartTime && data?.finalEndTime))
    return <div>this lesson time not yet arranged...</div>;

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
                {data?.student.firstName + '  ' + data?.student.lastName}
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
          </Column>
          <div
            style={{
              backgroundColor: '#0E353D',
              width: '2px',
              borderRadius: '6px',
            }}
          ></div>
          <Column style={{ justifyContent: 'flex-start', marginTop: '60px' }}>
            {data?.rating.studentRating && (
              <>
                <Title>
                  <FormattedMessage id="lessonDetailsAfter.studentRating" />:{' '}
                </Title>

                <Rating
                  style={{ padding: '0px' }}
                  name="simple-controlled"
                  value={data?.rating.studentRating}
                  readOnly
                />
              </>
            )}
            <Title>
              <FormattedMessage id="lessonDetailsAfter.review" />:
            </Title>
            {data?.rating.tutorFeedback ? (
              data?.rating.tutorFeedback
            ) : (
              <div>
                <TextBox {...register('tutorFeedback', { required: true })} />
                <Row style={{ justifyContent: 'center' }}>
                  <Input
                    type="submit"
                    variant="authSubmit"
                    placeholderMsgId="lessonDetailsAfter.submitReview"
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
