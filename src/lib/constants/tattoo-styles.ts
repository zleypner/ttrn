import { styleImages } from "./images";

export interface TattooStyle {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
}

export const tattooStyles: TattooStyle[] = [
  {
    id: "realismo",
    name: "Realismo",
    description:
      "Reproducciones fotográficas de retratos, animales y objetos con un nivel de detalle excepcional.",
    image: styleImages.realism,
    features: ["Detalle fotográfico", "Texturas realistas", "Alta precisión"],
  },
  {
    id: "fullcolor",
    name: "Full Color",
    description:
      "Tatuajes vibrantes con colores intensos y saturados que capturan la esencia del arte pop y la cultura geek.",
    image: styleImages.fullcolor,
    features: ["Colores vibrantes", "Alta saturación", "Arte pop"],
  },
  {
    id: "microrealism",
    name: "Micro Realism",
    description:
      "Tatuajes de realismo en escala pequeña con detalles increíblemente finos y precisos.",
    image: styleImages.microrealism,
    features: ["Escala pequeña", "Detalles finos", "Alta precisión"],
  },
  {
    id: "japones",
    name: "Japonés",
    description:
      "Arte tradicional japonés con dragones, koi, flores de cerezo y otros elementos icónicos de la cultura nipona.",
    image: styleImages.japanese,
    features: [
      "Arte tradicional",
      "Simbolismo profundo",
      "Composiciones fluidas",
    ],
  },
  {
    id: "tribal",
    name: "Tribal",
    description:
      "Diseños tribales audaces con patrones geométricos y líneas fuertes inspirados en culturas ancestrales.",
    image: styleImages.tribal,
    features: ["Patrones geométricos", "Líneas fuertes", "Arte ancestral"],
  },
  {
    id: "otros",
    name: "Otros",
    description:
      "Estilos variados incluyendo línea fina, retratos y diseños personalizados únicos.",
    image: styleImages.portrait,
    features: ["Líneas finas", "Diseños únicos", "Personalización"],
  },
];
