import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Button, TimeSlot, Input } from '@components';
import { useNewRequest, useSubjects, useUserContext } from '@hooks';

import {
  NewRequestFormInputs,
  newRequestFormSchema,
  EducationLevel,
  MeetingType,
  Lesson,
} from '@types';
import {
  NewRequestFormContainer,
  InputDescription,
  RadioInput,
  TextBox,
  FormColumn,
  FormRow,
  NewRequestText,
  Dropdown,
  DropdownOption,
} from './styles';

interface NewRequestProps {
  onFinish?: () => void;
}

export const NewRequestForm = ({ onFinish }: NewRequestProps) => {
  const { data, isLoading } = useSubjects();
  const { user } = useUserContext();
  const newRequest = useNewRequest();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<NewRequestFormInputs>({
    resolver: zodResolver(newRequestFormSchema),
    defaultValues: {
      educationLevel: user?.educationLevel,
      grade: user?.grade,
    },
  });

  const onSubmit = async (data: NewRequestFormInputs) => {
    newRequest.mutate(data);

    if (onFinish) {
      onFinish();
    }
  };

  const [selectedEducationLevel, setEducationLevel] = useState<EducationLevel>(
    user?.educationLevel
      ? user.educationLevel
      : EducationLevel.ELEMENTARY_SCHOOL
  );

  const [selectedMeetingType, setMeetingType] = useState<MeetingType>(
    MeetingType.IN_PERSON
  );

  const onLevelSelect = (e: any) => {
    setEducationLevel(e.target.value);
  };

  const onMeetingSelect = (e: any) => {
    setMeetingType(e.target.value);
  };

  const [slotCount, setSlotCount] = useState(0);
  const [timeSlots, updateTimeSlots] = useState([
    {
      index: slotCount,
      date: new Date(),
      startTime: new Date(),
      endTime: new Date(),
    },
  ]);

  const updateLessonTimeFrames = (tempSlots: any) => {
    const lessonTimeFrames = [];
    for (let i = 0; i < tempSlots.length; i++) {
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
      setValue(`lessonTimeFrames.${i}`, {
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
    for (let i = 0; i < tempSlots.length; i++) {
      if (tempSlots[i].index === idx) {
        tempSlots[i].date = date;
        tempSlots[i].startTime = startTime;
        tempSlots[i].endTime = endTime;
      }
    }

    updateTimeSlots(tempSlots);
    updateLessonTimeFrames(tempSlots);
  };

  const destroyTimeSlot = (index: number) => {
    let tempSlots = timeSlots;
    for (let i = 0; i < tempSlots.length; i++) {
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

  updateLessonTimeFrames(timeSlots);
  const [subjectId, setSubjectId] = useState<number>(1);
  setValue('subjectId', subjectId);
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <NewRequestText>
        <FormattedMessage id="newRequest.description" />
      </NewRequestText>

      <NewRequestFormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <FormColumn>
            <InputDescription>
              <FormattedMessage id="card.subject" />:{' '}
            </InputDescription>
            <Dropdown
              value={subjectId}
              onChange={(e) => {
                setSubjectId(parseInt(e.target.value, 10));
                setValue('subjectId', parseInt(e.target.value, 10));
              }}
            >
              {data?.map((subject) => (
                <DropdownOption key={subject.id} value={subject.id}>
                  {subject.name}
                </DropdownOption>
              ))}
            </Dropdown>

            <InputDescription>
              <FormattedMessage id="card.subfield" />:
            </InputDescription>
            <Input
              name="subfield"
              register={register}
              errors={errors.subfield}
            />

            <InputDescription>
              <FormattedMessage id="newRequestForm.educationLevel" />:
            </InputDescription>
            <RadioInput>
              <input
                {...register('educationLevel', { required: true })}
                type="radio"
                value={EducationLevel.ELEMENTARY_SCHOOL}
                checked={
                  selectedEducationLevel === EducationLevel.ELEMENTARY_SCHOOL
                }
                onChange={onLevelSelect}
              />
              {EducationLevel.ELEMENTARY_SCHOOL}
            </RadioInput>
            <RadioInput>
              <input
                {...register('educationLevel', { required: true })}
                type="radio"
                value={EducationLevel.HIGH_SCHOOL}
                checked={selectedEducationLevel === EducationLevel.HIGH_SCHOOL}
                onChange={onLevelSelect}
              />
              {EducationLevel.HIGH_SCHOOL}
            </RadioInput>
            <RadioInput>
              <input
                {...register('educationLevel', { required: true })}
                type="radio"
                value={EducationLevel.UNIVERSITY}
                checked={selectedEducationLevel === EducationLevel.UNIVERSITY}
                onChange={onLevelSelect}
              />
              {EducationLevel.UNIVERSITY}
            </RadioInput>

            <InputDescription>
              <FormattedMessage id="newRequestForm.grade" />:{' '}
            </InputDescription>
            <Input
              type="number"
              name="grade"
              register={register}
              errors={errors.grade}
              isNumber={true}
            />

            <InputDescription>
              <FormattedMessage id="newRequestForm.budget" />: (kn/h)
            </InputDescription>
            <Input
              type="number"
              name="budget"
              register={register}
              errors={errors.budget}
              isNumber={true}
            />
            <InputDescription>
              <FormattedMessage id="newRequestForm.duration" />: (
              <FormattedMessage id="newRequestForm.minutes" />)
            </InputDescription>
            <Input
              type="number"
              name="duration"
              register={register}
              errors={errors.duration}
              isNumber={true}
            />
          </FormColumn>
          <FormColumn style={{ maxWidth: '450px' }}>
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
                      isSingle={false}
                    />
                  </li>
                );
              })}
            </ul>
            <Button type="button" onClick={onAddTimeSlot}>
              + <FormattedMessage id="newRequestForm.newTime" />
            </Button>

            <InputDescription>
              <FormattedMessage id="card.meetingType" />:
            </InputDescription>
            <RadioInput>
              <input
                {...register('type', { required: true })}
                type="radio"
                value={MeetingType.IN_PERSON}
                checked={selectedMeetingType === MeetingType.IN_PERSON}
                onChange={onMeetingSelect}
              />
              {MeetingType.IN_PERSON}
            </RadioInput>
            <RadioInput>
              <input
                {...register('type', { required: true })}
                type="radio"
                value={MeetingType.ONLINE}
                checked={selectedMeetingType === MeetingType.ONLINE}
                onChange={onMeetingSelect}
              />
              {MeetingType.ONLINE}
            </RadioInput>
            <InputDescription>
              <FormattedMessage id="card.location" />:
            </InputDescription>
            <Input
              name="location"
              register={register}
              errors={errors.location}
            />
            <InputDescription>
              <FormattedMessage id="newRequestForm.description" />:{' '}
            </InputDescription>
            <TextBox {...register('description', { required: true })} />
          </FormColumn>
        </FormRow>

        <FormRow>
          <FormColumn style={{ alignItems: 'center' }}>
            <Input
              type="submit"
              variant="authSubmit"
              placeholderMsgId="button.createRequest"
            />
          </FormColumn>
        </FormRow>
      </NewRequestFormContainer>
    </>
  );
};
