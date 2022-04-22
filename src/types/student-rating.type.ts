import { z } from 'zod';

export const NewStudentRatingSchema = z.object({
  studentRating: z.number().positive(),
});

export type NewStudentRatingInputs = z.infer<typeof NewStudentRatingSchema>;
