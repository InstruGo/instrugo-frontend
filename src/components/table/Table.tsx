import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  TableText,
  TableHeader,
  TableBody,
  TableItem,
  TableStyle,
  TableTitles,
  TableData,
  StyledHr,
} from './styles';

import { useUpcomingLessons } from '@hooks';

type StitchesComponentProps = React.ComponentPropsWithoutRef<typeof TableStyle>;

export interface TableProps extends StitchesComponentProps {}

export const Table = () => {
  const { data, isLoading } = useUpcomingLessons();

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No completed lessons...</div>;
  return (
    <>
      <Fragment>
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
              <TableTitles style={{ borderTopRightRadius: '8px' }}>
                <FormattedMessage id="lessons.titles.grade" />
              </TableTitles>
            </TableHeader>
            {data.map((lesson) => (
              <TableItem key={lesson.id}>
                <TableData>{lesson.subject.name}</TableData>
                <TableData>{lesson.subfield}</TableData>
                <TableData>{lesson.lessonTimeFrames[0].startTime}</TableData>
                <TableData>{'0kn'}</TableData>
                <TableData>{lesson.location}</TableData>
                <TableData>{lesson.type}</TableData>
                <TableData>{lesson.level}</TableData>
                <TableData>{lesson.grade}</TableData>
              </TableItem>
            ))}
          </TableBody>
        </TableStyle>
      </Fragment>
    </>
  );
};
