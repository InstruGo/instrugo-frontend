import { z } from 'zod';

import { EducationLevel } from './user.types';

export const profileUpdateFormSchema = z.object({
  firstName: z
    .string()
    .max(100)
    .min(1, 'The first name field is required')
    .optional(),
  lastName: z
    .string()
    .max(100)
    .min(1, 'The last name field is required')
    .optional(),
  phone: z.preprocess(
    (phone) => (phone ? phone : undefined),
    z.string().optional()
  ),
  birthDate: z.preprocess(
    (birthDate) => (birthDate !== '' ? birthDate : undefined),
    z.string().optional()
  ),
  description: z.string().optional(),
  educationLevel: z.preprocess(
    (educationLevel) => (educationLevel !== '' ? educationLevel : undefined),
    z.nativeEnum(EducationLevel).optional()
  ),
  grade: z.preprocess(
    (grade) => (grade !== '' ? parseInt(grade as string) : undefined),
    z.number().positive().optional()
  ),
  subjectIds: z.number().array().optional(),
});

export type ProfileUpdateFormInputs = z.infer<typeof profileUpdateFormSchema>;
