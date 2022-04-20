import { z } from 'zod';

export const registerFormSchema = z
  .object({
    firstName: z.string().max(100).min(1, 'The first name field is required'),
    lastName: z.string().max(100).min(1, 'The last name field is required'),
    email: z.string().email('E-mail address format is incorrect'),
    password: z.string().min(6, 'Password must contain at least 6 characters'),
    confirmPassword: z.string().min(1, 'Confirm the password'),
    phone: z.string().optional(),
    isTutor: z.boolean().default(false),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
  });

export type RegisterFormInputs = z.infer<typeof registerFormSchema>;
