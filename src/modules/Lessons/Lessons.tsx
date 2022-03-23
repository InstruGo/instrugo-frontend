import { Button } from '@components';
import {
  ControlPanel,
  LessonsBody,
  LessonsHeader,
  StyledContainer,
  StyledHr,
  Title,
} from './styles';

import { BiFilter } from 'react-icons/bi';
import { FormattedMessage } from 'react-intl';
import { useUpcomingLessons } from '@hooks';
import { Fragment } from 'react';

export const LessonsContainer = () => {
  const { data, isLoading } = useUpcomingLessons();

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No lessons...</div>;

  return (
    <StyledContainer>
      <LessonsHeader>
        <Title>
          <FormattedMessage id="home.lessons" />
        </Title>
        <StyledHr />
      </LessonsHeader>

      <ControlPanel>
        <Button style={{ borderRadius: '20px', padding: '5px 10px' }}>
          <FormattedMessage id="lessons.upcoming" />
        </Button>
        <Button
          style={{
            backgroundColor: 'white',
            padding: '5px 10px',
            color: '#10434E',
            fontWeight: 'bold',
            border: 'solid 1px #10434E',
            borderRadius: '20px',
            marginLeft: '10px',
          }}
        >
          <FormattedMessage id="lessons.requests" />
        </Button>
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
          >
            <BiFilter size="20px" />
            <div style={{ marginLeft: '5px' }}>
              <FormattedMessage id="filter" />
            </div>
          </Button>
        </div>
      </ControlPanel>

      <LessonsBody style={{ height: '200px' }}>
        {data.map((lesson) => (
          <Fragment key={lesson.id}>
            <div>{lesson.subject.name}</div>
            <div>{lesson.subfield}</div>
          </Fragment>
        ))}
      </LessonsBody>
    </StyledContainer>
  );
};
