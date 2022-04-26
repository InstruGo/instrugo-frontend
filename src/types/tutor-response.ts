import { User } from './user.types';
import { Lesson } from './lessons.types';
import { TimeFrame } from './time-frame.type';

export type TutorResponse = {
  id: number;
  price: number;
  lesson: Lesson;
  tutor: User;
  tutorResponseTimeFrame: TimeFrame;
};
