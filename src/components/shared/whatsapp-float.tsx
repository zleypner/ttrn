"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function WhatsAppFloat() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hola, me gustaría agendar una cita para un tatuaje.")}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition-all duration-300 hover:bg-green-600 hover:shadow-xl"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />

      {/* Pulse animation */}
      <span className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-25" />

      {/* Tooltip */}
      <span className="bg-card text-foreground pointer-events-none absolute right-full mr-3 rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        ¡Escríbeme!
      </span>
    </motion.a>
  );
}
