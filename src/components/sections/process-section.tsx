"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { staggerChild, scrollViewport } from "@/lib/animations/variants";

export function ProcessSection() {
  return (
    <section id="process" className="section-padding">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerChild}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4">
            Ready to start your project?
          </p>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hi! I want to start the process for my tattoo. Can we schedule a consultation?")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-flex items-center gap-2 rounded-full px-8 py-3"
          >
            <MessageCircle size={18} />
            Start My Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
