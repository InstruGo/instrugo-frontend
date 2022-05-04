import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { AiOutlineClockCircle, AiOutlineDollar } from 'react-icons/ai';
import { FaGraduationCap } from 'react-icons/fa';
import { GoBook } from 'react-icons/go';
import { MdOutlineMeetingRoom, MdOutlineLocationOn } from 'react-icons/md';
import { FormattedMessage } from 'react-intl';

import { Modal } from '@components';
import { useUserContext } from '@hooks';
import {
  LessonDetails,
  LessonDetailsAfterStudent,
  LessonDetailsAfterTutor,
} from '@modules';
import { Lesson, TutorResponse } from '@types';

import {
  CardText,
  CardHeader,
  CardBody,
  CardItem,
  CardStyle,
  CardContainer,
  Row,
} from './styles';

type StitchesComponentProps = React.ComponentPropsWithoutRef<typeof CardStyle>;

export interface CardProps extends StitchesComponentProps {
  lesson: Lesson;
  response?: TutorResponse;
}

export const LessonCard = ({ lesson, response }: CardProps) => {
  const router = useRouter();

  const { user } = useUserContext();

  const [showLessonDetailsModal, setLessonDetailsModal] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    if (lesson.status !== 'requested') setLessonDetailsModal(true);
    else {
      if (user) {
        router.push({
          pathname: `/${user.role}/request-details/[id]`,
          query: { id: lesson.id },
        });
      }
    }
  };

  const lessonTime =
    lesson.status === 'completed'
      ? lesson.finalStartTime
      : lesson.lessonTimeFrames[0].startTime;

  const hasTimeFrames =
    lesson.lessonTimeFrames && lesson.lessonTimeFrames.length !== 0;

  const responseStartDate = response
    ? new Date(response.tutorResponseTimeFrame.startTime)
    : undefined;
  const responseEndDate = response
    ? new Date(response.tutorResponseTimeFrame.endTime)
    : undefined;

  const responseDateDisplay = responseStartDate
    ? `${responseStartDate.getDate()}\/${responseStartDate.getMonth()}\/${responseStartDate.getFullYear()}`
    : undefined;
  const responseTimeIntervalDisplay =
    responseStartDate && responseEndDate
      ? `${responseStartDate.getHours()}:${responseStartDate.getMinutes()} - ${responseEndDate.getHours()}:${responseEndDate.getMinutes()}`
      : undefined;

  return (
    <div>
      <CardContainer onClick={handleCardClick}>
        <CardStyle style={{ borderColor: lesson.subject.color }}>
          <CardHeader
            style={{
              backgroundColor: lesson.subject.color,
              borderColor: lesson.subject.color,
            }}
          >
            <div style={{ textTransform: 'capitalize' }}>
              <FormattedMessage id={`subjects.${lesson.subject.name}`} />
            </div>
            <div
              style={{
                fontSize: '12px',
                color: '#555',
                border: '1px solid white',
                padding: '5px 10px',
                borderRadius: '100px',
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              {lesson.status}
            </div>
          </CardHeader>

          <CardBody>
            <CardItem>
              <AiOutlineClockCircle />
              <CardText>
                {new Intl.DateTimeFormat('en-GB', {
                  year: 'numeric',
                  month: 'long',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: false,
                }).format(new Date(lessonTime))}
              </CardText>
            </CardItem>

            <CardItem>
              <GoBook />
              <CardText>{lesson.subfield}</CardText>
            </CardItem>
            <CardItem>
              <MdOutlineMeetingRoom />
              <CardText>{lesson.type}</CardText>
            </CardItem>
            <CardItem>
              <MdOutlineLocationOn />
              <CardText>{lesson.location}</CardText>
            </CardItem>

            {lesson.grade && lesson.educationLevel && (
              <CardItem>
                <FaGraduationCap />
                <CardText>
                  <FormattedMessage
                    id={`educationLevel.${lesson.educationLevel}`}
                  />
                  {`, ${lesson.grade}. `} <FormattedMessage id="card.grade" />
                </CardText>
              </CardItem>
            )}

            {response && (
              <>
                <Row
                  style={{
                    backgroundColor: '#0E353D',
                    height: '2px',
                    width: '250px',
                    padding: '0',
                  }}
                ></Row>
                <CardItem>
                  <AiOutlineClockCircle />
                  <CardText>
                    {responseDateDisplay}
                    {',   '}
                    {responseTimeIntervalDisplay}
                  </CardText>
                </CardItem>
                <CardItem>
                  <AiOutlineDollar />
                  <CardText>{lesson.budget + ' kn'}</CardText>
                </CardItem>
              </>
            )}
          </CardBody>
        </CardStyle>
      </CardContainer>

      <Modal
        shouldShow={showLessonDetailsModal}
        closeAction={() => setLessonDetailsModal(false)}
      >
        {lesson.status === 'completed' && user?.role === 'tutor' && (
          <LessonDetailsAfterTutor id={lesson.id} ratingId={1} />
        )}
        {lesson.status === 'completed' && user?.role === 'student' && (
          <LessonDetailsAfterStudent id={lesson.id} ratingId={1} />
        )}
        {lesson.status === 'pending' && <LessonDetails id={lesson.id} />}
      </Modal>
    </div>
  );
};
