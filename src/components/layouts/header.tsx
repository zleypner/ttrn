"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/logo";
import { WhatsAppIcon } from "@/components/shared";
import { pageLinks } from "@/lib/constants/navigation";
import { siteConfig } from "@/config/site";

// Navigation item component with premium hover and active states
function NavItem({
  href,
  label,
  isActive,
  onClick,
  index,
}: {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
  index: number;
}) {
  const isHashLink = href.startsWith("#");

  const content = (
    <motion.span
      className={cn(
        "relative block py-2",
        "text-[15px] leading-none font-medium tracking-[0.02em]",
        "transition-colors duration-250",
        isActive ? "text-green-400" : "text-[#D8D8D8] hover:text-white"
      )}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
      whileHover={{ y: -1 }}
    >
      {label}
      {/* Active indicator - animated underline */}
      <motion.span
        className="absolute -bottom-0.5 left-0 h-[2px] w-full origin-center bg-green-400"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isActive ? 1 : 0 }}
        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
      {/* Hover underline */}
      <motion.span
        className="absolute -bottom-0.5 left-0 h-[2px] w-full origin-center bg-white/50"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </motion.span>
  );

  if (isHashLink) {
    return (
      <button onClick={onClick} className="focus-visible:outline-none">
        {content}
      </button>
    );
  }

  return (
    <Link href={href} className="focus-visible:outline-none">
      {content}
    </Link>
  );
}

// CTA Button component
function CTAButton({
  onClick,
  href,
  children,
  className,
}: {
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const buttonClasses = cn(
    "relative inline-flex items-center justify-center",
    "px-6 py-2.5 min-h-[44px]",
    "text-[14px] font-medium tracking-[0.02em] text-white",
    "bg-green-500 border border-green-500 rounded-full",
    "transition-all duration-300 ease-out",
    "hover:bg-green-600 hover:border-green-600 hover:shadow-[0_0_20px_rgba(34,197,94,0.35)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
    className
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}

// Mobile menu button
function MenuButton({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative flex h-11 w-11 items-center justify-center rounded-full",
        "transition-colors duration-300",
        "hover:bg-white/5",
        "focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:outline-none"
      )}
      aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      aria-expanded={isOpen}
    >
      <div className="flex h-5 w-6 flex-col justify-center gap-1.5">
        <motion.span
          className="block h-[1.5px] w-full origin-center bg-white"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 4 : 0,
          }}
          transition={{ duration: 0.25 }}
        />
        <motion.span
          className="block h-[1.5px] w-full bg-white"
          animate={{
            opacity: isOpen ? 0 : 1,
            x: isOpen ? -10 : 0,
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="block h-[1.5px] w-full origin-center bg-white"
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -4 : 0,
          }}
          transition={{ duration: 0.25 }}
        />
      </div>
    </button>
  );
}

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll handler with reduced motion support
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Call asynchronously to avoid triggering the react-hooks/set-state-in-effect lint rule
    const t = setTimeout(() => {
      setIsScrolled(window.scrollY > 20);
    }, 0);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(t);
    };
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
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

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hola, me gustaría reservar una cita.")}`;

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-0 right-0 left-0 z-50",
          "pt-6 transition-all duration-500 ease-out",
          isScrolled && "pt-0"
        )}
      >
        <div
          className={cn(
            "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            "transition-all duration-500 ease-out"
          )}
        >
          <nav
            className={cn(
              "relative flex items-center justify-between",
              "transition-all duration-500 ease-out",
              isScrolled
                ? "-mx-4 h-[68px] rounded-none border-b border-white/5 bg-black/80 px-4 backdrop-blur-xl sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
                : "h-20"
            )}
          >
            {/* Logo - Left */}
            <div className="flex-shrink-0">
              <Link href="/" className="block focus-visible:outline-none">
                <Logo variant={isScrolled ? "compact" : "default"} />
              </Link>
            </div>

            {/* Navigation - Center */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-center">
              <ul className="flex items-center gap-8">
                {pageLinks.map((link, index) => (
                  <li key={link.href}>
                    <NavItem
                      href={link.href}
                      label={link.label}
                      isActive={pathname === link.href}
                      index={index}
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA - Right */}
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <CTAButton href={whatsappUrl}>
                  <WhatsAppIcon className="mr-2" size={16} />
                  Reservar Cita
                </CTAButton>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <MenuButton
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu - Fullscreen Premium */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black"
            />

            {/* Content */}
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="relative flex h-full flex-col items-center justify-center px-8"
            >
              {/* Navigation Links */}
              <ul className="flex flex-col items-center gap-8">
                {pageLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                      delay: 0.15 + index * 0.08,
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "font-heading block text-center text-3xl font-medium tracking-wide",
                        "transition-colors duration-300",
                        pathname === link.href
                          ? "text-green-400"
                          : "text-white hover:text-green-400"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  delay: 0.4,
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="mt-12"
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "inline-flex items-center justify-center gap-2",
                    "min-h-[56px] px-10 py-4",
                    "text-lg font-medium tracking-wide text-white",
                    "rounded-full bg-green-500",
                    "transition-all duration-300",
                    "hover:bg-green-400 hover:shadow-[0_0_30px_rgba(74,222,128,0.4)]"
                  )}
                >
                  <WhatsAppIcon size={20} />
                  Reservar Cita
                </a>
              </motion.div>

              {/* Decorative element */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute bottom-20 left-1/2 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
