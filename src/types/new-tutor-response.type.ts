import { z } from 'zod';

export const newTutorResponseFormSchema = z.object({
  lessonId: z.number().positive(),
  price: z.number().positive(),
  tutorTimeFrames: z
    .object({ startTime: z.string(), endTime: z.string() })
    .array()
    .nonempty(),
});

export type NewTutorResponseFormInputs = z.infer<
  typeof newTutorResponseFormSchema
>;
