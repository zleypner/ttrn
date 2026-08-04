// Local gallery images organized by category

export const galleryImages = [
  // Tribal - 8 images (removed duplicates)
  {
    id: "tribal-1",
    title: "Blackwork Sleeve Ondas",
    category: "Tribal",
    image: "/images/tribal/blackwork-sleeve-ondas-1.webp",
  },
  {
    id: "tribal-2",
    title: "Blackwork Antebrazo Llamas",
    category: "Tribal",
    image: "/images/tribal/blackwork-antebrazo-llamas.webp",
  },
  {
    id: "tribal-3",
    title: "Blackwork Antebrazo Fluido",
    category: "Tribal",
    image: "/images/tribal/blackwork-antebrazo-fluido.webp",
  },
  {
    id: "tribal-4",
    title: "Blackwork Mano con Ojo",
    category: "Tribal",
    image: "/images/tribal/blackwork-mano-ojo-1.webp",
  },
  {
    id: "tribal-5",
    title: "Blackwork Hombro Orgánico",
    category: "Tribal",
    image: "/images/tribal/blackwork-hombro-organico-1.webp",
  },
  {
    id: "tribal-6",
    title: "Blackwork Espalda Completa",
    category: "Tribal",
    image: "/images/tribal/blackwork-espalda-completa.webp",
  },
  {
    id: "tribal-7",
    title: "Maori Sleeve con Sol",
    category: "Tribal",
    image: "/images/tribal/maori-sleeve-sol.webp",
  },
  {
    id: "tribal-8",
    title: "Blackwork Espalda Geométrico",
    category: "Tribal",
    image: "/images/tribal/blackwork-espalda-geometrico.webp",
  },
  // Realismo - 14 images (removed duplicates)
  {
    id: "realismo-1",
    title: "Lobo en Antebrazo",
    category: "Realismo",
    image: "/images/realismo/lobo-antebrazo.webp",
  },
  {
    id: "realismo-2",
    title: "Reloj con Rosa",
    category: "Realismo",
    image: "/images/realismo/reloj-rosa-brazo.webp",
  },
  {
    id: "realismo-3",
    title: "Retrato Hombre Pecho",
    category: "Realismo",
    image: "/images/realismo/retrato-hombre-pecho-1.webp",
  },
  {
    id: "realismo-4",
    title: "Sleeve Perro con Lettering",
    category: "Realismo",
    image: "/images/realismo/sleeve-perro-lettering.webp",
  },
  {
    id: "realismo-5",
    title: "León en Brazo",
    category: "Realismo",
    image: "/images/realismo/leon-brazo.webp",
  },
  {
    id: "realismo-6",
    title: "Águila en Brazo",
    category: "Realismo",
    image: "/images/realismo/aguila-brazo.webp",
  },
  {
    id: "realismo-7",
    title: "Flores en Antebrazo",
    category: "Realismo",
    image: "/images/realismo/flores-antebrazo.webp",
  },
  {
    id: "realismo-8",
    title: "Rosa en Mano",
    category: "Realismo",
    image: "/images/realismo/rosa-mano.webp",
  },
  {
    id: "realismo-9",
    title: "Medusa en Antebrazo",
    category: "Realismo",
    image: "/images/realismo/medusa-antebrazo-1.webp",
  },
  {
    id: "realismo-10",
    title: "Tigre en Brazo",
    category: "Realismo",
    image: "/images/realismo/tigre-brazo-1.webp",
  },
  {
    id: "realismo-11",
    title: "Virgen en Brazo",
    category: "Realismo",
    image: "/images/realismo/virgen-brazo.webp",
  },
  {
    id: "realismo-12",
    title: "León Realista",
    category: "Realismo",
    image: "/images/realismo/leon-realista.webp",
  },
  {
    id: "realismo-13",
    title: "Ojo Realista",
    category: "Realismo",
    image: "/images/realismo/ojo-realista.webp",
  },
  {
    id: "realismo-14",
    title: "Ángel en Espalda",
    category: "Realismo",
    image: "/images/realismo/angel-espalda.webp",
  },
  // Retratos - 4 images (removed duplicates)
  {
    id: "retrato-1",
    title: "Retrato Familiar",
    category: "Retratos",
    image: "/images/retratos/retrato-familiar-1.webp",
  },
  {
    id: "retrato-2",
    title: "Retrato de Padre",
    category: "Retratos",
    image: "/images/retratos/retrato-padre.webp",
  },
  {
    id: "retrato-3",
    title: "Retrato de Abuelo",
    category: "Retratos",
    image: "/images/retratos/retrato-abuelo.webp",
  },
  {
    id: "retrato-4",
    title: "Retrato de Mascota",
    category: "Retratos",
    image: "/images/retratos/retrato-mascota.webp",
  },
  // Japonés - 1 image
  {
    id: "japones-1",
    title: "Dragón Japonés Espalda",
    category: "Japonés",
    image: "/images/japones/dragon-japones-espalda.webp",
  },
  // Otros - 4 images
  {
    id: "otros-1",
    title: "Tatuaje Brazo",
    category: "Otros",
    image: "/images/otros/tatuaje-brazo-1.webp",
  },
  {
    id: "otros-2",
    title: "Tatuaje Espalda",
    category: "Otros",
    image: "/images/otros/tatuaje-espalda.webp",
  },
  {
    id: "otros-3",
    title: "Tatuaje Costado",
    category: "Otros",
    image: "/images/otros/tatuaje-costado.webp",
  },
  {
    id: "otros-4",
    title: "Tatuaje Pierna",
    category: "Otros",
    image: "/images/otros/tatuaje-pierna.webp",
  },
] as const;

