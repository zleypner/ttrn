export const env = {
  // App
  APP_URL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  NODE_ENV: process.env.NODE_ENV || "development",

  // Flags
  isDev: process.env.NODE_ENV === "development",
  isProd: process.env.NODE_ENV === "production",
} as const;
