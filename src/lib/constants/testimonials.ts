export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  style: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "María González",
    location: "San José, Costa Rica",
    rating: 5,
    text: "René capturó perfectamente el retrato de mi abuela. Cada detalle, cada arruga, cada expresión. Es como llevarla siempre conmigo. Su profesionalismo y paciencia durante todo el proceso fueron excepcionales.",
    style: "Retrato",
  },
  {
    id: "2",
    name: "Carlos Mendez",
    location: "California, USA",
    rating: 5,
    text: "Viajé específicamente desde California para tatuarme con René. Su trabajo en realismo black & grey es de los mejores que he visto. Valió cada kilómetro del viaje.",
    style: "Black & Grey",
  },
  {
    id: "3",
    name: "Andrea Stein",
    location: "Berlín, Alemania",
    rating: 5,
    text: "Durante mis vacaciones en Costa Rica descubrí a René. El nivel de detalle en mi tatuaje fine line es impresionante. Todos mis amigos en Europa quieren saber quién lo hizo.",
    style: "Fine Line",
  },
  {
    id: "4",
    name: "Roberto Jiménez",
    location: "Guanacaste, Costa Rica",
    rating: 5,
    text: "Tenía miedo porque era mi primer tatuaje, pero René me explicó todo el proceso y me hizo sentir completamente cómodo. El resultado superó todas mis expectativas.",
    style: "Geométrico",
  },
  {
    id: "5",
    name: "Sophie Laurent",
    location: "París, Francia",
    rating: 5,
    text: "Un verdadero artista. René no solo tatúa, crea obras de arte en la piel. Mi manga de realismo es mi posesión más preciada. Gracias por tu increíble talento.",
    style: "Realismo",
  },
  {
    id: "6",
    name: "David Chen",
    location: "Toronto, Canadá",
    rating: 5,
    text: "La atención al detalle de René es incomparable. Mi tatuaje ornamental tiene una precisión que parece imposible. Definitivamente regresaré para mi próxima pieza.",
    style: "Ornamental",
  },
];
