import { useState } from 'react';

import { EducationLevel, LessonFilter, MeetingType } from '@types';

const meetingType: Record<string, MeetingType> = {
  'in-person': MeetingType.IN_PERSON,
  online: MeetingType.ONLINE,
};

const educationlevel: Record<string, EducationLevel> = {
  'elementary-school': EducationLevel.ELEMENTARY_SCHOOL,
  'high-school': EducationLevel.HIGH_SCHOOL,
  university: EducationLevel.UNIVERSITY,
};

type FilterValueType =
  | string
  | number
  | number[]
  | EducationLevel
  | MeetingType
  | undefined;

export const useLessonFilter = (initialFilter?: LessonFilter) => {
  const [filter, setFilterInner] = useState<LessonFilter>(initialFilter || {});

  const setFilter = (key: string, value: string) => {
    let filterValue: FilterValueType;

    switch (key) {
      case 'subjectIds':
        filterValue = [parseInt(value)];
        break;
      case 'grade':
      case 'minPrice':
      case 'maxPrice':
        filterValue = parseInt(value);
        break;
      case 'type':
        filterValue = meetingType[value];
        break;
      case 'educationLevel':
        filterValue = educationlevel[value];
        break;
      case 'status':
      case 'after':
      case 'before':
      default:
        filterValue = value;
    }

    if (value === 'all') filterValue = undefined;

    let newFilter = { ...filter, [key]: filterValue };
    setFilterInner(newFilter as LessonFilter);
  };

  return { filter, setFilter };
};
