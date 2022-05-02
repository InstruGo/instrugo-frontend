import { z } from 'zod';

import { MeetingType } from './lesson.types';
import { EducationLevel } from './user.types';

export const newRequestFormSchema = z.object({
  subjectId: z.number().positive(),
  subfield: z.string().max(200).min(1),
  educationLevel: z.nativeEnum(EducationLevel),
  grade: z.number().positive().min(1),
  budget: z.number().positive().min(1),
  type: z.nativeEnum(MeetingType),
  location: z.string().min(1).max(200),
  description: z.string().min(1).max(400),
  duration: z.number().positive().min(1),
  lessonTimeFrames: z
    .object({ startTime: z.string(), endTime: z.string() })
    .array(),
});

export type NewRequestFormInputs = z.infer<typeof newRequestFormSchema>;
