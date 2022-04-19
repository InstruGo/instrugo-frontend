import React from 'react';

import { BiFilter } from 'react-icons/bi';
import { FormattedMessage } from 'react-intl';

import { Button, Card } from '@components';
import { useLessons } from '@hooks';

import {
  ControlPanel,
  FilterContainer,
  FilterGroup,
  LessonsBody,
  LessonsHeader,
  StyledContainer,
  StyledHr,
  Title,
} from './styles';

export const LessonsContainer = () => {
  const [lessonStatus, setLessonStatus] = React.useState('Pending');
  const { data, isLoading } = useLessons(lessonStatus);

  const [isFilterOn, setFilterOn] = React.useState(false);
  const [currentSubject, setCurrentSubject] = React.useState<string>('all');
  const filterMenuRef = React.useRef<HTMLDivElement>(null);

  // Available filters
  const filtersBySubjects = ['all', 'math', 'physics', 'sociology'];

  const selectFilter = (subject: any) => {
    setCurrentSubject(subject);
  };

  // Menu accordion animations
  React.useLayoutEffect(() => {
    if (filterMenuRef.current) {
      let menuContainer = filterMenuRef.current;
      menuContainer.style.transition = '';
      let rect = menuContainer.getBoundingClientRect();

      // Remember start height
      let startHeight = rect.height;

      menuContainer.style.height = isFilterOn ? 'auto' : '0';
      rect = menuContainer.getBoundingClientRect();

      // Remember end height
      let endHeight = rect.height;

      // Set to start height
      menuContainer.style.height = `${startHeight}px`;

      requestAnimationFrame(() => {
        // Move to end height
        menuContainer.style.height = `${endHeight}px`;
        menuContainer.style.transition = 'height 0.3s';
      });
    }
  }, [isFilterOn]);

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No lessons...</div>;

  console.log(data);

  return (
    <StyledContainer>
      <LessonsHeader>
        <Title>
          <FormattedMessage id="home.lessons" />
        </Title>
        <StyledHr />
      </LessonsHeader>

      <ControlPanel>
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

      <LessonsBody>
        {data
          .filter(
            (lesson) =>
              currentSubject === 'all' || lesson.subject.name === currentSubject
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
            />
          ))}
      </LessonsBody>
    </StyledContainer>
  );
};
