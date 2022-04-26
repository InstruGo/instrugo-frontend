import { z } from 'zod';

export enum EducationLevel {
  HIGH_SCHOOL = 'high-school',
  ELEMENTARY_SCHOOL = 'elementary-school',
  UNIVERSITY = 'university',
}

export enum MeetingType {
  IN_PERSON = 'in-person',
  ONLINE = 'online',
}

export const newRequestFormSchema = z.object({
  subjectId: z.number().positive(),
  subfield: z.string().max(100).min(1, 'Područje je obavezno'),
  educationLevel: z.nativeEnum(EducationLevel),
  grade: z.number().positive(),
  budget: z.number().positive(),
  type: z.nativeEnum(MeetingType),
  location: z.string(),
  description: z.string(),
  duration: z.number().positive(),
  lessonTimeFrames: z
    .object({ startTime: z.string(), endTime: z.string() })
    .array(),
});

export type NewRequestFormInputs = z.infer<typeof newRequestFormSchema>;
