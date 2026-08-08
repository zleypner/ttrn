export const siteConfig = {
  name: "Costa Rica Tattoos",
  artistName: "René Ruíz",
  description:
    "Professional tattoo artist in Costa Rica specializing in realism, black and grey, fine line, and portraits. Luxury body art with over 15 years of experience.",
  url: "https://www.costaricatattoos.com",
  ogImage: "https://www.costaricatattoos.com/og.jpg",
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
    phone: "+506 7111 1499",
    whatsapp: "50671111499",
    email: "info@reneruiztattoo.com",
    instagram: "reneruiztattoo",
    facebook: "reneruiztattoo",
  },
  hours: {
    weekdays: "10:00 AM - 7:00 PM",
    saturday: "10:00 AM - 5:00 PM",
    sunday: "Closed",
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
    "Tattoo San Jose Costa Rica",
    "Custom Tattoo Costa Rica",
    "Luxury Tattoo Costa Rica",
    "Professional Tattoo Artist",
    "Tattoo Shop Costa Rica",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
