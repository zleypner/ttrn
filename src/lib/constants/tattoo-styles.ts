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
    id: "black-grey",
    name: "Black & Grey",
    description:
      "Técnica clásica que utiliza exclusivamente tinta negra en diferentes tonalidades para crear profundidad y sombras realistas.",
    image: styleImages["black-grey"],
    features: ["Sombreado suave", "Alta durabilidad", "Estilo atemporal"],
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
    id: "fine-line",
    name: "Fine Line",
    description:
      "Líneas delicadas y precisas que crean diseños elegantes y minimalistas con máxima sofisticación.",
    image: styleImages["fine-line"],
    features: ["Líneas delicadas", "Diseños elegantes", "Minimalismo"],
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
    id: "geometric",
    name: "Geométrico",
    description:
      "Patrones precisos y formas simétricas que crean composiciones visualmente impactantes.",
    image: styleImages.geometric,
    features: ["Simetría perfecta", "Patrones únicos", "Precisión matemática"],
  },
  {
    id: "ornamental",
    name: "Ornamental",
    description:
      "Diseños decorativos inspirados en arte mandala, dotwork y elementos arquitectónicos.",
    image: styleImages.ornamental,
    features: ["Dotwork", "Mandalas", "Patrones decorativos"],
  },
];
