import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Input } from '@components';
import { Button, TimeSlot } from '@components';
import { useNewTutorResponse } from '@hooks';

import {
  NewTutorResponseFormInputs,
  newTutorResponseFormSchema,
} from '../../types/new-tutor-response.type';
import {
  ResponseFormContainer,
  InputDescription,
  FormColumn,
  FormRow,
} from './styles';

interface NewResponseProps {
  onFinish?: () => void;
  lessonId: number;
}
export const NewTutorResponseForm = ({
  onFinish,
  lessonId,
}: NewResponseProps) => {
  const newResponse = useNewTutorResponse(lessonId);
  const {
    register,
    handleSubmit,
    setValue,
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

  const [slotCount, setSlotCount] = useState<number>(0);
  const [timeSlots, updateTimeSlots] = useState([
    {
      index: slotCount,
      date: new Date(),
      startTime: new Date(),
      endTime: new Date(),
    },
  ]);

  const updateTutorTimeFrames = (tempSlots: any) => {
    const lessonTimeFrames = [];
    for (var i = 0; i < tempSlots.length; i++) {
      const [month, day, year] = [
        tempSlots[i].date.getMonth(),
        tempSlots[i].date.getDate(),
        tempSlots[i].date.getFullYear(),
      ];
      const [hourStart, minutesStart, secondsStart] = [
        tempSlots[i].startTime.getHours(),
        tempSlots[i].startTime.getMinutes(),
        tempSlots[i].startTime.getSeconds(),
      ];
      const [hourEnd, minutesEnd, secondsEnd] = [
        tempSlots[i].endTime.getHours(),
        tempSlots[i].endTime.getMinutes(),
        tempSlots[i].endTime.getSeconds(),
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
      setValue(`tutorTimeFrames.${i}`, {
        startTime: start.toISOString(),
        endTime: end.toISOString(),
      });
      lessonTimeFrames.push({
        startTime: start.toISOString(),
        endTime: end.toISOString(),
      });
    }
  };

  const onDateChange = (
    idx: number,
    date: Date,
    startTime: Date,
    endTime: Date
  ) => {
    let tempSlots = timeSlots;
    for (var i = 0; i < tempSlots.length; i++) {
      if (tempSlots[i].index === idx) {
        tempSlots[i].date = date;
        tempSlots[i].startTime = startTime;
        tempSlots[i].endTime = endTime;
      }
    }
    updateTimeSlots(tempSlots);
    updateTutorTimeFrames(tempSlots);
  };

  const destroyTimeSlot = (index: number) => {
    let tempSlots = timeSlots;
    for (var i = 0; i < tempSlots.length; i++) {
      if (tempSlots[i].index === index) {
        tempSlots.splice(i, 1);
      }
    }
    updateTimeSlots(tempSlots);
  };

  const onAddTimeSlot = () => {
    let tempSlots = timeSlots;
    setSlotCount(slotCount + 1);
    tempSlots.push({
      index: slotCount + 1,
      date: new Date(),
      startTime: new Date(),
      endTime: new Date(),
    });
    updateTimeSlots(tempSlots);
  };

  updateTutorTimeFrames(timeSlots);
  setValue('lessonId', lessonId);

  return (
    <>
      <ResponseFormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <FormColumn style={{ maxWidth: '600px' }}>
            <InputDescription>
              <FormattedMessage id="newRequestForm.availableDates" />:
            </InputDescription>
            <ul>
              {timeSlots.map((timeSlot) => {
                return (
                  <li key={timeSlot.index}>
                    <TimeSlot
                      date={timeSlot.date}
                      startTime={timeSlot.startTime}
                      endTime={timeSlot.endTime}
                      onDateChange={onDateChange}
                      index={timeSlot.index}
                      onDestroy={destroyTimeSlot}
                    />
                  </li>
                );
              })}
            </ul>
            <Button type="button" onClick={onAddTimeSlot}>
              + <FormattedMessage id="newRequestForm.newTime" />
            </Button>

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
            />
          </FormColumn>
        </FormRow>
      </ResponseFormContainer>
    </>
  );
};
