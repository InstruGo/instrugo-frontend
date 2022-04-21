import { z } from 'zod';

export const newTutorFeedbackSchema = z.object({
  tutorFeedback: z.string().min(1, 'Feedback is required'),
});

export type newTutorFeedbackInputs = z.infer<typeof newTutorFeedbackSchema>;
