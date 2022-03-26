import { z } from 'zod';

export enum EducationLevel {
  HIGH = 'High School',
  ELEMENTARY = 'Elementary School',
  UNI = 'University',
}

export enum MeetingType {
  IRL = 'In Person',
  ONLINE = 'Online',
}
export const newRequestFormSchema = z.object({
  userId: z.number().positive(),
  subjectId: z.number().positive(),
  subfield: z.string().max(100).min(1, 'Područje je obavezno'),
  level: z.nativeEnum(EducationLevel),
  grade: z.number().positive(),
  budget: z.number().positive(),
  type: z.nativeEnum(MeetingType).optional(),
  location: z.string().optional(),
  description: z.string().optional(),
  lessonTimeFrames: z
    .object({ startTime: z.string(), endTime: z.string() })
    .array()
    .nonempty()
    .optional(),
});

export type NewRequestFormInputs = z.infer<typeof newRequestFormSchema>;
