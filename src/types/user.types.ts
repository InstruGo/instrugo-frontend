import { Subject } from './subjects.types';

export enum UserRole {
  STUDENT = 'student',
  TUTOR = 'tutor',
  ADMIN = 'admin',
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
  averageRating: string;
  ratingsCount: number;
};

export type OptionalUser = User | null;

export interface PublicUser {
  id: number;
  firstName: string;
  lastName: string;
  avatarUrl: string;
  averageRating: string;
  description: string;
  subjects: Subject[];
}

export enum EducationLevel {
  ELEMENTARY_SCHOOL = 'elementary-school',
  HIGH_SCHOOL = 'high-school',
  UNIVERSITY = 'university',
}
