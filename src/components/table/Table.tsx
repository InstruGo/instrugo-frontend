import React, { Fragment } from 'react';

import {
  TableText,
  TableHeader,
  TableBody,
  TableItem,
  TableStyle,
  TableTitles,
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
          <TableHeader />
          <TableBody>
            <table>
              <tr>
                <TableTitles>{'lessons.title.subject'}</TableTitles>
                <TableTitles>{'lessons.title.subfield'}</TableTitles>
                <TableTitles>{'lessons.title.dateAndTime'}</TableTitles>
                <TableTitles>{'lessons.title.price'}</TableTitles>
                <TableTitles>{'lessons.title.location'}</TableTitles>
                <TableTitles>{'lessons.title.meetingType'}</TableTitles>
                <TableTitles>{'lessons.title.educationLevel'}</TableTitles>
                <TableTitles>{'lessons.title.grade'}</TableTitles>
              </tr>
              {data.map((lesson) => (
                <>
                  <td>{lesson.subject.name}</td>
                  <td>{lesson.subfield}</td>
                  <td>{lesson.lessonTimeFrames[0].startTime}</td>
                  <td>{'0kn'}</td>
                  <td>{lesson.location}</td>
                  <td>{lesson.type}</td>
                  <td>{lesson.level}</td>
                  <td>{lesson.grade}</td>
                </>
              ))}
            </table>
          </TableBody>
        </TableStyle>
      </Fragment>
    </>
  );
};
