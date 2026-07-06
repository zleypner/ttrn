"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, Clock, Phone } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";
import { fadeInUp, scrollViewport } from "@/lib/animations/variants";

export function ContactSection() {
  return (
    <section id="contacto" className="section-padding">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Contáctame"
          subtitle="¿Listo para tu próximo tatuaje? Escríbeme y empecemos a crear algo extraordinario."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={fadeInUp}
          className="mx-auto max-w-4xl"
        >
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Info */}
            <div className="glass-card p-6 sm:p-8">
              <h3 className="font-heading text-foreground mb-6 text-xl font-semibold">
                Contacto Directo
              </h3>

              <div className="space-y-5">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                >
                  <div className="rounded-xl bg-green-500/10 p-3 transition-colors group-hover:bg-green-500/20">
                    <MessageCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">WhatsApp</p>
                    <p className="text-foreground group-hover:text-olive font-medium transition-colors">
                      {siteConfig.contact.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="group flex items-center gap-4"
                >
                  <div className="bg-olive/10 group-hover:bg-olive/20 rounded-xl p-3 transition-colors">
                    <Mail className="text-olive h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Email</p>
                    <p className="text-foreground group-hover:text-olive font-medium transition-colors">
                      {siteConfig.contact.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="group flex items-center gap-4"
                >
                  <div className="bg-accent-red/10 group-hover:bg-accent-red/20 rounded-xl p-3 transition-colors">
                    <Phone className="text-accent-red h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Teléfono</p>
                    <p className="text-foreground group-hover:text-olive font-medium transition-colors">
                      {siteConfig.contact.phone}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="glass-card p-6 sm:p-8">
              <h3 className="font-heading text-foreground mb-6 text-xl font-semibold">
                Ubicación
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="bg-olive/10 rounded-xl p-3">
                    <MapPin className="text-olive h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Dirección</p>
                    <p className="text-foreground font-medium">
                      {siteConfig.location.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-olive/10 rounded-xl p-3">
                    <Clock className="text-olive h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Horario</p>
                    <p className="text-foreground font-medium">
                      Lun - Vie: {siteConfig.hours.weekdays}
                    </p>
                    <p className="text-foreground font-medium">
                      Sábado: {siteConfig.hours.saturday}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Domingo: {siteConfig.hours.sunday}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
