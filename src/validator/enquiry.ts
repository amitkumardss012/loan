import { z } from 'zod';

export const EnquiryValidator = z.object({
    name: z
        .string()
        .trim()
        .nonempty({ message: 'Name is required' })
        .min(2, { message: 'Name must be at least 2 characters long' })
        .max(50, { message: 'Name must be at most 50 characters long' }),

    email: z
        .string()
        .trim()
        .nonempty({ message: 'Email is required' })
        .email({ message: 'Invalid email address' }),

    phone: z
        .string()
        .trim()
        .nonempty({ message: 'Phone number is required' })
        .regex(/^\d{10}$/, {
            message: 'Phone number must be exactly 10 digits'
        }),

    subject: z
        .string()
        .trim()
        .nonempty({ message: 'Subject is required' })
        .min(3, { message: 'Subject must be at least 3 characters' })
        .max(100, { message: 'Subject must be at most 100 characters' }),

    message: z
        .string()
        .trim()
        .nonempty({ message: 'Message is required' })
        .min(10, { message: 'Message must be at least 10 characters long' })
        .max(1000, { message: 'Message must be at most 1000 characters long' }),
        isSeen: z
   .boolean()
   .optional().default(false),
});

export type EnquiryType = z.infer<typeof EnquiryValidator>;