import { z } from 'zod';

import { EducationLevel, MeetingType } from '@types';

export const updateRequestFormSchema = z.object({
  subjectId: z.number().positive().optional(),
  subfield: z.string().max(100).min(1, 'Područje je obavezno').optional(),
  educationLevel: z.nativeEnum(EducationLevel).optional(),
  grade: z.number().positive().optional(),
  budget: z.number().positive().optional(),
  type: z.nativeEnum(MeetingType).optional(),
  location: z.string().optional(),
  description: z.string().optional(),
  duration: z.number().positive().optional(),
  lessonTimeFrames: z
    .object({ startTime: z.string(), endTime: z.string() })
    .array()
    .optional(),
});

export type UpdateRequestFormInputs = z.infer<typeof updateRequestFormSchema>;
