import { Rating } from './rating.types';
import { Subject } from './subjects.types';
import { TimeFrame } from './time-frame.type';
import { TutorResponse } from './tutor-response';
import { EducationLevel } from './user.types';
import { User } from './user.types';

export enum MeetingType {
  IN_PERSON = 'in-person',
  ONLINE = 'online',
}

export type Lesson = {
  id: number;
  subfield: string;
  educationLevel: EducationLevel;
  grade: number;
  description: string;
  type: MeetingType;
  location: string;
  budget: number;
  status: string;
  duration: number;
  createdOn: Date;
  lastModifiedOn: Date;
  subject: Subject;
  student: User;
  tutor: User;
  finalStartTime: string;
  finalEndTime: string;
  finalPrice: number;
  lessonTimeFrames: TimeFrame[];
  tutorResponses: TutorResponse[];
  rating: Rating;
};

export type PoolFilter = {
  educationLevel?: EducationLevel;
  grade?: number;
  type?: MeetingType;
  minBudget?: number;
  maxBudget?: number;
  after?: string;
  before?: string;
  subjectIds?: number[];
};

export type LessonFilter = {
  educationLevel?: EducationLevel;
  grade?: number;
  type?: MeetingType;
  minPrice?: number;
  maxPrice?: number;
  status?: string;
  after?: string;
  before?: string;
  subjectIds?: number[];
  isLessonTutor?: boolean;
};
