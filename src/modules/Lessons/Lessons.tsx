import React, { useState, useLayoutEffect } from 'react';

import { BiFilter } from 'react-icons/bi';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button, Card, Dropdown, Table } from '@components';
import { NewRequestButton } from '@modules';
import { MeetingType } from '@types';
import {
  useLessons,
  useMenuAnimation,
  useSubjects,
  useTutorResponses,
} from '@hooks';

import {
  ControlPanel,
  FilterMenuContainer,
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
  const intl = useIntl();
        
  const [lessonStatus, setLessonStatus] = useState('pending');
  const { data, isLoading } = useLessons({ status: lessonStatus });
  const { data: responseData } = useTutorResponses();

  const filterMenuRef = React.useRef<HTMLDivElement>(null);
  const [isFilterMenuExpanded, setFilterMenuExpanded] = useState(false);

  // Filter states

  // Status
  const [lessonStatus, setLessonStatus] = useState('pending');

  // Subjects
  const { data: subjects } = useSubjects();
  const subjectFilterOptions = [
    'all',
    ...(subjects?.map((sub) => sub.name) || []),
  ];
  const [currentSubjectId, setCurrentSubjectId] = useState<
    number | undefined
  >();

  // Meeting type
  const [currentMeetingType, setCurrentMeetingType] = useState<
    string | undefined
  >();
  const meetingTypeOptions = [
    { key: 'all', value: intl.formatMessage({ id: 'meetingType.all' }) },
    {
      key: 'in-person',
      value: intl.formatMessage({ id: 'meetingType.inPerson' }),
    },
    { key: 'online', value: intl.formatMessage({ id: 'meetingType.online' }) },
  ];

  // Filter handlers
  const handleSubjectSelect = (selectedSubject: string) => {
    if (selectedSubject === 'all') setCurrentSubjectId(undefined);
    else {
      // Find id of the selected subject name
      const selectedSubjectId = subjects?.find(
        (subject) => subject.name === selectedSubject
      )?.id;
      setCurrentSubjectId(selectedSubjectId);
    }
  };

  const handleMeetingTypeSelect = (selectedMeetingType: string) => {
    if (selectedMeetingType === 'all') setCurrentMeetingType(undefined);
    else setCurrentMeetingType(selectedMeetingType);
  };

  // Fetch lessons with given filter
  const { data, isLoading } = useLessons({
    status: lessonStatus,
    subjectIds: currentSubjectId ? [currentSubjectId] : undefined,
    type: currentMeetingType as MeetingType,
  });

  // Filter menu animation
  const { menuAnimation: filterMenuAnimation } = useMenuAnimation();

  useLayoutEffect(() => {
    filterMenuAnimation(filterMenuRef, isFilterMenuExpanded);
  }, [filterMenuAnimation, isFilterMenuExpanded]);

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No lessons...</div>;
  if (!responseData) return <div>No responses...</div>;
  
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
          <>
            <Button
              variant={lessonStatus === 'pending' ? 'primary' : 'secondary'}
              onClick={() => setLessonStatus('pending')}
            >
              <FormattedMessage id="lessons.upcoming" />
            </Button>
            <Button
              variant={lessonStatus === 'requested' ? 'primary' : 'secondary'}
              style={{
                marginLeft: '10px',
              }}
              onClick={() => setLessonStatus('requested')}
            >
              <FormattedMessage id="lessons.requests" />
            </Button>
            <Button
              variant={lessonStatus === 'completed' ? 'primary' : 'secondary'}
              style={{
                marginLeft: '10px',
              }}
              onClick={() => setLessonStatus('completed')}
            >
              <FormattedMessage id="lessons.recentlyFinished" />
            </Button>
          </>
        )}
        {filter && (
          <Button
            style={{
              backgroundColor: 'white',
              color: '#10434E',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              marginLeft: '10px',
              boxShadow: 'none',
            }}
            onClick={() => setFilterMenuExpanded(!isFilterMenuExpanded)}
          >
            <BiFilter size="20px" />
            <div style={{ marginLeft: '5px' }}>
              <FormattedMessage id="filter" />
            </div>
          </Button>
        )}
        <div
          style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}
        >
          <NewRequestButton />
        </div>
      </ControlPanel>

      <FilterMenuContainer ref={filterMenuRef}>
        <FilterGroup>
          <div>
            <FormattedMessage id="filter.subjects" />
          </div>
          <Dropdown
            options={subjectFilterOptions.map((filterName) => {
              return {
                key: filterName,
                value: intl.formatMessage({ id: `subjects.${filterName}` }),
              };
            })}
            onOptionSelect={handleSubjectSelect}
          />
        </FilterGroup>
        <FilterGroup>
          <div>
            <FormattedMessage id="lessons.titles.meetingType" />:
          </div>
          <Dropdown
            options={meetingTypeOptions}
            onOptionSelect={handleMeetingTypeSelect as any}
          />
        </FilterGroup>
      </FilterMenuContainer>

      {cards && !responseData && (
        <LessonsBody style={{ height: '200px' }}>
          {data
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
