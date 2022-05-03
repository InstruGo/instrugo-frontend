import React from 'react';

import { FormattedMessage } from 'react-intl';

import { Modal } from '@components';
import { useLessons } from '@hooks';
import { LessonDetails } from '@modules';
import { LessonFilter } from '@types';

import {
  TableHeader,
  TableBody,
  TableItem,
  TableStyle,
  TableTitles,
  TableData,
} from './styles';

type StitchesComponentProps = React.ComponentPropsWithoutRef<typeof TableStyle>;

export interface LessonsTableProps extends StitchesComponentProps {
  filter: LessonFilter;
}

export const LessonsTable = ({ filter }: LessonsTableProps) => {
  const { data: lessons, isLoading } = useLessons(filter);

  const [showLessonDetailsModal, setLessonDetailsModal] = React.useState(false);

  if (isLoading) return <div>Loading...</div>;
  if (!lessons) return <div>No completed lessons...</div>;

  return (
    <TableStyle>
      <TableBody>
        <TableHeader>
          <TableTitles style={{ borderTopLeftRadius: '8px' }}>
            <FormattedMessage id="lessons.titles.subject" />
          </TableTitles>
          <TableTitles>
            <FormattedMessage id="lessons.titles.subfield" />
          </TableTitles>
          <TableTitles>
            <FormattedMessage id="lessons.titles.dateAndTime" />
          </TableTitles>
          <TableTitles>
            <FormattedMessage id="lessons.titles.price" />
          </TableTitles>
          <TableTitles>
            <FormattedMessage id="lessons.titles.location" />
          </TableTitles>
          <TableTitles>
            <FormattedMessage id="lessons.titles.meetingType" />
          </TableTitles>
          <TableTitles>
            <FormattedMessage id="lessons.titles.educationLevel" />
          </TableTitles>
          <TableTitles>
            <FormattedMessage id="lessons.titles.grade" />
          </TableTitles>
          <TableTitles style={{ borderTopRightRadius: '8px' }}>
            <FormattedMessage id="lessons.titles.rating" />
          </TableTitles>
        </TableHeader>
        {lessons.map((lesson) => {
          const date = new Date(lesson.finalStartTime);
          return (
            <TableItem
              key={lesson.id}
              onClick={() => setLessonDetailsModal(true)}
            >
              <TableData>{lesson.subject.name}</TableData>
              <TableData>{lesson.subfield}</TableData>
              <TableData>
                {`${date.getDate()}\/${date.getMonth()}\/${date.getFullYear()}`}
                {',   '}
                {`${date.getHours()}:${date.getMinutes()}`}
              </TableData>
              <TableData>{'0kn'}</TableData>
              <TableData>{lesson.location}</TableData>
              <TableData>{lesson.type}</TableData>
              <TableData>{lesson.educationLevel}</TableData>
              <TableData>{lesson.grade}</TableData>
              {/* <TableData>{lesson.rating}</TableData> */}
              <Modal
                shouldShow={showLessonDetailsModal}
                closeAction={() => setLessonDetailsModal(false)}
              >
                <LessonDetails id={lesson.id} />
              </Modal>
            </TableItem>
          );
        })}
      </TableBody>
    </TableStyle>
  );
};
