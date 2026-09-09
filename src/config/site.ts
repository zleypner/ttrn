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
    // Core keywords
    "realism tattoo artist costa rica",
    "best tattoo artist costa rica",
    "english speaking tattoo artist costa rica",
    "black and grey tattoo costa rica",
    "portrait tattoo costa rica",
    "fine line tattoo costa rica",
    "tattoo san jose costa rica",
    "custom tattoo costa rica",
    "luxury tattoo costa rica",
    "professional tattoo artist",
    "tattoo near san jose airport",
    // USA tourist keywords
    "tattoo artist costa rica for americans",
    "tattoo vacation costa rica",
    "us tourist tattoo costa rica",
    "costa rica tattoo prices usd",
    "american tattoo artist costa rica",
    "tattoo while traveling costa rica",
    // European tourist keywords
    "tattoo artist costa rica for europeans",
    "uk tourist tattoo costa rica",
    "british tattoo artist costa rica",
    "european tattoo artist costa rica",
    "tattoo costa rica holiday",
    "tattoo artist costa rica english",
    "tattoo costa rica vacation package",
    "best tattoo shop central america",
    // International travel keywords
    "tattoo destination costa rica",
    "tattoo tourism costa rica",
    "international tattoo artist costa rica",
    "tourist friendly tattoo studio",
    "tattoo studio near airport costa rica",
    "world class tattoo artist costa rica",
    "premium tattoo experience costa rica",
    "hygienic tattoo studio costa rica",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
