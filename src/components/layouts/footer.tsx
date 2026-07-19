"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { SocialLinks } from "@/components/shared/social-links";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/shared";
import { footerLinks } from "@/lib/constants/navigation";
import { fadeInUp, scrollViewport } from "@/lib/animations/variants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-white/5">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={fadeInUp}
          className="py-16 md:py-20"
        >
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/">
                <Logo className="mb-6" />
              </Link>
              <p className="text-muted-foreground mb-6 max-w-xs text-sm leading-relaxed">
                Arte corporal de lujo en Costa Rica. Cada tatuaje es una obra
                única, diseñada exclusivamente para ti.
              </p>
              <SocialLinks variant="footer" />
            </div>

            {/* Pages Column */}
            <div>
              <h3 className="font-heading text-olive mb-6 text-sm font-semibold tracking-wider uppercase">
                Páginas
              </h3>
              <ul className="space-y-3">
                {footerLinks.pages.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="font-heading text-olive mt-8 mb-6 text-sm font-semibold tracking-wider uppercase">
                Secciones
              </h3>
              <ul className="space-y-3">
                {footerLinks.sections.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-heading text-olive mb-6 text-sm font-semibold tracking-wider uppercase">
                Contacto
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="text-olive mt-0.5 flex-shrink-0"
                  />
                  <span className="text-muted-foreground text-sm">
                    {siteConfig.location.address}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-olive flex-shrink-0" />
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock
                    size={18}
                    className="text-olive mt-0.5 flex-shrink-0"
                  />
                  <div className="text-muted-foreground text-sm">
                    <p>Lun - Vie: {siteConfig.hours.weekdays}</p>
                    <p>Sábado: {siteConfig.hours.saturday}</p>
                    <p>Domingo: {siteConfig.hours.sunday}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* CTA Column */}
            <div>
              <h3 className="font-heading text-olive mb-6 text-sm font-semibold tracking-wider uppercase">
                ¿Listo para tu tatuaje?
              </h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Agenda una consulta gratuita y comencemos a crear tu pieza
                única.
              </p>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hola, me gustaría agendar una cita para un tatuaje.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm"
              >
                <WhatsAppIcon size={16} />
                WhatsApp
              </a>

              {/* Quick Links */}
              <div className="mt-8 border-t border-white/5 pt-6">
                <h4 className="text-muted-foreground mb-4 text-xs tracking-wider uppercase">
                  Enlaces Rápidos
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/#galeria"
                    className="bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 rounded-full px-3 py-1.5 text-xs transition-colors"
                  >
                    Galería
                  </Link>
                  <Link
                    href="/about"
                    className="bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 rounded-full px-3 py-1.5 text-xs transition-colors"
                  >
                    Historia
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-muted-foreground text-center text-xs sm:text-left">
              © {currentYear} {siteConfig.name}. Todos los derechos reservados.
            </p>
            <p className="text-muted-foreground text-xs">
              Diseñado con excelencia en Costa Rica
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
