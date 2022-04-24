import { z } from 'zod';

export const newTutorResponseFormSchema = z.object({
  price: z.number().positive(),
  tutorTimeFrame: z.object({ startTime: z.string(), endTime: z.string() }),
});

export type NewTutorResponseFormInputs = z.infer<
  typeof newTutorResponseFormSchema
>;

export const updateTutorResponseFormSchema = z.object({
  price: z.number().positive().optional(),
  tutorTimeFrame: z
    .object({ startTime: z.string(), endTime: z.string() })
    .optional(),
});

export type UpdateTutorResponseFormInputs = z.infer<
  typeof updateTutorResponseFormSchema
>;
