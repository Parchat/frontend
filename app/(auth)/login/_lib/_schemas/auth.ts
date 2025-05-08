import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }).trim(),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }).trim(),
  displayName: z
    .string()
    .min(3, { message: 'Display name must be at least 3 characters long' })
    .trim(),
});

export const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }).trim(),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }).trim(),
});
