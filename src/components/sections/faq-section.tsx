"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { faqItems, type FAQItem } from "@/lib/constants/faq";
import {
  staggerContainer,
  staggerChild,
  scrollViewport,
} from "@/lib/animations/variants";

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      variants={staggerChild}
      className={cn(
        "overflow-hidden rounded-xl border border-white/5",
        "transition-all duration-300",
        isOpen && "border-olive/20 bg-card/50"
      )}
    >
      <button
        onClick={onToggle}
        className={cn(
          "flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6",
          "transition-colors duration-300",
          "hover:bg-card/30"
        )}
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            "text-sm font-medium transition-colors duration-300 sm:text-base",
            isOpen ? "text-olive" : "text-foreground"
          )}
        >
          {item.question}
        </span>
        <ChevronDown
          size={20}
          className={cn(
            "text-olive flex-shrink-0 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5 sm:px-6 sm:pb-6">
              <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-card/30">
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center justify-center gap-3">
          <HelpCircle className="text-olive h-6 w-6" />
        </div>

        <SectionHeading
          title="Preguntas Frecuentes"
          subtitle="Respuestas a las dudas más comunes sobre el proceso de tatuaje."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerContainer}
          className="space-y-4"
        >
          {faqItems.map((item, index) => (
            <FAQAccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </motion.div>

        {/* Additional Contact CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerChild}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">¿Tienes otra pregunta?</p>
          <button
            onClick={() => {
              const element = document.querySelector("#contacto");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-outline-gold rounded-full px-6 py-2.5 text-sm"
          >
            Contáctame
          </button>
        </motion.div>
      </div>
    </section>
  );
}
