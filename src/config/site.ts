export const siteConfig = {
  name: "Tata-u",
  artistName: "René Ruíz",
  description:
    "Tatuador profesional en Costa Rica especializado en realismo, black and grey, fine line y retratos. Arte corporal de lujo con más de 15 años de experiencia.",
  url: "https://reneruiztattoo.com",
  ogImage: "https://reneruiztattoo.com/og.jpg",
  location: {
    city: "San José",
    region: "San José",
    country: "Costa Rica",
    address: "50 norte de Banco Popular, frente a Office Depot",
    coordinates: {
      lat: 9.9281,
      lng: -84.0907,
    },
  },
  contact: {
    phone: "+506 8888-8888",
    whatsapp: "50688888888",
    email: "info@reneruiztattoo.com",
    instagram: "reneruiztattoo",
    facebook: "reneruiztattoo",
  },
  hours: {
    weekdays: "10:00 AM - 7:00 PM",
    saturday: "10:00 AM - 5:00 PM",
    sunday: "Cerrado",
  },
  stats: {
    yearsExperience: 15,
    happyClients: 2500,
    countriesServed: 25,
    tattoosCompleted: 5000,
  },
  keywords: [
    "Tattoo Artist Costa Rica",
    "Best Tattoo Artist Costa Rica",
    "Black and Grey Tattoo Costa Rica",
    "Realism Tattoo Costa Rica",
    "Fine Line Tattoo Costa Rica",
    "Portrait Tattoo Costa Rica",
    "Tattoo Guanacaste",
    "Tattoo Playa del Coco",
    "Luxury Tattoo Costa Rica",
    "Tatuador Costa Rica",
    "Tatuajes Realistas Costa Rica",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
