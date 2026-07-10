import { z } from "zod";

export const enquiryFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters" })
    .max(50, { message: "Full name must be less than 50 characters" })
    .refine((val) => /^[A-Za-z\s.'-]+$/.test(val), {
      message:
        "Full name must only contain letters, spaces, and valid name characters",
    }),
  emailAddress: z
    .string()
    .email({ message: "Please enter a valid email address" }),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .regex(/^\+?[\d\s-()]+$/, { message: "Please enter a valid phone number" }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters" })
    .max(100, { message: "Subject must be less than 100 characters" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(500, { message: "Message must be less than 500 characters" }),
});

export type EnquiryFormValues = z.infer<typeof enquiryFormSchema>;
