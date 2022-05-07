import { useState } from 'react';

import { AiOutlineClockCircle, AiOutlineDollar } from 'react-icons/ai';
import { BsPerson, BsBookHalf } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { MdOutlineMeetingRoom, MdOutlineLocationOn } from 'react-icons/md';
import { FormattedMessage } from 'react-intl';

import { Button, Loader } from '@components';
import {
  useLesson,
  useCancelLesson,
  useCompleteLesson,
  useUserContext,
} from '@hooks';
import { PublicProfile } from '@modules';

import {
  LessonDetailsContainer,
  LessonDetailsText,
  Row,
  Column,
  Title,
  CardText,
  TutorLink,
} from './styles';

interface LessonDetailsProps {
  id: number;
}
export const LessonDetails = (props: LessonDetailsProps) => {
  const { data, isLoading } = useLesson(props.id);
  const cancelLesson = useCancelLesson(props.id);
  const finishLesson = useCompleteLesson(props.id);
  const { user } = useUserContext();
  const onCancel = async () => {
    const result = await cancelLesson.mutate(props.id);
  };

  const onFinishClick = () => {
    finishLesson.mutate();
  };

  const [showPublicProfile, setShowProfile] = useState(false);

  if (isLoading) {
    return <Loader />;
  }

  if (!(data?.finalStartTime && data?.finalEndTime))
    return <div>Lesson time not yet arranged...</div>;

  const lessonStart = new Date(data?.finalStartTime);
  const lessonEnd = new Date(data?.finalEndTime);
  const disabled = new Date() < lessonStart;
  return (
    <>
      <LessonDetailsText>
        <FormattedMessage id="lessonDetails.description" />
      </LessonDetailsText>
      <LessonDetailsContainer>
        <div
          style={{ display: 'flex', justifyContent: 'center', height: '100%' }}
        >
          <Column>
            <Row>
              <AiOutlineClockCircle />
              <CardText>
                {`${lessonStart.getDate()}\/${lessonStart.getMonth()}\/${lessonStart.getFullYear()}`}
                {',   '}
                {`${lessonStart.getHours()}:${lessonStart.getMinutes()} - ${lessonEnd.getHours()}:${lessonEnd.getMinutes()}`}
              </CardText>
            </Row>
            <Row>
              <MdOutlineMeetingRoom />
              <CardText>{data?.type}</CardText>
            </Row>
            <Row>
              <BsPerson />

              {user?.id === data?.student.id && (
                <CardText>
                  {' '}
                  <TutorLink onClick={() => setShowProfile(true)}>
                    {data?.tutor.firstName + '  ' + data?.tutor.lastName}
                  </TutorLink>
                  <PublicProfile
                    userId={data.tutor.id}
                    showProfile={showPublicProfile}
                    setShowProfile={setShowProfile}
                  />
                </CardText>
              )}
              {user?.id === data?.tutor.id && (
                <CardText>
                  {' '}
                  <TutorLink onClick={() => setShowProfile(true)}>
                    {data?.student.firstName + '  ' + data?.student.lastName}
                  </TutorLink>
                  <PublicProfile
                    userId={data.student.id}
                    showProfile={showPublicProfile}
                    setShowProfile={setShowProfile}
                  />
                </CardText>
              )}
            </Row>
            <Row>
              <AiOutlineDollar />
              <CardText>{data?.finalPrice + '  kn/h'}</CardText>
            </Row>
            <Row>
              <BsBookHalf />
              <CardText>{data?.subject.name}</CardText>
              {' - '}
              <CardText>{data?.subfield}</CardText>
            </Row>
            <Row>
              <FaGraduationCap />
              <CardText>{data?.educationLevel}</CardText>
            </Row>
            <Row>
              <MdOutlineLocationOn />
              <CardText>{data?.location}</CardText>
            </Row>
          </Column>
          <div
            style={{
              backgroundColor: '#0E353D',
              width: '2px',
              borderRadius: '6px',
            }}
          ></div>
          <Column style={{ justifyContent: 'flex-start' }}>
            <Title>
              <FormattedMessage id="newRequestForm.description" />:{' '}
            </Title>
            {data?.description}
            <Title>
              <FormattedMessage id="lessonDetailsAfter.studentRating" />:{' '}
              {data?.status === 'completed' && data?.rating.studentRating
                ? data?.rating.studentRating
                : 'No rating yet'}
            </Title>

            {data?.status === 'completed' && data?.rating.tutorFeedback && (
              <div>
                <Title>
                  <FormattedMessage id="lessonDetailsAfter.feedback" />:
                </Title>
                {data?.rating.tutorFeedback}
              </div>
            )}
            <Column
              style={{
                height: '100%',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}
            >
              {data?.status === 'pending' && user?.id === data?.student.id && (
                <Row style={{ justifyContent: 'space-evenly', width: '100%' }}>
                  <Button onClick={onFinishClick} disabled={disabled}>
                    <FormattedMessage id="lessonDetails.finishLesson"></FormattedMessage>
                  </Button>
                  <Button
                    onClick={onCancel}
                    style={{ backgroundColor: '#c23b22' }}
                  >
                    <FormattedMessage id="lessonDetails.cancelLesson"></FormattedMessage>
                  </Button>
                </Row>
              )}
            </Column>
          </Column>
        </div>
      </LessonDetailsContainer>
    </>
  );
};
