import { User } from './user.types';
import { Lesson } from './lessons.types';

export type TutorResponse = {
  id: number;
  price: number;
  lesson: Lesson;
  tutor: User;
  tutorResponseTimeFrames: any;
};
