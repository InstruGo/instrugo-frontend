import { Rating } from './rating.types';
import { TutorResponse } from './tutor-response';

export type Lesson = {
  id: number;
  subfield: string;
  level: string;
  grade: number;
  description: string;
  type: string;
  location: string;
  budget: string;
  status: string;
  createdOn: Date;
  lastModifiedOn: Date;
  subject: any;
  student: any;
  tutor: any;
  finalStartTime: string;
  finalEndTime: string;
  finalPrice: number;
  lessonTimeFrames: any;
  tutorResponses: TutorResponse[];
  rating: Rating;
};
