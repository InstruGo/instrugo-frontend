import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.string().email('E-mail address format is incorrect'),
  password: z.string(),
});

export type LoginFormInputs = z.infer<typeof loginFormSchema>;

export type LoginResponse = {
  accessToken: string;
};
