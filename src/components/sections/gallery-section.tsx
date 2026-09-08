"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import Image from "next/image";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { WhatsAppIcon } from "@/components/shared";
import { galleryImages } from "@/lib/constants/images";
import {
  staggerContainer,
  staggerChild,
  scrollViewport,
} from "@/lib/animations/variants";

// =============================================================================
// Type Definitions & Interfaces
// =============================================================================

/** Gallery filter categories based on portafolio folder structure */
export type CategoryType =
  | "all"
  | "realismo"
  | "full-color"
  | "micro-realism"
  | "japones"
  | "tribal"
  | "otros";

/** Structure for a tattoo gallery item */
export interface TattooItem {
  id: string;
  title: string;
  category: string;
  image: string;
  categoryType?: CategoryType;
}

/** Filter button configuration specification */
export interface FilterCategoryOption {
  label: string;
  value: CategoryType;
  description: string;
}

// =============================================================================
// Constants & Configuration
// =============================================================================

/** Default filter category when no valid URL param is specified */
const DEFAULT_CATEGORY: CategoryType = "realismo";

/** URL search parameter key */
const CATEGORY_PARAM = "category";

/** Filter categories based on portafolio folder structure */
export const CATEGORY_OPTIONS: FilterCategoryOption[] = [
  {
    label: "All",
    value: "all",
    description: "Browse full tattoo portfolio",
  },
  {
    label: "Realismo",
    value: "realismo",
    description: "Photorealistic realism tattoos",
  },
  {
    label: "Full Color",
    value: "full-color",
    description: "Vibrant full color tattoo pieces",
  },
  {
    label: "Micro Realism",
    value: "micro-realism",
    description: "Detailed micro realism tattoos",
  },
  {
    label: "Japonés",
    value: "japones",
    description: "Traditional Japanese style tattoos",
  },
  {
    label: "Tribal",
    value: "tribal",
    description: "Bold tribal and pattern tattoos",
  },
  {
    label: "Otros",
    value: "otros",
    description: "Other custom styles and designs",
  },
];

/** Valid category set for strict type checking */
const VALID_CATEGORIES = new Set<CategoryType>(
  CATEGORY_OPTIONS.map((cat) => cat.value)
);

// =============================================================================
// Helper Functions
// =============================================================================

/**
 * Maps raw gallery item categories to the supported CategoryTypes based on portafolio folders.
 */
export function mapToCategoryType(category: string): CategoryType {
  const norm = category.toLowerCase().trim();
  if (norm === "realismo") return "realismo";
  if (norm === "full color") return "full-color";
  if (norm === "micro realism") return "micro-realism";
  if (norm === "japonés" || norm === "japones") return "japones";
  if (norm === "tribal") return "tribal";
  if (norm === "otros") return "otros";
  return "otros";
}

/**
 * Validates if a raw URL parameter is a valid CategoryType
 */
export function isValidCategory(value: string | null): value is CategoryType {
  return value !== null && VALID_CATEGORIES.has(value as CategoryType);
}

/**
 * Normalizes gallery items into TattooItem array with typed categoryType
 */
export function normalizeGalleryItems(
  items: typeof galleryImages
): TattooItem[] {
  return items.map((item) => ({
    id: item.id,
    title: item.title,
    category: item.category,
    image: item.image,
    categoryType: mapToCategoryType(item.category),
  }));
}

/**
 * Filters items based on selected CategoryType
 */
export function filterTattoosByCategory(
  items: TattooItem[],
  selectedCategory: CategoryType
): TattooItem[] {
  if (selectedCategory === "all") {
    return items;
  }
  return items.filter((item) => item.categoryType === selectedCategory);
}

// =============================================================================
// Inner Gallery Component (Uses App Router Navigation Hooks)
// =============================================================================

function GallerySectionInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Read URL category or default to 'realism'
  const rawParam = searchParams.get(CATEGORY_PARAM);
  const activeCategory: CategoryType = isValidCategory(rawParam)
    ? rawParam
    : DEFAULT_CATEGORY;

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  // Automatically update URL query if ?category= is missing or invalid
  useEffect(() => {
    if (!isValidCategory(rawParam)) {
      const params = new URLSearchParams(searchParams.toString());
      params.set(CATEGORY_PARAM, DEFAULT_CATEGORY);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
  }, [rawParam, pathname, router, searchParams]);

  // Handle category filter button click with smooth URL replace
  const handleCategoryChange = useCallback(
    (category: CategoryType) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(CATEGORY_PARAM, category);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, pathname, router]
  );

  // Normalize and filter tattoo items
  const allTattoos = normalizeGalleryItems(galleryImages);
  const filteredItems = filterTattoosByCategory(allTattoos, activeCategory);

  // Filter out failed images from display
  const displayItems = filteredItems.filter(
    (item) => !failedImages.has(item.id)
  );

  // Lock scroll during Lightbox modal display
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  // Lightbox Navigation
  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goToPrevious = useCallback(() => {
    if (lightboxIndex !== null && displayItems.length > 0) {
      setLightboxIndex((prev) =>
        prev === 0 ? displayItems.length - 1 : (prev as number) - 1
      );
    }
  }, [lightboxIndex, displayItems.length]);

  const goToNext = useCallback(() => {
    if (lightboxIndex !== null && displayItems.length > 0) {
      setLightboxIndex((prev) =>
        prev === displayItems.length - 1 ? 0 : (prev as number) + 1
      );
    }
  }, [lightboxIndex, displayItems.length]);

  // Lightbox Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, goToPrevious, goToNext]);

  const handleImageLoad = (id: string) => {
    setLoadedImages((prev) => new Set(prev).add(id));
  };

  const handleImageError = (id: string) => {
    setFailedImages((prev) => new Set(prev).add(id));
    setLoadedImages((prev) => new Set(prev).add(id)); // Hide skeleton
  };

  return (
    <section
      id="gallery"
      className="section-padding"
      aria-label="Tattoo Portfolio Gallery"
    >
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Tattoo Portfolio Gallery"
          subtitle="Browse custom realism, full color, tribal, and specialty tattoo artwork by Rene Ruiz."
        />

        {/* Category Filter Buttons (5 Categories) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerContainer}
          className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-3"
          role="tablist"
          aria-label="Tattoo gallery categories"
        >
          {CATEGORY_OPTIONS.map((option) => {
            const isSelected = activeCategory === option.value;

            return (
              <motion.button
                key={option.value}
                type="button"
                variants={staggerChild}
                onClick={() => handleCategoryChange(option.value)}
                role="tab"
                aria-selected={isSelected}
                aria-pressed={isSelected}
                aria-controls="gallery-grid"
                tabIndex={isSelected ? 0 : -1}
                title={option.description}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 sm:px-6",
                  "focus:ring-olive/50 focus:ring-offset-background focus:ring-2 focus:ring-offset-2 focus:outline-none",
                  isSelected
                    ? "btn-gold shadow-gold/20 scale-105 shadow-lg"
                    : "bg-secondary/80 text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                {option.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          id="gallery-grid"
          layout
          role="tabpanel"
          aria-label={`Showing ${displayItems.length} ${activeCategory} tattoos`}
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {displayItems.length > 0 ? (
              displayItems.map((item, index) => (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  onClick={() => openLightbox(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openLightbox(index);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${item.title} - ${item.category} tattoo`}
                  className={cn(
                    "group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-xl",
                    "focus:ring-olive/50 focus:ring-offset-background focus:ring-2 focus:ring-offset-2 focus:outline-none"
                  )}
                >
                  {/* Image */}
                  <Image
                    src={item.image}
                    alt={`${item.title} - ${item.category} style tattoo by ${siteConfig.artistName}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className={cn(
                      "object-cover transition-all duration-500",
                      "group-hover:scale-110",
                      loadedImages.has(item.id) ? "opacity-100" : "opacity-0"
                    )}
                    onLoad={() => handleImageLoad(item.id)}
                    onError={() => handleImageError(item.id)}
                  />

                  {/* Skeleton Loader */}
                  {!loadedImages.has(item.id) && (
                    <div
                      className="from-secondary via-card to-secondary absolute inset-0 animate-pulse bg-gradient-to-br"
                      aria-hidden="true"
                    />
                  )}

                  {/* Hover Overlay */}
                  <div
                    className={cn(
                      "from-background/90 via-background/40 absolute inset-0 bg-gradient-to-t to-transparent",
                      "opacity-0 transition-all duration-300 group-hover:opacity-100"
                    )}
                    aria-hidden="true"
                  />

                  {/* Hover Content */}
                  <div
                    className={cn(
                      "absolute inset-0 flex flex-col items-center justify-center p-4 text-center",
                      "opacity-0 transition-all duration-300 group-hover:opacity-100",
                      "scale-90 transform group-hover:scale-100"
                    )}
                    aria-hidden="true"
                  >
                    <div className="bg-olive/20 mb-3 rounded-full p-3 backdrop-blur-sm">
                      <ZoomIn size={24} className="text-olive" />
                    </div>
                    <p className="text-foreground text-sm font-medium">
                      {item.title}
                    </p>
                    <p className="text-olive text-xs">{item.category}</p>
                  </div>

                  {/* Border */}
                  <div
                    className={cn(
                      "absolute inset-0 rounded-xl border border-white/5",
                      "group-hover:border-olive/40 transition-colors duration-300"
                    )}
                    aria-hidden="true"
                  />
                </motion.article>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-16 text-center"
              >
                <p className="text-muted-foreground text-lg">
                  No tattoos found in this category.
                </p>
                <button
                  type="button"
                  onClick={() => handleCategoryChange("realismo")}
                  className="text-olive hover:text-olive/80 mt-4 underline transition-colors"
                >
                  View Realismo Tattoos
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results Count */}
        {displayItems.length > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-muted-foreground mt-6 text-center text-sm"
          >
            Showing {displayItems.length} tattoo
            {displayItems.length !== 1 ? "s" : ""}
          </motion.p>
        )}

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerChild}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Want a custom realism, full color, or tribal tattoo design?
          </p>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hey, I'm visiting your website. I want more information about booking a tattoo")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-flex items-center gap-2 rounded-full px-8 py-3"
          >
            <WhatsAppIcon size={18} />
            Book Free Consultation
          </a>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && displayItems[lightboxIndex] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-background/98 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl"
              onClick={closeLightbox}
              role="dialog"
              aria-modal="true"
              aria-label={`Viewing ${displayItems[lightboxIndex].title}`}
            >
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                onClick={closeLightbox}
                className="bg-card/80 hover:bg-secondary focus:ring-olive/50 absolute top-4 right-4 z-10 rounded-full border border-white/10 p-3 transition-colors focus:ring-2 focus:outline-none"
                aria-label="Close lightbox"
              >
                <X size={24} className="text-foreground" />
              </motion.button>

              {/* Previous Button */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="bg-card/80 hover:bg-secondary focus:ring-olive/50 absolute left-4 z-10 rounded-full border border-white/10 p-3 transition-colors focus:ring-2 focus:outline-none"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} className="text-foreground" />
              </motion.button>

              {/* Next Button */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="bg-card/80 hover:bg-secondary focus:ring-olive/50 absolute right-4 z-10 rounded-full border border-white/10 p-3 transition-colors focus:ring-2 focus:outline-none"
                aria-label="Next image"
              >
                <ChevronRight size={24} className="text-foreground" />
              </motion.button>

              {/* Image Container */}
              <motion.figure
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -15 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative h-[80vh] w-full max-w-4xl px-4"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={displayItems[lightboxIndex].image}
                  alt={`${displayItems[lightboxIndex].title} - Full view`}
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-contain"
                  priority
                />

                {/* Caption */}
                <figcaption className="from-background/90 via-background/50 absolute right-0 bottom-0 left-0 bg-gradient-to-t to-transparent p-6 text-center sm:text-left">
                  <p className="font-heading text-olive text-xl">
                    {displayItems[lightboxIndex].title}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Category: {displayItems[lightboxIndex].category}
                  </p>
                </figcaption>
              </motion.figure>

              {/* Counter */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card/80 absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 px-4 py-2 backdrop-blur-sm"
                aria-live="polite"
              >
                <span className="text-muted-foreground text-sm">
                  {lightboxIndex + 1} <span className="text-olive">/</span>{" "}
                  {displayItems.length}
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// =============================================================================
// Main Export Component with Suspense Boundary
// =============================================================================

export function GallerySection() {
  return (
    <Suspense
      fallback={
        <section id="gallery" className="section-padding">
          <div className="container-wide px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Tattoo Portfolio Gallery"
              subtitle="Loading tattoo gallery..."
            />
            <div className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-3">
              {CATEGORY_OPTIONS.map((option) => (
                <div
                  key={option.value}
                  className="bg-secondary h-10 w-24 animate-pulse rounded-full sm:w-28"
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="from-secondary via-card to-secondary aspect-[4/5] animate-pulse rounded-xl bg-gradient-to-br"
                />
              ))}
            </div>
          </div>
        </section>
      }
    >
      <GallerySectionInner />
    </Suspense>
  );
}
