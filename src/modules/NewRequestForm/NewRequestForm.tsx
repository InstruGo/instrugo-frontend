import { useForm } from 'react-hook-form';
import { SetStateAction, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@components';
import DateAdapterFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker, TimePicker } from '@mui/lab';
import { TextField } from '@mui/material';
// import { useRegister } from '../../hooks/useNewRequest';

import {
  NewRequestFormContainer,
  InputDescription,
  RadioInput,
  TextBox,
  FormColumn,
  FormRow,
} from './styles';
import {
  NewRequestFormInputs,
  newRequestFormSchema,
  EducationLevel,
  MeetingType,
} from '../../types/new-request.type';
import { Button, TimeSlot } from '@components';

export const NewRequestForm = () => {
  // const registerRequest = useNewRequest();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewRequestFormInputs>({
    resolver: zodResolver(newRequestFormSchema),
  });

  // const onSubmit = (data: NewRequestFormInputs) => registerRequest.mutate(data);
  const onSubmit = () => {
    return;
  };
  const onChange = () => {
    return;
  };
  const value = new Date();
  const [selectedEducationLevel, setEducationLevel] = useState<EducationLevel>(
    EducationLevel.ELEMENTARY
  );
  const [selectedMeetingType, setMeetingType] = useState<MeetingType>(
    MeetingType.IRL
  );
  const [description, setDescription] = useState('');
  const onLevelSelect = (e: any) => {
    setEducationLevel(e.target.value);
  };
  const onMeetingSelect = (e: any) => {
    setMeetingType(e.target.value);
  };
  const onDescriptionChange = (e: any) => {
    setDescription(e.target.value);
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
  const onDateChange = (
    idx: number,
    date: Date,
    startTime: Date,
    endTime: Date
  ) => {
    var tempSlots = timeSlots;
    for (var i = 0; i < tempSlots.length; i++) {
      if (tempSlots[i].index === idx) {
        tempSlots[i].date = date;
        tempSlots[i].startTime = startTime;
        tempSlots[i].endTime = endTime;
      }
    }

    updateTimeSlots(tempSlots);
    console.log(slotCount);
  };
  const destroyTimeSlot = (index: number) => {
    var tempSlots = timeSlots;
    for (var i = 0; i < tempSlots.length; i++) {
      if (tempSlots[i].index === index) {
        tempSlots.splice(i, 1);
      }
    }
    updateTimeSlots(tempSlots);
    console.log(slotCount);
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
    var tempSlots = timeSlots;
    setSlotCount(slotCount + 1);
    tempSlots.push({
      index: slotCount + 1,
      date: new Date(),
      startTime: new Date(),
      endTime: new Date(),
    });
    updateTimeSlots(tempSlots);
    var tempSlotList = timeSlotList;
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
    console.log(timeSlots);
    console.log(slotCount);
  };
  return (
    <>
      <NewRequestFormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <FormColumn>
            <InputDescription>Subject: </InputDescription>
            <Input name="subject" register={register} errors={errors.subject} />
            <InputDescription>Subfield:</InputDescription>
            <Input
              name="subfield"
              register={register}
              errors={errors.subfield}
            />
            <InputDescription>Education level:</InputDescription>
            <RadioInput>
              <input
                type="radio"
                value={EducationLevel.ELEMENTARY}
                checked={selectedEducationLevel === EducationLevel.ELEMENTARY}
                onChange={onLevelSelect}
              />
              {EducationLevel.ELEMENTARY}
            </RadioInput>
            <RadioInput>
              <input
                type="radio"
                value={EducationLevel.HIGH}
                checked={selectedEducationLevel === EducationLevel.HIGH}
                onChange={onLevelSelect}
              />
              {EducationLevel.HIGH}
            </RadioInput>
            <RadioInput>
              <input
                type="radio"
                value={EducationLevel.UNI}
                checked={selectedEducationLevel === EducationLevel.UNI}
                onChange={onLevelSelect}
              />
              {EducationLevel.UNI}
            </RadioInput>

            <InputDescription>Grade: </InputDescription>
            <Input name="grade" register={register} errors={errors.grade} />
            <InputDescription>Budget: (kn/h)</InputDescription>
            <Input name="budget" register={register} errors={errors.budget} />
          </FormColumn>
          <FormColumn>
            <InputDescription>Available time slots:</InputDescription>
            <ul>{timeSlotList}</ul>
            <Button onClick={onAddTimeSlot}>+ Add time slot</Button>

            <InputDescription>Meeting type:</InputDescription>
            <RadioInput>
              <input
                type="radio"
                value={MeetingType.IRL}
                checked={selectedMeetingType === MeetingType.IRL}
                onChange={onMeetingSelect}
              />
              {MeetingType.IRL}
            </RadioInput>
            <RadioInput>
              <input
                type="radio"
                value={MeetingType.ONLINE}
                checked={selectedMeetingType === MeetingType.ONLINE}
                onChange={onMeetingSelect}
              />
              {MeetingType.ONLINE}
            </RadioInput>
            <InputDescription>Location:</InputDescription>
            <Input
              name="location"
              register={register}
              errors={errors.location}
            />
            <InputDescription>Description: </InputDescription>
            <TextBox
              name="body"
              onChange={onDescriptionChange}
              value={description}
            />
          </FormColumn>
        </FormRow>
        <FormRow>
          <Input
            type="submit"
            variant="authSubmit"
            placeholderMsgId="button.newRequest"
          />
        </FormRow>
      </NewRequestFormContainer>
    </>
  );
};
