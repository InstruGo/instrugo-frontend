import { useState } from 'react';

import { DatePicker, TimePicker } from '@mui/lab';
import DateAdapterFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { TextField } from '@mui/material';

import { FormColumn, FormRow, DestroyButton } from './styles';

interface TimeSlotProps {
  onDateChange: (
    index: number,
    date: Date,
    startTime: Date,
    endTime: Date
  ) => void;
  index: number;
  onDestroy: (index: number) => void;
}
export const TimeSlot = (props: TimeSlotProps) => {
  const [date, setDate] = useState<Date>(new Date());
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [endTime, setEndTime] = useState<Date>(new Date());
  const [destroyed, setDestroyed] = useState(false);
  return destroyed ? null : (
    <LocalizationProvider dateAdapter={DateAdapterFns}>
      <FormRow>
        <FormColumn>
          <DatePicker
            value={date}
            onChange={(newValue) => {
              if (newValue != null) {
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
              if (newValue != null) {
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
              if (newValue != null) {
                setEndTime(newValue);
                props.onDateChange(props.index, date, startTime, newValue);
              }
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </FormColumn>
        <DestroyButton
          onClick={() => {
            props.onDestroy(props.index);
            setDestroyed(true);
          }}
        >
          X
        </DestroyButton>
      </FormRow>
    </LocalizationProvider>
  );
};
