import React, { useState } from 'react';

import { BiFilter } from 'react-icons/bi';
import { FormattedMessage } from 'react-intl';

import { Button, Card, Table } from '@components';
import { useLessons, useMenuAnimation, useSubjects } from '@hooks';

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
}

export const LessonsContainer = ({
  title,
  home,
  filter,
  cards,
  table,
}: LessonsContainerProps) => {
  const [lessonStatus, setLessonStatus] = React.useState('Pending');
  const { data, isLoading } = useLessons({ status: lessonStatus });

  const [isFilterOn, setFilterOn] = React.useState(false);
  const [currentSubject, setCurrentSubject] = React.useState<string>('all');
  const filterMenuRef = React.useRef<HTMLDivElement>(null);

  const { data: subjects } = useSubjects();

  const [filtersBySubjects, setFiltersBySubjects] = useState(['all']);

  // Available filters
  React.useEffect(() => {
    if (subjects)
      setFiltersBySubjects(['all', ...subjects.map((sub) => sub.name)]);
  }, [subjects]);

  const selectFilter = (subject: any) => {
    setCurrentSubject(subject);
  };

  const { menuAnimation: filterMenuAnimation } = useMenuAnimation();
  React.useLayoutEffect(() => {
    filterMenuAnimation(filterMenuRef, isFilterOn);
  }, [filterMenuAnimation, isFilterOn]);

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No lessons...</div>;

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
              variant={lessonStatus === 'Pending' ? 'primary' : 'secondary'}
              onClick={() => setLessonStatus('Pending')}
            >
              <FormattedMessage id="lessons.upcoming" />
            </Button>
            <Button
              variant={lessonStatus === 'Pending' ? 'secondary' : 'primary'}
              style={{
                marginLeft: '10px',
              }}
              onClick={() => setLessonStatus('Requested')}
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

      {cards && (
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
