import { Lesson } from './lesson.types';
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

export type RatingFilter = {
  studentRating?: number;
  lessonId?: number;
  studentId?: number;
  tutorId?: number;
};
