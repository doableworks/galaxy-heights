import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be less than 50 characters" })
    .refine((value) => /^[A-Za-z\s.'-]+$/.test(value), {
      message: "Name must only contain letters, spaces, and valid characters",
    }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" }),
  countryCode: z
    .string()
    .min(1, { message: "Please select a country code" }),
  phone: z
    .string()
    .regex(/^\d+$/, { message: "Phone number must contain only digits" })
    .length(10, { message: "Phone number must be exactly 10 digits" }),
  message: z
    .union([
      z.literal(""),
      z
        .string()
        .min(10, { message: "Message must be at least 10 characters" })
        .max(500, { message: "Message must be less than 500 characters" }),
    ])
    .optional(),
  purpose: z
    .string()
    .min(1, { message: "Purpose is required" }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
