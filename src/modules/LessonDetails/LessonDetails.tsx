import { useState } from 'react';

import { Rating } from '@mui/material';
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

  const start = new Date(data?.finalStartTime);
  const end = new Date(data?.finalEndTime);
  const disabled = new Date() < start;
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
      <LessonDetailsContainer>
        <div
          style={{ display: 'flex', justifyContent: 'center', height: '100%' }}
        >
          <Column>
            <Row>
              <AiOutlineClockCircle />
              <CardText>
                {`${start.getDate()}\/${start.getMonth()}\/${start.getFullYear()}`}
                {',   '}
                {`${startHours}:${startMinutes} - ${endHours}:${endMinutes}`}
              </CardText>
            </Row>
            <Row>
              <MdOutlineMeetingRoom />
              <CardText>
                <FormattedMessage id={`meetingType.${data?.type}`} />
              </CardText>
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
              <CardText>
                <FormattedMessage id={`subjects.${data?.subject.name}`} />
              </CardText>
              {' - '}
              <CardText>{data?.subfield}</CardText>
            </Row>
            <Row>
              <FaGraduationCap />
              <CardText>
                <FormattedMessage
                  id={`educationLevel.${data?.educationLevel}`}
                />
              </CardText>
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
          <Column style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Title>
              <FormattedMessage id="newRequestForm.description" />:{' '}
            </Title>
            {data?.description}
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

            {data?.rating.tutorFeedback && (
              <>
                <Title>
                  <FormattedMessage id="lessonDetailsAfter.feedback" />:
                </Title>
                {data?.rating.tutorFeedback}
              </>
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
                  <Button
                    variant={disabled ? 'disabled' : 'primary'}
                    onClick={onFinishClick}
                    disabled={disabled}
                  >
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
