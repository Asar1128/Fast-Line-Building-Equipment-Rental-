import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(1).max(5000).optional(),
  source: z.string().optional(),
  category: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
