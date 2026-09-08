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
    id: "realism",
    name: "Realismo",
    description:
      "Reproducciones fotográficas de retratos, animales y objetos con un nivel de detalle excepcional.",
    image: styleImages.realism,
    features: ["Detalle fotográfico", "Texturas realistas", "Alta precisión"],
  },
  {
    id: "portrait",
    name: "Retratos",
    description:
      "Capturamos la esencia de tus seres queridos o íconos con un realismo impactante y emotivo.",
    image: styleImages.portrait,
    features: ["Expresiones vivas", "Semejanza exacta", "Emotividad"],
  },
  {
    id: "line",
    name: "Line",
    description:
      "Tatuajes de línea fina y trazos precisos con diseños delicados y minimalistas.",
    image: styleImages.line,
    features: ["Líneas finas", "Trazos precisos", "Alta precisión"],
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
    id: "japanese",
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
];
