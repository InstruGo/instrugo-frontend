import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  DayView,
  MonthView,
  Appointments,
  Toolbar,
  ViewSwitcher,
  DateNavigator,
  Resources,
} from '@devexpress/dx-react-scheduler-material-ui';
import Paper from '@mui/material/Paper';

import { Loader } from '@components';
import { useLessons } from '@hooks';
import { TimeFrame } from '@types';

type TimeFrames = { timeFrame: TimeFrame; color: string; title: string }[];

interface CalendarProps {
  pending?: boolean;
  requestTimeframes?: TimeFrames;
}

/**
 * This Calendar component is currently used in one of these two cases:
 * 1. displays all pending lessons (with start and end times)
 * 2. displays all timeframes of a single lesson request
 * @param param0
 * @returns
 */
export const Calendar = ({ pending, requestTimeframes }: CalendarProps) => {
  const { data: lessons, isLoading } = useLessons({ status: 'pending' });

  const pendingTimeframes: TimeFrames | undefined = lessons?.map((lesson) => {
    return {
      timeFrame: {
        id: 0,
        startTime: lesson.finalStartTime,
        endTime: lesson.finalEndTime,
      } as TimeFrame,
      color: lesson.subject.color,
      title: lesson.subject.name,
    };
  });

  const schedulerData: any = [];
  const instances: any = [];

  const timeframes = pending ? pendingTimeframes : requestTimeframes;

  (timeframes || []).map(
    (timeFrame: { timeFrame: TimeFrame; color: string; title: string }) => {
      const start = new Date(timeFrame.timeFrame.startTime);
      const end = new Date(timeFrame.timeFrame.endTime);
      schedulerData.push({
        startDate: start.toString(),
        endDate: end.toString(),
        title: timeFrame.title,
        type: timeFrame.title,
      });
      instances.push({
        id: timeFrame.title,
        text: timeFrame.title,
        color: timeFrame.color,
      });
    }
  );

  const resources = [
    {
      fieldName: 'type',
      title: 'Type',
      instances: instances,
    },
  ];

  const today = new Date().toISOString();
  const currentDate =
    schedulerData !== [] ? schedulerData[0]?.startDate : today;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Paper>
      <Scheduler data={schedulerData}>
        <ViewState
          defaultCurrentDate={currentDate}
          defaultCurrentViewName="Week"
        />

        <DayView startDayHour={6} endDayHour={23} cellDuration={120} />
        <WeekView startDayHour={6} endDayHour={23} cellDuration={120} />
        <MonthView />
        <Toolbar />
        <div style={{ color: '#fffff' }}>
          <DateNavigator />
        </div>

        <ViewSwitcher />
        <Appointments />
        <Resources data={resources} />
      </Scheduler>
    </Paper>
  );
};
