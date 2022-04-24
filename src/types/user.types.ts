import { EducationLevel } from './new-request.type';
import { Subject } from './subjects.types';

export enum UserRole {
  ADMIN = 'admin',
  STUDENT = 'student',
  TUTOR = 'tutor',
}
export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  birthDate: Date;
  description: string;
  educationLevel: EducationLevel;
  grade: number;
  role: UserRole;
  avatarUrl: string;
  createdOn: Date;
  modifiedOn: Date;
  subjects: Subject[];
  averageRating: number;
  ratingsCount: number;
};

export type OptionalUser = User | null;
