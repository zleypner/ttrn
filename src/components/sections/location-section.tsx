"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/shared";
import { fadeInUp, scrollViewport } from "@/lib/animations/variants";
import { cn } from "@/lib/utils";

export function LocationSection() {
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.7!2d-84.0809002!3d9.9332754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e37e135438c9%3A0x1e3b5a3b8da73966!2sArmageddon%20Tattoo%20%26%20Piercing%20Studio!5e0!3m2!1sen!2scr!4v1692300000000!5m2!1sen!2scr`;

  return (
    <section id="location" className="section-padding bg-card/30">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Location"
          subtitle="Visit our studio in San José, Costa Rica"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={fadeInUp}
          className="mx-auto max-w-6xl"
        >
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="aspect-video overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  src={mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Studio Location"
                  className="h-full min-h-[400px] w-full"
                />
              </div>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              {/* Address */}
              <div
                className={cn(
                  "glass-card p-6",
                  "hover:border-olive/20 transition-colors duration-300"
                )}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="bg-olive/10 rounded-full p-3">
                    <MapPin className="text-olive h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold">
                    Address
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {siteConfig.location.address}
                </p>
                <p className="text-olive mt-2 text-sm">
                  {siteConfig.location.city}, {siteConfig.location.country}
                </p>
              </div>

              {/* Hours */}
              <div
                className={cn(
                  "glass-card p-6",
                  "hover:border-olive/20 transition-colors duration-300"
                )}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="bg-olive/10 rounded-full p-3">
                    <Clock className="text-olive h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold">Hours</h3>
                </div>
                <div className="text-muted-foreground space-y-1 text-sm">
                  <p>
                    <span className="text-foreground">Mon - Fri:</span>{" "}
                    {siteConfig.hours.weekdays}
                  </p>
                  <p>
                    <span className="text-foreground">Saturday:</span>{" "}
                    {siteConfig.hours.saturday}
                  </p>
                  <p>
                    <span className="text-foreground">Sunday:</span>{" "}
                    {siteConfig.hours.sunday}
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div
                className={cn(
                  "glass-card p-6",
                  "hover:border-olive/20 transition-colors duration-300"
                )}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="bg-olive/10 rounded-full p-3">
                    <Phone className="text-olive h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold">
                    Contact
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {siteConfig.contact.phone}
                </p>
              </div>

              {/* CTA */}
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello, I'd like to visit the studio.`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex w-full items-center justify-center gap-2 rounded-full px-6 py-4",
                  "btn-gold glow-gold-hover",
                  "text-base font-medium"
                )}
              >
                <WhatsAppIcon size={20} />
                Schedule a Visit
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
