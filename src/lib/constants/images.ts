// Unsplash image URLs for the website
// Using high-quality tattoo-related images

export const galleryImages = [
  {
    id: "g1",
    title: "Retrato Realista",
    category: "Realismo",
    image:
      "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800&q=80",
  },
  {
    id: "g2",
    title: "León Majestuoso",
    category: "Black & Grey",
    image:
      "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=800&q=80",
  },
  {
    id: "g3",
    title: "Mandala Sagrado",
    category: "Ornamental",
    image:
      "https://images.unsplash.com/photo-1590246814883-57c511e76a2f?w=800&q=80",
  },
  {
    id: "g4",
    title: "Rosa Delicada",
    category: "Fine Line",
    image:
      "https://images.unsplash.com/photo-1542556398-95fb5b9f9b48?w=800&q=80",
  },
  {
    id: "g5",
    title: "Tribal Moderno",
    category: "Geométrico",
    image:
      "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=800&q=80",
  },
  {
    id: "g6",
    title: "Retrato Familiar",
    category: "Retratos",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
  },
  {
    id: "g7",
    title: "Águila Imperial",
    category: "Realismo",
    image:
      "https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=800&q=80",
  },
  {
    id: "g8",
    title: "Lobo Nocturno",
    category: "Black & Grey",
    image:
      "https://images.unsplash.com/photo-1612459284270-27b9ff499f55?w=800&q=80",
  },
  {
    id: "g9",
    title: "Flor de Loto",
    category: "Ornamental",
    image:
      "https://images.unsplash.com/photo-1604869515882-4d10fa4b0492?w=800&q=80",
  },
  {
    id: "g10",
    title: "Mariposa Minimalista",
    category: "Fine Line",
    image:
      "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=800&q=80",
  },
  {
    id: "g11",
    title: "Patrón Sagrado",
    category: "Geométrico",
    image:
      "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800&q=80",
  },
  {
    id: "g12",
    title: "Mascota Querida",
    category: "Retratos",
    image:
      "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=800&q=80",
  },
] as const;

export const featuredWorkImages = [
  {
    id: "f1",
    title: "Retrato Hiperrealista",
    category: "Realismo",
    image:
      "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=1200&q=80",
    size: "large" as const,
  },
  {
    id: "f2",
    title: "León Black & Grey",
    category: "Black & Grey",
    image:
      "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=800&q=80",
    size: "medium" as const,
  },
  {
    id: "f3",
    title: "Mandala Ornamental",
    category: "Ornamental",
    image:
      "https://images.unsplash.com/photo-1590246814883-57c511e76a2f?w=800&q=80",
    size: "medium" as const,
  },
  {
    id: "f4",
    title: "Flores Fine Line",
    category: "Fine Line",
    image:
      "https://images.unsplash.com/photo-1542556398-95fb5b9f9b48?w=600&q=80",
    size: "small" as const,
  },
  {
    id: "f5",
    title: "Geométrico Minimalista",
    category: "Geométrico",
    image:
      "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&q=80",
    size: "small" as const,
  },
  {
    id: "f6",
    title: "Retrato Mascota",
    category: "Retratos",
    image:
      "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=600&q=80",
    size: "small" as const,
  },
] as const;

export const styleImages = {
  "black-grey":
    "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=800&q=80",
  realism:
    "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800&q=80",
  "fine-line":
    "https://images.unsplash.com/photo-1542556398-95fb5b9f9b48?w=800&q=80",
  portrait:
    "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
  geometric:
    "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=800&q=80",
  ornamental:
    "https://images.unsplash.com/photo-1590246814883-57c511e76a2f?w=800&q=80",
} as const;

export const aboutImages = {
  artist:
    "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=1200&q=80",
  studio1:
    "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=800&q=80",
  studio2:
    "https://images.unsplash.com/photo-1590246814883-57c511e76a2f?w=800&q=80",
  studio3:
    "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800&q=80",
  artistWorking:
    "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=1200&q=80",
} as const;

export const heroBackground =
  "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=1920&q=80";

export type GalleryImage = (typeof galleryImages)[number];
export type FeaturedWorkImage = (typeof featuredWorkImages)[number];
