import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FaPlus } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';

import { Input } from '@components';
import { Button, TimeSlot } from '@components';
import { useNewRequest, useSubjects, useUserContext } from '@hooks';

import {
  NewRequestFormInputs,
  newRequestFormSchema,
  EducationLevel,
  MeetingType,
} from '../../types/new-request.type';
import {
  FormContainer,
  InputDescription,
  RadioInput,
  TextBox,
  FormColumn,
  InputsContainer,
  Dropdown,
  DropdownOption,
  NewRequestTitle,
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
  });

  const onSubmit = async (data: NewRequestFormInputs) => {
    newRequest.mutate(data);

    if (onFinish) {
      onFinish();
    }
  };

  const [selectedEducationLevel, setEducationLevel] = useState<EducationLevel>(
    EducationLevel.ELEMENTARY
  );

  const [selectedMeetingType, setMeetingType] = useState<MeetingType>(
    MeetingType.IRL
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
      lessonTimeFrames.push({
        startTime: start.toISOString(),
        endTime: end.toISOString(),
      });
    }

    setValue('lessonTimeFrames', lessonTimeFrames);
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

  const [timeSlotList, updateTimeSlotList] = useState([
    <li key={0}>
      <TimeSlot
        onDateChange={onDateChange}
        index={0}
        onDestroy={destroyTimeSlot}
      />
    </li>,
  ]);

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
    let tempSlotList = timeSlotList;
    tempSlotList.push(
      <li key={slotCount + 1}>
        <TimeSlot
          onDateChange={onDateChange}
          index={slotCount + 1}
          onDestroy={destroyTimeSlot}
        />
      </li>
    );

    updateTimeSlotList(tempSlotList);
  };

  updateLessonTimeFrames(timeSlots);
  const [subjectId, setSubjectId] = useState<number>(0);
  setValue('subjectId', subjectId);

  if (isLoading) return <div>Loading...</div>;

  if (user) {
    setValue('userId', user.id);
  } else {
    setValue('userId', 0);
  }

  return (
    <>
      <NewRequestTitle>
        <FormattedMessage id="newRequest.description" />
      </NewRequestTitle>

      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <InputsContainer>
          <FormColumn>
            <InputDescription>
              <FormattedMessage id="card.subject" />:
              <Dropdown
                value={subjectId}
                onChange={(e) => {
                  setSubjectId(Number.parseInt(e.target.value));
                  setValue('subjectId', Number.parseInt(e.target.value));
                }}
              >
                {data?.map((subject) => (
                  <DropdownOption key={subject.id} value={subject.id}>
                    {subject.name}
                  </DropdownOption>
                ))}
              </Dropdown>
            </InputDescription>

            <InputDescription>
              <FormattedMessage id="card.subfield" />:
              <Input
                name="subfield"
                placeholder="eg. Math"
                register={register}
                errors={errors.subfield}
                style={{ width: '120px' }}
              />
            </InputDescription>

            <InputDescription variant="column">
              <FormattedMessage id="newRequestForm.educationLevel" />:
              <RadioInput>
                <input
                  {...register('level', { required: true })}
                  type="radio"
                  value={EducationLevel.ELEMENTARY}
                  checked={selectedEducationLevel === EducationLevel.ELEMENTARY}
                  onChange={onLevelSelect}
                />
                {EducationLevel.ELEMENTARY}
              </RadioInput>
              <RadioInput>
                <input
                  {...register('level', { required: true })}
                  type="radio"
                  value={EducationLevel.HIGH}
                  checked={selectedEducationLevel === EducationLevel.HIGH}
                  onChange={onLevelSelect}
                />
                {EducationLevel.HIGH}
              </RadioInput>
              <RadioInput>
                <input
                  {...register('level', { required: true })}
                  type="radio"
                  value={EducationLevel.UNI}
                  checked={selectedEducationLevel === EducationLevel.UNI}
                  onChange={onLevelSelect}
                />
                {EducationLevel.UNI}
              </RadioInput>
            </InputDescription>

            <InputDescription>
              <FormattedMessage id="newRequestForm.grade" />:{' '}
              <Input
                type="number"
                name="grade"
                placeholder="0"
                register={register}
                errors={errors.grade}
                isNumber={true}
                style={{ width: '60px' }}
              />
            </InputDescription>

            <InputDescription>
              <FormattedMessage id="newRequestForm.budget" />:
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Input
                  type="number"
                  name="budget"
                  placeholder="0"
                  register={register}
                  errors={errors.budget}
                  isNumber={true}
                  style={{ width: '80px' }}
                />
                <div style={{ marginLeft: '8px' }}>kn/h</div>
              </div>
            </InputDescription>
          </FormColumn>

          <FormColumn>
            <InputDescription variant="column">
              <FormattedMessage id="newRequestForm.availableDates" />:
              <ul>{timeSlotList}</ul>
              <Button
                type="button"
                onClick={onAddTimeSlot}
                style={{
                  alignSelf: 'flex-end',
                  padding: '7px',
                }}
              >
                <FaPlus size="16px" />
              </Button>
            </InputDescription>

            <InputDescription variant="column">
              <FormattedMessage id="card.meetingType" />:
              <RadioInput>
                <input
                  {...register('type', { required: true })}
                  type="radio"
                  value={MeetingType.IRL}
                  checked={selectedMeetingType === MeetingType.IRL}
                  onChange={onMeetingSelect}
                />
                {MeetingType.IRL}
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
            </InputDescription>

            <InputDescription>
              <FormattedMessage id="card.location" />:
              <Input
                name="location"
                placeholder="eg. zagreb, croatia"
                register={register}
                errors={errors.location}
                style={{ marginLeft: '50px' }}
              />
            </InputDescription>

            <div style={{}}>
              <FormattedMessage id="newRequestForm.additionalInfo" />:{' '}
            </div>
            <TextBox {...register('description', { required: true })} />
          </FormColumn>
        </InputsContainer>

        <Input
          type="submit"
          variant="authSubmit"
          placeholderMsgId="button.createRequest"
        />
      </FormContainer>
    </>
  );
};
