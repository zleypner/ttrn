export const siteConfig = {
  name: "TaTa-U",
  artistName: "Rene Ruiz",
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
      lat: 9.9332754,
      lng: -84.0783253,
    },
  },
  contact: {
    phone: "+506 7111 1499",
    whatsapp: "50671111499",
    email: "info@reneruiztattoo.com",
    instagram: "reneruiz_tattoo",
    facebook: "rene.ruiz.714338",
  },
  hours: {
    weekdays: "10:00 AM - 7:00 PM",
    saturday: "10:00 AM - 5:00 PM",
    sunday: "Closed",
  },
  stats: {
    yearsExperience: 15,
    happyClients: 7000,
    countriesServed: 25,
    tattoosCompleted: 7000,
  },
  keywords: [
    "realism tattoo artist costa rica",
    "tattoo artist costa rica for americans",
    "english speaking tattoo artist costa rica",
    "best tattoo artist costa rica",
    "black and grey tattoo costa rica",
    "portrait tattoo costa rica",
    "tattoo vacation costa rica",
    "us tourist tattoo costa rica",
    "fine line tattoo costa rica",
    "tattoo san jose costa rica",
    "custom tattoo costa rica",
    "luxury tattoo costa rica",
    "professional tattoo artist",
    "tattoo near san jose airport",
    "costa rica tattoo prices usd",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
