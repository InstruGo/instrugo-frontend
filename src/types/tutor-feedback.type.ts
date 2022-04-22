import { z } from 'zod';

export const NewTutorFeedbackSchema = z.object({
  tutorFeedback: z.string().min(1, 'Feedback is required'),
});

export type NewTutorFeedbackInputs = z.infer<typeof NewTutorFeedbackSchema>;
