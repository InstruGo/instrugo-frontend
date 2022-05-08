import { useState } from 'react';

import { DatePicker, TimePicker } from '@mui/lab';
import DateAdapterFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { TextField } from '@mui/material';

import { FormColumn, FormRow, DestroyButton } from './styles';

interface TimeSlotProps {
  date: Date;
  startTime: Date;
  endTime: Date;
  onDateChange: (
    index: number,
    date: Date,
    startTime: Date,
    endTime: Date
  ) => void;
  index: number;
  onDestroy: (index: number) => void;
  isSingle: boolean;
}

export const TimeSlot = (props: TimeSlotProps) => {
  const [date, setDate] = useState<Date>(props.date);
  const [startTime, setStartTime] = useState<Date>(props.startTime);
  const [endTime, setEndTime] = useState<Date>(props.endTime);
  const [destroyed, setDestroyed] = useState(false);

  return destroyed ? null : (
    <LocalizationProvider dateAdapter={DateAdapterFns}>
      <FormRow>
        <FormColumn>
          <DatePicker
            value={date}
            minDate={new Date()}
            onChange={(newValue) => {
              if (
                newValue != null &&
                Object.prototype.toString.call(newValue) === '[object Date]' &&
                !isNaN(newValue.getTime())
              ) {
                setDate(newValue);
                props.onDateChange(props.index, newValue, startTime, endTime);
              }
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </FormColumn>
        <FormColumn>
          <TimePicker
            label="start time"
            value={startTime}
            onChange={(newValue) => {
              if (
                newValue != null &&
                Object.prototype.toString.call(newValue) === '[object Date]' &&
                !isNaN(newValue.getTime())
              ) {
                setStartTime(newValue);
                props.onDateChange(props.index, date, newValue, endTime);
              }
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </FormColumn>
        <FormColumn>
          <TimePicker
            label="end time"
            value={endTime}
            onChange={(newValue) => {
              if (
                newValue != null &&
                Object.prototype.toString.call(newValue) === '[object Date]' &&
                !isNaN(newValue.getTime())
              ) {
                setEndTime(newValue);
                props.onDateChange(props.index, date, startTime, newValue);
              }
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </FormColumn>
        {!props.isSingle && (
          <DestroyButton
            onClick={() => {
              props.onDestroy(props.index);
              setDestroyed(true);
            }}
          >
            X
          </DestroyButton>
        )}
      </FormRow>
    </LocalizationProvider>
  );
};
