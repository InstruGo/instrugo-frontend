import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Input } from '@components';
import { TimeSlot } from '@components';
import { useNewTutorResponse } from '@hooks';
import {
  NewTutorResponseFormInputs,
  newTutorResponseFormSchema,
  TimeFrame,
} from '@types';

import {
  ResponseFormContainer,
  InputDescription,
  FormColumn,
  FormRow,
} from './styles';

interface NewResponseProps {
  onFinish?: () => void;
  lessonId: number;
  lessonTimeFrames: TimeFrame[];
}

interface SimpleTimeFrame {
  startTime: string;
  endTime: string;
}

function contains(lessonTimeFrame: TimeFrame, another: SimpleTimeFrame) {
  return (
    new Date(another.startTime) >= new Date(lessonTimeFrame.startTime) &&
    new Date(another.endTime) <= new Date(lessonTimeFrame.endTime)
  );
}

function containsTimeFrame(
  lessonTimeFrames: TimeFrame[],
  timeFrame: SimpleTimeFrame
) {
  for (const lessonTimeFrame of lessonTimeFrames) {
    if (contains(lessonTimeFrame, timeFrame)) {
      return true;
    }
  }

  return false;
}

export const NewTutorResponseForm = ({
  onFinish,
  lessonId,
  lessonTimeFrames,
}: NewResponseProps) => {
  const newResponse = useNewTutorResponse(lessonId);

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<NewTutorResponseFormInputs>({
    resolver: zodResolver(newTutorResponseFormSchema),
  });

  const onSubmit = (data: NewTutorResponseFormInputs) => {
    const lesson = newResponse.mutate(data);
    if (onFinish) {
      onFinish();
    }
  };

  const [timeSlot, updateTimeSlot] = useState({
    date: new Date(),
    startTime: new Date(),
    endTime: new Date(),
  });

  const updateTutorTimeFrame = (tempSlot: {
    date: Date;
    startTime: Date;
    endTime: Date;
  }) => {
    const [month, day, year] = [
      tempSlot.date.getMonth(),
      tempSlot.date.getDate(),
      tempSlot.date.getFullYear(),
    ];
    const [hourStart, minutesStart, secondsStart] = [
      tempSlot.startTime.getHours(),
      tempSlot.startTime.getMinutes(),
      tempSlot.startTime.getSeconds(),
    ];
    const [hourEnd, minutesEnd, secondsEnd] = [
      tempSlot.endTime.getHours(),
      tempSlot.endTime.getMinutes(),
      tempSlot.endTime.getSeconds(),
    ];
    const start = new Date(
      year,
      month,
      day,
      hourStart,
      minutesStart,
      secondsStart
    );
    const end = new Date(year, month, day, hourEnd, minutesEnd, secondsEnd);
    const timeFrame: SimpleTimeFrame = {
      startTime: start.toISOString(),
      endTime: end.toISOString(),
    };

    setValue(`tutorTimeFrame`, timeFrame);
    return timeFrame;
  };

  const onDateChange = (
    index: number,
    date: Date,
    startTime: Date,
    endTime: Date
  ) => {
    updateTimeSlot({ date: date, startTime: startTime, endTime: endTime });
    const timeFrame = updateTutorTimeFrame({
      date: date,
      startTime: startTime,
      endTime: endTime,
    });

    if (!containsTimeFrame(lessonTimeFrames, timeFrame)) {
      setError('tutorTimeFrame.startTime', {
        type: 'manual',
        message: 'Time Frame should be contained in lesson time frames!',
      });
      return;
    }
    clearErrors('tutorTimeFrame');
  };

  updateTutorTimeFrame(timeSlot);

  return (
    <ResponseFormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <FormColumn style={{ maxWidth: '600px' }}>
          <InputDescription>
            <FormattedMessage id="newRequestForm.availableDates" />:
          </InputDescription>

          <TimeSlot
            date={timeSlot.date}
            startTime={timeSlot.startTime}
            endTime={timeSlot.endTime}
            onDateChange={onDateChange}
            index={0}
            onDestroy={() => {}}
            isSingle
          />
          {errors.tutorTimeFrame?.startTime && (
            <p style={{ color: 'red' }}>
              <FormattedMessage id="newResponseForm.timeError" />
            </p>
          )}

          <InputDescription>
            <FormattedMessage id="newResponseForm.price" />: (kn/h)
          </InputDescription>
          <Input
            type="number"
            name="price"
            register={register}
            errors={errors.price}
            isNumber={true}
          />
        </FormColumn>
      </FormRow>
      <FormRow>
        <FormColumn style={{ alignItems: 'center' }}>
          <Input
            type="submit"
            variant="authSubmit"
            placeholderMsgId="button.createResponse"
            disabled={errors.tutorTimeFrame?.startTime !== undefined}
          />
        </FormColumn>
      </FormRow>
    </ResponseFormContainer>
  );
};
