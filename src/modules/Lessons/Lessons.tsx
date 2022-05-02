import React, { useState, useLayoutEffect } from 'react';

import { BiFilter } from 'react-icons/bi';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button, Dropdown, Table, Calendar } from '@components';
import { useMenuAnimation, useSubjects, useTutorResponses } from '@hooks';
import { LessonsContainer, NewRequestButton } from '@modules';
import { LessonFilter, MeetingType } from '@types';

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

export const Lessons = ({
  title,
  home,
  filter,
  cards,
  table,
  respCards,
}: LessonsContainerProps) => {
  const intl = useIntl();

  //const { data: responseData } = useTutorResponses();

  const filterMenuRef = React.useRef<HTMLDivElement>(null);
  const [isFilterMenuExpanded, setFilterMenuExpanded] = useState(false);

  // Filter states

  // Status
  const [lessonStatus, setLessonStatus] = useState('requested');

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

  // Filter menu animation
  const { menuAnimation: filterMenuAnimation } = useMenuAnimation();

  useLayoutEffect(() => {
    filterMenuAnimation(filterMenuRef, isFilterMenuExpanded);
  }, [filterMenuAnimation, isFilterMenuExpanded]);

  //if (!responseData) return <div>No responses...</div>;

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

      {/* {cards &&
        !respCards &&
        (lessonStatus !== 'pending' ? (
          <LessonsBody style={{ height: '200px' }}>
            {data.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </LessonsBody>
        ) : (
          <Calendar
            timeFrames={data.map((lesson) => {
              const timeFrame = {
                id: 0,
                startTime: lesson.finalStartTime,
                endTime: lesson.finalEndTime,
              };
              return {
                timeFrame: timeFrame,
                color: lesson.subject.color,
                title: lesson.subject.name,
              };
            })}
          />
        ))} */}

      {cards && (
        <LessonsContainer
          filter={
            {
              status: lessonStatus,
              subjectIds: currentSubjectId ? [currentSubjectId] : undefined,
              type: currentMeetingType as MeetingType,
            } as LessonFilter
          }
        />
      )}

      {table && (
        <TableBody>
          <Table />
        </TableBody>
      )}
    </StyledContainer>
  );
};
