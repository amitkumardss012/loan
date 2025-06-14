// src/schemas/loanApplication.schema.ts
import { z } from 'zod';

export const LoanApplicationValidator = z.object({
  name: z
    .string()
    .trim()
    .nonempty({ message: 'Name is required' })
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(50, { message: 'Name must be at most 50 characters long' }),

    phone: z
    .string()
    .trim()
    .nonempty({ message: 'Phone number is required' })
    .regex(/^\d{10}$/, {
        message: 'Phone number must be exactly 10 digits'
    }),

  email: z
    .string()
    .trim()
    .nonempty({ message: 'Email is required' })
    .email({ message: 'Invalid email address' }),

  amount: z
    .number({
      required_error: 'Loan amount is required',
      invalid_type_error: 'Amount must be a number',
    })
    .positive({ message: 'Amount must be greater than zero' }),

  duration: z
    .number({
      required_error: 'Duration is required',
      invalid_type_error: 'Duration must be a number',
    })
    .int()
    .positive({ message: 'Duration must be a positive number (in months)' }),

  address: z
    .string()
    .trim()
    .nonempty({ message: 'Address is required' })
    .min(10, { message: 'Address must be at least 10 characters' })
    .max(300, { message: 'Address must be at most 300 characters' }),

  loanType: z
    .string()
    .trim()
    .nonempty({ message: 'Loan type is required' })
    .max(50, { message: 'Loan type must be at most 50 characters' }),

  aadharNumber: z
    .string()
    .trim()
    .nonempty({ message: 'Aadhar number is required' })
    .regex(/^\d{12}$/, { message: 'Aadhar number must be a 12-digit number' }),
    isSeen: z
   .boolean()
   .optional().default(false),
});

export type LoanApplicationType = z.infer<typeof LoanApplicationValidator>;

export interface ExtendedLoanApplicationType extends LoanApplicationType {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}
