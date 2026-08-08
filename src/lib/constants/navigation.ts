// Main navigation links for homepage sections
export const navigationLinks = [
  { href: "#home", label: "Home" },
  { href: "#styles", label: "Styles" },
  { href: "#gallery", label: "Gallery" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

// Page links for main site navigation
export const pageLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/#faq", label: "FAQ" },
] as const;

// Combined links for footer
export const footerLinks = {
  pages: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
  ],
  sections: [
    { href: "/#gallery", label: "Gallery" },
    { href: "/#process", label: "Process" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#contact", label: "Contact" },
  ],
} as const;

export type NavigationLink = (typeof navigationLinks)[number];
export type PageLink = (typeof pageLinks)[number];
