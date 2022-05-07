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
  CardContainer,
  ResponseSeparator,
} from './styles';
import lessons from 'pages/student/lessons';
import { LessonsContainer } from '@modules/LessonsContainer/LessonsContainer';

type StitchesComponentProps = React.ComponentPropsWithoutRef<
  typeof CardContainer
>;

export interface CardProps extends StitchesComponentProps {
  lesson: Lesson;
  response?: TutorResponse;
}

export const LessonCard = ({ lesson, response }: CardProps) => {
  const router = useRouter();
  const { user } = useUserContext();

  const [showLessonDetailsModal, setLessonDetailsModal] = useState(false);

  const handleCardClick = () => {
    if (lesson.status !== 'requested') setLessonDetailsModal(true);
    else {
      let activeRole = 'student';

      if (router.pathname.startsWith('/tutor')) {
        activeRole = 'tutor';
      }

      router.push({
        pathname: `/${activeRole}/request-details/[id]`,
        query: { id: lesson.id },
      });
    }
  };

  const lessonTime =
    lesson.status !== 'requested' ? lesson.finalStartTime : undefined;

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
      <CardContainer
        style={{ borderColor: lesson.subject.color }}
        onClick={handleCardClick}
      >
        <CardHeader
          style={{
            backgroundColor: lesson.subject.color,
            borderColor: lesson.subject.color,
          }}
        >
          <FormattedMessage id={`subjects.${lesson.subject.name}`} />
        </CardHeader>

        <CardBody>
          {lessonTime && (
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
          )}

          <CardItem>
            <GoBook />
            <CardText>{lesson.subfield}</CardText>
          </CardItem>

          <CardItem>
            <MdOutlineMeetingRoom />
            <CardText>
              <FormattedMessage id={`meetingType.${lesson.type}`} />
            </CardText>
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
              <ResponseSeparator
                style={{ backgroundColor: lesson.subject.color }}
              />

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
                <CardText>{response.price + ' kn'}</CardText>
              </CardItem>
            </>
          )}
        </CardBody>
      </CardContainer>

      <Modal
        shouldShow={showLessonDetailsModal}
        closeAction={() => setLessonDetailsModal(false)}
      >
        {lesson.status === 'completed' &&
          router.pathname.startsWith('/tutor') && (
            <LessonDetailsAfterTutor id={lesson.id} />
          )}
        {lesson.status === 'completed' &&
          router.pathname.startsWith('/student') && (
            <LessonDetailsAfterStudent id={lesson.id} />
          )}
        {lesson.status === 'pending' && <LessonDetails id={lesson.id} />}
      </Modal>
    </div>
  );
};
