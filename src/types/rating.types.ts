import { Lesson } from './lessons.types';
import { User } from './user.types';

export type Rating = {
  id: number;
  studentRating: number;
  tutorFeedback: string;
  createdOn: Date;
  modifiedOn: Date;
  lesson: Lesson;
  student: User;
  tutor: User;
};
