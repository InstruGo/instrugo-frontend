import { Rating } from './rating.types';
import { TutorResponse } from './tutor-response';
import { TimeFrame } from './time-frame.type';
import { User } from './user.types';
import { Subject } from './subjects.types';
import { EducationLevel, MeetingType } from './new-request.type';

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
