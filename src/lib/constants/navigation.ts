// Main navigation links for homepage sections
export const navigationLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#estilos", label: "Estilos" },
  { href: "#galeria", label: "Galería" },
  { href: "#proceso", label: "Proceso" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
] as const;

// Page links for main site navigation
export const pageLinks = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Sobre Mí" },
  { href: "/services", label: "Servicios" },
] as const;

// Combined links for footer
export const footerLinks = {
  pages: [
    { href: "/", label: "Inicio" },
    { href: "/about", label: "Sobre Mí" },
    { href: "/services", label: "Servicios" },
  ],
  sections: [
    { href: "/#galeria", label: "Galería" },
    { href: "/#proceso", label: "Proceso" },
    { href: "/#testimonios", label: "Testimonios" },
    { href: "/#contacto", label: "Contacto" },
  ],
} as const;

export type NavigationLink = (typeof navigationLinks)[number];
export type PageLink = (typeof pageLinks)[number];
