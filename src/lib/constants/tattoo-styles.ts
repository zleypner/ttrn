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
    name: "Realism",
    description:
      "Photographic reproductions of portraits, animals, and objects with exceptional detail.",
    image: styleImages.realism,
    features: [
      "Photo-realistic detail",
      "Realistic textures",
      "High precision",
    ],
  },
  {
    id: "fullcolor",
    name: "Full Color",
    description:
      "Vibrant tattoos with intense, saturated colors capturing the essence of pop art and geek culture.",
    image: styleImages.fullcolor,
    features: ["Vibrant colors", "High saturation", "Pop art"],
  },
  {
    id: "microrealism",
    name: "Micro Realism",
    description:
      "Small-scale realism tattoos with incredibly fine and precise details.",
    image: styleImages.microrealism,
    features: ["Small scale", "Fine details", "High precision"],
  },
  {
    id: "japanese",
    name: "Japanese",
    description:
      "Traditional Japanese art featuring dragons, koi, cherry blossoms, and other iconic elements of Japanese culture.",
    image: styleImages.japanese,
    features: ["Traditional art", "Deep symbolism", "Flowing compositions"],
  },
  {
    id: "tribal",
    name: "Tribal",
    description:
      "Bold tribal designs with geometric patterns and strong lines inspired by ancestral cultures.",
    image: styleImages.tribal,
    features: ["Geometric patterns", "Strong lines", "Ancestral art"],
  },
  {
    id: "other",
    name: "Other",
    description:
      "Various styles including fine line, portraits, and unique custom designs.",
    image: styleImages.portrait,
    features: ["Fine lines", "Unique designs", "Customization"],
  },
];
