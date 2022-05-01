import React, { useState, useEffect, useLayoutEffect } from 'react';

import { BiFilter } from 'react-icons/bi';
import { FormattedMessage } from 'react-intl';

import { Button, Card, Table } from '@components';
import {
  useLessons,
  useMenuAnimation,
  useSubjects,
  useTutorResponses,
} from '@hooks';

import {
  ControlPanel,
  FilterContainer,
  FilterGroup,
  LessonsBody,
  LessonsHeader,
  StyledContainer,
  StyledHr,
  Title,
  TableBody,
} from './styles';

type StitchesComponentProps = React.ComponentPropsWithoutRef<
  typeof StyledContainer
>;

export interface LessonsContainerProps extends StitchesComponentProps {
  title: string;
  home?: boolean;
  filter?: boolean;
  cards?: boolean;
  table?: boolean;
  respCards?: boolean;
}

export const LessonsContainer = ({
  title,
  home,
  filter,
  cards,
  table,
  respCards,
}: LessonsContainerProps) => {
  const [lessonStatus, setLessonStatus] = useState('pending');
  const { data, isLoading } = useLessons({ status: lessonStatus });
  const { data: responseData } = useTutorResponses();

  const [isFilterOn, setFilterOn] = useState(false);
  const [currentSubject, setCurrentSubject] = useState('all');
  const filterMenuRef = React.useRef<HTMLDivElement>(null);

  const { data: subjects } = useSubjects();

  const [filtersBySubjects, setFiltersBySubjects] = useState(['all']);

  // Available filters
  useEffect(() => {
    if (subjects)
      setFiltersBySubjects(['all', ...subjects.map((sub) => sub.name)]);
  }, [subjects]);

  const selectFilter = (subject: any) => {
    setCurrentSubject(subject);
  };

  const { menuAnimation: filterMenuAnimation } = useMenuAnimation();

  useLayoutEffect(() => {
    filterMenuAnimation(filterMenuRef, isFilterOn);
  }, [filterMenuAnimation, isFilterOn]);

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No lessons...</div>;
  if (!responseData) return <div>No responses...</div>;
  console.log(responseData);
  return (
    <StyledContainer>
      <LessonsHeader>
        <Title>
          <FormattedMessage id={title} />
        </Title>
        <StyledHr />
      </LessonsHeader>

      <ControlPanel>
        {home && (
          <div>
            <Button
              variant={lessonStatus === 'pending' ? 'primary' : 'secondary'}
              onClick={() => setLessonStatus('pending')}
            >
              <FormattedMessage id="lessons.upcoming" />
            </Button>
            <Button
              variant={lessonStatus === 'pending' ? 'secondary' : 'primary'}
              style={{
                marginLeft: '10px',
              }}
              onClick={() => setLessonStatus('requested')}
            >
              <FormattedMessage id="lessons.requests" />
            </Button>
          </div>
        )}
        {filter && (
          <div
            style={{
              marginLeft: '20px',
            }}
          >
            <Button
              style={{
                backgroundColor: 'white',
                color: '#10434E',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
              }}
              onClick={() => setFilterOn(!isFilterOn)}
            >
              <BiFilter size="20px" />
              <div style={{ marginLeft: '5px' }}>
                <FormattedMessage id="filter" />
              </div>
            </Button>
          </div>
        )}
      </ControlPanel>

      <FilterContainer ref={filterMenuRef}>
        <div style={{ margin: '10px 0 0 10px' }}>
          <FormattedMessage id="filter.subjects" />
        </div>
        <FilterGroup>
          {filtersBySubjects.map((filterName, i) => {
            return (
              <Button key={i} onClick={() => selectFilter(filterName)}>
                <FormattedMessage id={`subjects.${filterName}`} />
              </Button>
            );
          })}
        </FilterGroup>
      </FilterContainer>

      {cards && !responseData && (
        <LessonsBody style={{ height: '200px' }}>
          {data
            .filter(
              (lesson) =>
                currentSubject === 'all' ||
                lesson.subject.name === currentSubject
            )
            .map((lesson) => (
              <Card
                key={lesson.id}
                index={lesson.id}
                subject={lesson.subject.name}
                subfield={lesson.subfield}
                location={lesson.location}
                meetingType={lesson.type}
                dateAndTime={lesson.lessonTimeFrames[0].startTime}
                color={lesson.subject.color}
                lessonStatus={lesson.status}
                price={lesson.tutorResponses[0].price}
                responseStart={new Date()}
                responseEnd={new Date()}
                respCard={false}
              />
            ))}
        </LessonsBody>
      )}

      {cards && (
        <LessonsBody style={{ height: '200px' }}>
          {responseData.map((response) => (
            <Card
              key={response.lesson.id}
              index={response.lesson.id}
              subject={response.lesson.subject.name}
              subfield={response.lesson.subfield}
              location={response.lesson.location}
              meetingType={response.lesson.type}
              dateAndTime={response.tutorResponseTimeFrame.startTime}
              color={response.lesson.subject.color}
              lessonStatus={response.lesson.status}
              price={response.price}
              responseStart={
                new Date(response.tutorResponseTimeFrame.startTime)
              }
              responseEnd={new Date(response.tutorResponseTimeFrame.endTime)}
              respCard={respCards}
            />
          ))}
        </LessonsBody>
      )}

      {table && (
        <TableBody>
          <Table />
        </TableBody>
      )}
    </StyledContainer>
  );
};
