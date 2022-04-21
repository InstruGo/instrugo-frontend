import { z } from 'zod';

export const newStudentRatingSchema = z.object({
  studentRating: z.number().positive(),
});

export type NewStudentRatingInputs = z.infer<typeof newStudentRatingSchema>;
