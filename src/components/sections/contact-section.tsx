"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/shared";
import { fadeInUp, scrollViewport } from "@/lib/animations/variants";

export function ContactSection() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Contact Me"
          subtitle="Ready for your next tattoo? Write to me and let's start creating something extraordinary."
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
                Direct Contact
              </h3>

              <div className="space-y-5">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                >
                  <div className="rounded-xl bg-green-500/10 p-3 transition-colors group-hover:bg-green-500/20">
                    <WhatsAppIcon
                      className="h-5 w-5 text-green-500"
                      size={20}
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">WhatsApp</p>
                    <p className="text-foreground group-hover:text-olive font-medium transition-colors">
                      {siteConfig.contact.phone}
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
                    <p className="text-muted-foreground text-sm">Phone</p>
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
                Location
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="bg-olive/10 rounded-xl p-3">
                    <MapPin className="text-olive h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Address</p>
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
                    <p className="text-muted-foreground text-sm">Hours</p>
                    <p className="text-foreground font-medium">
                      Mon - Fri: {siteConfig.hours.weekdays}
                    </p>
                    <p className="text-foreground font-medium">
                      Saturday: {siteConfig.hours.saturday}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Sunday: {siteConfig.hours.sunday}
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
