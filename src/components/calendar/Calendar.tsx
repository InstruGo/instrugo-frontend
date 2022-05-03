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

import { TimeFrame } from '@types';

interface CalendarProps {
  timeFrames: { timeFrame: TimeFrame; color: string; title: string }[];
}
export const Calendar = ({ timeFrames }: CalendarProps) => {
  const schedulerData: any = [];
  const instances: any = [];
  timeFrames.map(
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
