import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.string().email('Unesite ispravnu e-mail adresu!'),
  password: z.string().min(6, 'Neispravna lozinka!'),
});

export type LoginFormInputs = z.infer<typeof loginFormSchema>;
