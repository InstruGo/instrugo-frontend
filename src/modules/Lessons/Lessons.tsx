import { BiFilter } from 'react-icons/bi';
import { FormattedMessage } from 'react-intl';

import { Button, Card, Table } from '@components';
import { useUpcomingLessons } from '@hooks';

import {
  ControlPanel,
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
  const { data, isLoading } = useUpcomingLessons();

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

      {home && (
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
      )}

      {filter && (
        <ControlPanel>
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
        </ControlPanel>
      )}

      {cards && (
        <LessonsBody style={{ height: '200px' }}>
          {data.map((lesson) => (
            <Card
              key={lesson.id}
              index={lesson.id}
              subject={lesson.subject.name}
              subfield={lesson.subfield}
              location={lesson.location}
              meetingType={lesson.type}
              dateAndTime={lesson.lessonTimeFrames[0].startTime}
              color={lesson.subject.color}
              isModal={lesson.status !== 'Requested'}
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
