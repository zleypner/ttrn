"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  staggerContainer,
  staggerChild,
  scrollViewport,
  fadeInUp,
} from "@/lib/animations/variants";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timeline: TimelineItem[] = [
  {
    year: "2009",
    title: "Inicio del Viaje",
    description:
      "Comencé mi carrera como aprendiz en un reconocido estudio de tatuajes, donde descubrí mi pasión por el arte corporal permanente.",
  },
  {
    year: "2012",
    title: "Especialización en Realismo",
    description:
      "Viajé a Europa para perfeccionar mi técnica en realismo y black & grey con maestros del arte del tatuaje.",
  },
  {
    year: "2015",
    title: "Apertura del Estudio",
    description:
      "Abrí mi propio estudio en Costa Rica, creando un espacio dedicado al arte del tatuaje de alta calidad.",
  },
  {
    year: "2018",
    title: "Reconocimiento Internacional",
    description:
      "Participé en convenciones internacionales, ganando premios por trabajos de realismo y retratos.",
  },
  {
    year: "2022",
    title: "Expansión Artística",
    description:
      "Incorporé nuevas técnicas como fine line y geométrico, ampliando mi repertorio artístico.",
  },
  {
    year: "Presente",
    title: "Continuando el Legado",
    description:
      "Sigo dedicado a crear obras de arte únicas para clientes de todo el mundo, manteniendo los más altos estándares de calidad.",
  },
];

const certifications = [
  "Certificación en Bioseguridad y Control de Infecciones",
  "Diploma en Técnicas Avanzadas de Tatuaje",
  "Certificación en Primeros Auxilios",
  "Miembro de la Asociación de Tatuadores Profesionales",
];

const philosophy = [
  {
    title: "Arte con Propósito",
    description:
      "Cada tatuaje debe tener un significado profundo para quien lo lleva. Mi trabajo es ayudarte a expresar tu historia de manera visual.",
  },
  {
    title: "Excelencia Técnica",
    description:
      "La perfección está en los detalles. Cada línea, cada sombra, cada textura es trabajada con precisión milimétrica.",
  },
  {
    title: "Experiencia Premium",
    description:
      "Desde la consulta inicial hasta el cuidado posterior, cada paso del proceso está diseñado para tu comodidad y satisfacción.",
  },
];

export function ArtistStory() {
  return (
    <section className="section-padding">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        {/* Philosophy Section */}
        <div className="mb-24">
          <SectionHeading
            title="Mi Filosofía"
            subtitle="Los principios que guían cada pieza que creo."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-3"
          >
            {philosophy.map((item, index) => (
              <motion.div
                key={item.title}
                variants={staggerChild}
                className={cn(
                  "group relative rounded-2xl p-8",
                  "bg-card/50 border border-white/5",
                  "hover:border-olive/20 transition-all duration-500"
                )}
              >
                <div className="from-olive to-copper absolute top-0 left-8 h-1 w-12 rounded-full bg-gradient-to-r" />
                <span className="text-olive/30 font-heading mb-4 inline-block text-6xl font-bold">
                  0{index + 1}
                </span>
                <h3 className="font-heading text-foreground mb-3 text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline Section */}
        <div className="mb-24">
          <SectionHeading
            title="Mi Historia"
            subtitle="El camino que me ha llevado a donde estoy hoy."
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="from-olive via-olive/50 absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b to-transparent md:left-1/2" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={scrollViewport}
              variants={staggerContainer}
              className="space-y-12"
            >
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  variants={staggerChild}
                  className={cn(
                    "relative pl-12 md:pl-0",
                    "md:grid md:grid-cols-2 md:gap-8",
                    index % 2 === 0 ? "md:text-right" : ""
                  )}
                >
                  {/* Dot */}
                  <div
                    className={cn(
                      "absolute top-0 left-0 md:left-1/2",
                      "h-8 w-8 -translate-x-1/2 md:-translate-x-1/2",
                      "bg-card border-olive rounded-full border-2",
                      "z-10 flex items-center justify-center"
                    )}
                  >
                    <div className="bg-olive h-3 w-3 rounded-full" />
                  </div>

                  {/* Content */}
                  <div
                    className={cn(
                      index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
                    )}
                  >
                    <span className="text-olive font-heading text-lg font-bold">
                      {item.year}
                    </span>
                    <h3 className="font-heading text-foreground mt-1 mb-2 text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={fadeInUp}
          className={cn(
            "relative rounded-2xl p-8 md:p-12",
            "from-card via-card/80 to-card bg-gradient-to-br",
            "border border-white/5"
          )}
        >
          <div className="absolute top-0 right-0 h-40 w-40 overflow-hidden rounded-2xl">
            <div className="from-olive/10 to-copper/10 absolute -top-20 -right-20 h-40 w-40 rotate-45 bg-gradient-to-br" />
          </div>

          <div className="relative z-10">
            <h3 className="font-heading text-foreground mb-6 text-2xl font-semibold">
              Certificaciones y Credenciales
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-olive h-2 w-2 flex-shrink-0 rounded-full" />
                  <span className="text-muted-foreground text-sm">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
