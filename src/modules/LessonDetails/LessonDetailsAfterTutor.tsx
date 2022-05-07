import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { AiOutlineClockCircle, AiOutlineDollar } from 'react-icons/ai';
import { BsPerson, BsBookHalf } from 'react-icons/bs';
import { FormattedMessage } from 'react-intl';

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

  const lessonStart = new Date(data?.finalStartTime);
  const lessonEnd = new Date(data?.finalEndTime);
  let diffHours = lessonEnd.getHours() - lessonStart.getHours();
  const diffMinutes = lessonEnd.getMinutes() - lessonStart.getMinutes();
  if (diffMinutes < 0) diffHours--;
  console.log(data);
  console.log(data.rating);
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
            <Row>
              <FormattedMessage id="lessonDetailsAfter.studentRating" />:{' '}
              {data?.rating.studentRating}/5
            </Row>
            <Title style={{ paddingLeft: '100px' }}>
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
