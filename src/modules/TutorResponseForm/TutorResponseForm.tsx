import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Input } from '@components';
import { TimeSlot } from '@components';
import { useNewTutorResponse } from '@hooks';
import { useTutorResponses } from '@hooks/tutor-responses/useTutorResponses';

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
  const { data, isLoading } = useTutorResponses();

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
    setValue(`tutorTimeFrame`, {
      startTime: start.toISOString(),
      endTime: end.toISOString(),
    });
  };

  const onDateChange = (
    index: number,
    date: Date,
    startTime: Date,
    endTime: Date
  ) => {
    updateTimeSlot({ date: date, startTime: startTime, endTime: endTime });
    updateTutorTimeFrame({
      date: date,
      startTime: startTime,
      endTime: endTime,
    });
  };

  updateTutorTimeFrame(timeSlot);

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
  );
};
