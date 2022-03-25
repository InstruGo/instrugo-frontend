import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.string().email('Unesite ispravnu e-mail adresu!'),
  password: z.string(),
});

export type LoginFormInputs = z.infer<typeof loginFormSchema>;

export type LoginResponse = {
  accessToken: string;
};