export const featuredWorkImages = [
  {
    id: "f1",
    title: "Blackwork Mano con Ojo",
    category: "Tribal",
    image: "/images/tribal/blackwork-mano-ojo-1.webp",
    size: "large" as const,
  },
  {
    id: "f2",
    title: "Medusa Realista",
    category: "Realismo",
    image: "/images/realismo/medusa-antebrazo-1.webp",
    size: "large" as const,
  },
  {
    id: "f3",
    title: "Retrato Familiar",
    category: "Retratos",
    image: "/images/retratos/retrato-familiar-1.webp",
    size: "medium" as const,
  },
  {
    id: "f4",
    title: "Dragón Japonés",
    category: "Japonés",
    image: "/images/japones/dragon-japones-espalda.webp",
    size: "medium" as const,
  },
  {
    id: "f5",
    title: "Blackwork Hombro",
    category: "Tribal",
    image: "/images/tribal/blackwork-hombro-organico-1.webp",
    size: "small" as const,
  },
  {
    id: "f6",
    title: "Tigre Realista",
    category: "Realismo",
    image: "/images/realismo/tigre-brazo-1.webp",
    size: "small" as const,
  },
] as const;

export const styleImages = {
  tribal: "/images/tribal/blackwork-mano-ojo-1.webp",
  realism: "/images/realismo/medusa-antebrazo-1.webp",
  portrait: "/images/retratos/retrato-familiar-1.webp",
  japanese: "/images/japones/dragon-japones-espalda.webp",
} as const;

export const aboutImages = {
  artist: "/images/realismo/medusa-antebrazo-1.webp",
  studio1: "/images/tribal/blackwork-mano-ojo-1.webp",
  studio2: "/images/realismo/tigre-brazo-1.webp",
  studio3: "/images/retratos/retrato-mascota.webp",
  artistWorking: "/images/realismo/retrato-hombre-pecho-1.webp",
} as const;

export const heroBackground = "/images/realismo/lobo-antebrazo.webp";

export type GalleryImage = (typeof galleryImages)[number];
export type FeaturedWorkImage = (typeof featuredWorkImages)[number];
