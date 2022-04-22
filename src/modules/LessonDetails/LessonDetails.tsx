import { AiOutlineClockCircle, AiOutlineDollar } from 'react-icons/ai';
import { BsPerson, BsBookHalf } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { MdOutlineMeetingRoom, MdOutlineLocationOn } from 'react-icons/md';
import { FormattedMessage } from 'react-intl';

import { Button } from '@components';
import { useLesson } from '@hooks';
import { useCancelLesson } from '@hooks/useCancelLesson';

import {
  LessonDetailsContainer,
  LessonDetailsText,
  Row,
  Column,
  Title,
  CardText,
} from './styles';

interface LessonDetailsProps {
  id: number;
}
export const LessonDetails = (props: LessonDetailsProps) => {
  const { data, isLoading } = useLesson(props.id);
  const cancelLesson = useCancelLesson(props.id);
  const onCancel = async () => {
    const result = await cancelLesson.mutate(props.id);
  };
  if (isLoading) return <div>Loading...</div>;
  if (!(data?.finalStartTime && data?.finalEndTime))
    return <div>Lesson time not yet arranged...</div>;

  const lessonStart = new Date(data?.finalStartTime);
  const lessonEnd = new Date(data?.finalEndTime);

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
              <CardText>
                {data?.tutor.firstName + '  ' + data?.tutor.lastName}
              </CardText>
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
              <CardText>{data?.level}</CardText>
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
            <Column
              style={{
                height: '100%',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}
            >
              <Button onClick={onCancel} style={{ backgroundColor: 'red' }}>
                <FormattedMessage id="lessonDetails.cancelLesson"></FormattedMessage>
              </Button>
            </Column>
          </Column>
        </div>
      </LessonDetailsContainer>
    </>
  );
};
