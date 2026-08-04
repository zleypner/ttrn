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
    id: "tribal",
    name: "Tribal",
    description:
      "Diseños tribales con líneas audaces y patrones tradicionales que representan fuerza y conexión cultural.",
    image: styleImages.tribal,
    features: ["Líneas audaces", "Patrones tradicionales", "Alta durabilidad"],
  },
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
