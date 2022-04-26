import { z } from 'zod';
import { EducationLevel } from './new-request.type';

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
  phone: z.string().optional(),
  birthDate: z.string().optional(),
  description: z.string().optional(),
  educationLevel: z.nativeEnum(EducationLevel).optional(),
  grade: z.number().optional(),
  subjectIds: z.number().array().optional(),
});

export type ProfileUpdateFormInputs = z.infer<typeof profileUpdateFormSchema>;
