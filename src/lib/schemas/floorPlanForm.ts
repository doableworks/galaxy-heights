import { z } from "zod";

export const floorPlanFormSchema = z.object({
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
  phoneNumber: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .regex(/^\+?[\d\s-()]+$/, { message: "Please enter a valid phone number" }),
  projectName: z
    .string()
    .min(1, { message: "Project name is required" }),
});

export type FloorPlanFormValues = z.infer<typeof floorPlanFormSchema>;
