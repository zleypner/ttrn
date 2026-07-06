"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/logo";
import { navigationLinks, pageLinks } from "@/lib/constants/navigation";
import { navbarVariants } from "@/lib/animations/variants";

export function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Only track sections on homepage
      if (!isHomePage) return;

      const sections = navigationLinks.map((link) =>
        link.href.replace("#", "")
      );

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    // Handle hash links
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <motion.header
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/80 border-b border-white/5 backdrop-blur-lg"
            : "bg-transparent"
        )}
      >
        {/* Scroll Progress Indicator */}
        <motion.div
          className="scroll-progress absolute right-0 bottom-0 left-0 h-[2px] origin-left"
          style={{ scaleX }}
        />

        <nav className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between sm:h-20">
            {/* Logo */}
            <Link href="/">
              <Logo variant={isScrolled ? "compact" : "default"} />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden items-center gap-6 lg:flex">
              {/* Page Links */}
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative text-sm font-medium tracking-wide transition-colors duration-300",
                      "hover:text-olive",
                      pathname === link.href
                        ? "text-olive"
                        : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <motion.span
                        layoutId="activePage"
                        className="bg-olive absolute right-0 -bottom-1 left-0 h-px"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </li>
              ))}

              {/* Divider */}
              <li className="h-4 w-px bg-white/10" />

              {/* Section Links (Homepage only) */}
              {isHomePage &&
                navigationLinks.slice(1).map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={cn(
                        "relative text-sm font-medium tracking-wide transition-colors duration-300",
                        "hover:text-olive",
                        activeSection === link.href.replace("#", "")
                          ? "text-olive"
                          : "text-muted-foreground"
                      )}
                    >
                      {link.label}
                      {activeSection === link.href.replace("#", "") && (
                        <motion.span
                          layoutId="activeSection"
                          className="bg-olive absolute right-0 -bottom-1 left-0 h-px"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </button>
                  </li>
                ))}
            </ul>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              {isHomePage ? (
                <button
                  onClick={() => handleNavClick("#contacto")}
                  className="btn-gold rounded-full px-6 py-2.5 text-sm"
                >
                  Agenda tu Cita
                </button>
              ) : (
                <Link
                  href="/#contacto"
                  className="btn-gold inline-block rounded-full px-6 py-2.5 text-sm"
                >
                  Agenda tu Cita
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-olive p-2 transition-colors lg:hidden"
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-background/95 absolute inset-0 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="relative flex h-full flex-col items-center justify-center gap-8"
            >
              <ul className="flex flex-col items-center gap-6">
                {/* Page Links */}
                {pageLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "font-heading text-2xl font-medium tracking-wide transition-colors",
                        "hover:text-olive",
                        pathname === link.href
                          ? "text-olive"
                          : "text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}

                {/* Section Links (Homepage only) */}
                {isHomePage &&
                  navigationLinks.slice(1).map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 + index * 0.05 }}
                    >
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className={cn(
                          "font-heading text-xl font-medium tracking-wide transition-colors",
                          "hover:text-olive",
                          activeSection === link.href.replace("#", "")
                            ? "text-olive"
                            : "text-muted-foreground"
                        )}
                      >
                        {link.label}
                      </button>
                    </motion.li>
                  ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {isHomePage ? (
                  <button
                    onClick={() => handleNavClick("#contacto")}
                    className="btn-gold rounded-full px-8 py-3 text-base"
                  >
                    Agenda tu Cita
                  </button>
                ) : (
                  <Link
                    href="/#contacto"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-gold inline-block rounded-full px-8 py-3 text-base"
                  >
                    Agenda tu Cita
                  </Link>
                )}
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
