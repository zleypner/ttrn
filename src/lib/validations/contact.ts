import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z
    .string()
    .min(8, "Phone must be at least 8 digits")
    .max(20, "Phone cannot exceed 20 characters")
    .optional()
    .or(z.literal("")),
  style: z.string().min(1, "Please select a style"),
  size: z.enum(["small", "medium", "large", "sleeve"], {
    message: "Please select a size",
  }),
  placement: z.string().min(1, "Please indicate the tattoo placement"),
  description: z
    .string()
    .min(20, "Please describe your idea in more detail (minimum 20 characters)")
    .max(1000, "Description cannot exceed 1000 characters"),
  referenceImages: z.boolean(),
  firstTattoo: z.boolean(),
  preferredDate: z.string().optional(),
  howFoundUs: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const sizeOptions = [
  { value: "small", label: "Small (up to 5cm)" },
  { value: "medium", label: "Medium (5-15cm)" },
  { value: "large", label: "Large (15-30cm)" },
  { value: "sleeve", label: "Sleeve/Large piece (+30cm)" },
] as const;

export const howFoundUsOptions = [
  { value: "instagram", label: "Instagram" },
  { value: "facebook", label: "Facebook" },
  { value: "google", label: "Google" },
  { value: "referral", label: "Referral" },
  { value: "walked-in", label: "Walked by the studio" },
  { value: "other", label: "Other" },
] as const;
