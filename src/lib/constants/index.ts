export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  SERVICES: "/services",
  LOGIN: "/login",
  REGISTER: "/register",
  DASHBOARD: "/dashboard",
  PROFILE: "/profile",
  SETTINGS: "/settings",
} as const;

export const API_ROUTES = {
  AUTH: "/api/auth",
  USERS: "/api/users",
} as const;

export const QUERY_KEYS = {
  USER: ["user"],
  USERS: ["users"],
} as const;

export * from "./images";
export * from "./tattoo-styles";
export * from "./navigation";
export * from "./testimonials";
export * from "./faq";
