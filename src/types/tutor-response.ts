import { Lesson } from './lesson.types';
import { TimeFrame } from './time-frame.type';
import { User } from './user.types';

export type TutorResponse = {
  id: number;
  price: number;
  lesson: Lesson;
  tutor: User;
  tutorResponseTimeFrame: TimeFrame;
};
