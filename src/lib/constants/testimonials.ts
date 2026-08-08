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
    text: "René perfectly captured the portrait of my grandmother. Every detail, every wrinkle, every expression. It's like carrying her with me always. His professionalism and patience throughout the entire process were exceptional.",
    style: "Portrait",
  },
  {
    id: "2",
    name: "Carlos Mendez",
    location: "California, USA",
    rating: 5,
    text: "I traveled specifically from California to get tattooed by René. His work in black & grey realism is some of the best I've ever seen. Worth every mile of the trip.",
    style: "Black & Grey",
  },
  {
    id: "3",
    name: "Andrea Stein",
    location: "Berlin, Germany",
    rating: 5,
    text: "During my vacation in Costa Rica I discovered René. The level of detail in my fine line tattoo is impressive. All my friends in Europe want to know who did it.",
    style: "Fine Line",
  },
  {
    id: "4",
    name: "Roberto Jiménez",
    location: "Guanacaste, Costa Rica",
    rating: 5,
    text: "I was nervous because it was my first tattoo, but René explained the entire process and made me feel completely comfortable. The result exceeded all my expectations.",
    style: "Geometric",
  },
  {
    id: "5",
    name: "Sophie Laurent",
    location: "Paris, France",
    rating: 5,
    text: "A true artist. René doesn't just tattoo, he creates works of art on skin. My realism sleeve is my most prized possession. Thank you for your incredible talent.",
    style: "Realism",
  },
  {
    id: "6",
    name: "David Chen",
    location: "Toronto, Canada",
    rating: 5,
    text: "René's attention to detail is unmatched. My ornamental tattoo has a precision that seems impossible. I will definitely return for my next piece.",
    style: "Ornamental",
  },
];
