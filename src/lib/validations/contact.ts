import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede exceder 100 caracteres"),
  email: z.string().email("Por favor ingresa un email válido"),
  phone: z
    .string()
    .min(8, "El teléfono debe tener al menos 8 dígitos")
    .max(20, "El teléfono no puede exceder 20 caracteres")
    .optional()
    .or(z.literal("")),
  style: z.string().min(1, "Por favor selecciona un estilo"),
  size: z.enum(["small", "medium", "large", "sleeve"], {
    message: "Por favor selecciona un tamaño",
  }),
  placement: z.string().min(1, "Por favor indica la ubicación del tatuaje"),
  description: z
    .string()
    .min(
      20,
      "Por favor describe tu idea con más detalle (mínimo 20 caracteres)"
    )
    .max(1000, "La descripción no puede exceder 1000 caracteres"),
  referenceImages: z.boolean(),
  firstTattoo: z.boolean(),
  preferredDate: z.string().optional(),
  howFoundUs: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const sizeOptions = [
  { value: "small", label: "Pequeño (hasta 5cm)" },
  { value: "medium", label: "Mediano (5-15cm)" },
  { value: "large", label: "Grande (15-30cm)" },
  { value: "sleeve", label: "Manga/Pieza grande (+30cm)" },
] as const;

export const howFoundUsOptions = [
  { value: "instagram", label: "Instagram" },
  { value: "facebook", label: "Facebook" },
  { value: "google", label: "Google" },
  { value: "referral", label: "Recomendación" },
  { value: "walked-in", label: "Pasé por el estudio" },
  { value: "other", label: "Otro" },
] as const;
