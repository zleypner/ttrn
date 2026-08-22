"use client";

import { WhatsAppIcon } from "./whatsapp-icon";
import { siteConfig } from "@/config/site";

export function WhatsAppFloat() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hola, me gustaría agendar una cita para un tatuaje.")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600 hover:shadow-xl active:scale-95"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7 text-white" size={28} />

      {/* Tooltip */}
      <span className="bg-card text-foreground pointer-events-none absolute right-full mr-3 rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        Contact me!
      </span>
    </a>
  );
}
