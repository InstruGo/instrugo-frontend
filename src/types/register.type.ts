import { z } from 'zod';

export const registerFormSchema = z
  .object({
    email: z.string().email('Unesite ispravnu e-mail adresu.'),
    firstName: z.string().max(100).min(1, 'Ime je obavezno.'),
    lastName: z.string().max(100).min(1, 'Prezime je obavezno.'),
    phone: z.string().optional(),
    password: z.string().min(6, 'Lozinka mora biti dugačka barem 6 znakova.'),
    confirmPassword: z.string().min(1, 'Potvrdite lozinku.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Lozinke se ne poklapaju.',
  });

export type RegisterFormInputs = z.infer<typeof registerFormSchema>;
