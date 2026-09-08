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
// Type Definitions
// =============================================================================

/** Available filter types for the gallery */
export type FilterType =
  "realism" | "black-and-grey" | "color-realism" | "micro-realism" | "other";

/** Structure for a tattoo gallery item */
export interface TattooItem {
  id: string;
  title: string;
  category: string;
  image: string;
  style?: FilterType;
}

/** Filter button configuration */
interface FilterButton {
  label: string;
  value: FilterType;
  description?: string;
}

// =============================================================================
// Constants
// =============================================================================

/** Default filter when no URL param is present */
const DEFAULT_FILTER: FilterType = "realism";

/** URL search parameter key */
const STYLE_PARAM = "style";

/** Filter button configurations - realism-focused with sub-categories */
const FILTER_BUTTONS: FilterButton[] = [
  {
    label: "Realism (All)",
    value: "realism",
    description: "All realism tattoo styles",
  },
  {
    label: "Black & Grey",
    value: "black-and-grey",
    description: "Monochromatic realism",
  },
  {
    label: "Color Realism",
    value: "color-realism",
    description: "Vibrant photorealistic color work",
  },
  {
    label: "Micro-Realism",
    value: "micro-realism",
    description: "Fine detail small-scale realism",
  },
  {
    label: "Archive / Other",
    value: "other",
    description: "Other styles and archived work",
  },
];

/** Valid filter values for type checking */
const VALID_FILTERS = new Set<FilterType>(
  FILTER_BUTTONS.map((btn) => btn.value)
);

// =============================================================================
// Utility Functions
// =============================================================================

/**
 * Maps legacy category names to new FilterType values
 */
function mapCategoryToFilter(category: string): FilterType {
  const normalized = category.toLowerCase().trim();

  // Map existing categories to new filter types
  const categoryMap: Record<string, FilterType> = {
    realismo: "realism",
    realism: "realism",
    "gray and black": "black-and-grey",
    "black and grey": "black-and-grey",
    "black & grey": "black-and-grey",
    grayandblack: "black-and-grey",
    "full color": "color-realism",
    fullcolor: "color-realism",
    color: "color-realism",
    retratos: "micro-realism",
    portraits: "micro-realism",
    micro: "micro-realism",
    "micro-realism": "micro-realism",
    // Everything else maps to "other"
    line: "other",
    tribal: "other",
    japonés: "other",
    japones: "other",
    japanese: "other",
    otros: "other",
    other: "other",
  };

  return categoryMap[normalized] || "other";
}

/**
 * Validates if a string is a valid FilterType
 */
function isValidFilter(value: string | null): value is FilterType {
  return value !== null && VALID_FILTERS.has(value as FilterType);
}

/**
 * Filters gallery items based on selected filter
 */
function filterGalleryItems(
  items: typeof galleryImages,
  filter: FilterType
): TattooItem[] {
  // Map items to include computed style
  const mappedItems: TattooItem[] = items.map((item) => ({
    ...item,
    style: (item as TattooItem).style || mapCategoryToFilter(item.category),
  }));

  if (filter === "realism") {
    // "Realism (All)" shows all realism-related styles
    return mappedItems.filter((item) =>
      ["realism", "black-and-grey", "color-realism", "micro-realism"].includes(
        item.style!
      )
    );
  }

  return mappedItems.filter((item) => item.style === filter);
}

// =============================================================================
// Inner Component (with useSearchParams)
// =============================================================================

function GallerySectionInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Get filter from URL or default
  const urlStyle = searchParams.get(STYLE_PARAM);
  const currentFilter: FilterType = isValidFilter(urlStyle)
    ? urlStyle
    : DEFAULT_FILTER;

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  // Selected filter derived from URL
  const selectedFilter = currentFilter;

  // Handle filter button click - updates URL which triggers re-render with new filter
  const handleFilterChange = useCallback(
    (filter: FilterType) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(STYLE_PARAM, filter);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, pathname, router]
  );

  // Filter items based on current selection
  const filteredItems = filterGalleryItems(galleryImages, selectedFilter);

  // Listen for category change events from style cards (legacy support)
  useEffect(() => {
    const handleSetCategory = (event: CustomEvent<string>) => {
      const mappedFilter = mapCategoryToFilter(event.detail);
      handleFilterChange(mappedFilter);
    };

    window.addEventListener(
      "setGalleryCategory",
      handleSetCategory as EventListener
    );
    return () => {
      window.removeEventListener(
        "setGalleryCategory",
        handleSetCategory as EventListener
      );
    };
  }, [handleFilterChange]);

  // Handle body scroll lock when lightbox is open
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

  // Lightbox handlers
  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goToPrevious = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1
      );
    }
  };

  const goToNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1
      );
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;

      switch (e.key) {
        case "ArrowLeft":
          if (lightboxIndex !== null) {
            setLightboxIndex(
              lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1
            );
          }
          break;
        case "ArrowRight":
          if (lightboxIndex !== null) {
            setLightboxIndex(
              lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1
            );
          }
          break;
        case "Escape":
          setLightboxIndex(null);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const handleImageLoad = (id: string) => {
    setLoadedImages((prev) => new Set(prev).add(id));
  };

  return (
    <section
      id="gallery"
      className="section-padding"
      aria-label="Tattoo Gallery"
    >
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Realism Tattoo Gallery"
          subtitle="Explore my collection of photorealistic tattoo artistry. Each piece showcases meticulous attention to detail."
        />

        {/* Filter Buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerContainer}
          className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-3"
          role="tablist"
          aria-label="Filter tattoo styles"
        >
          {FILTER_BUTTONS.map((button) => {
            const isSelected = selectedFilter === button.value;
            const isOther = button.value === "other";

            return (
              <motion.button
                key={button.value}
                variants={staggerChild}
                onClick={() => handleFilterChange(button.value)}
                role="tab"
                aria-selected={isSelected}
                aria-controls="gallery-grid"
                tabIndex={isSelected ? 0 : -1}
                title={button.description}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 sm:px-6",
                  "focus:ring-olive/50 focus:ring-offset-background focus:ring-2 focus:ring-offset-2 focus:outline-none",
                  isSelected
                    ? "btn-gold"
                    : cn(
                        "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80",
                        isOther && "opacity-70 hover:opacity-100"
                      )
                )}
              >
                {button.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          id="gallery-grid"
          layout
          role="tabpanel"
          aria-label={`Showing ${filteredItems.length} ${selectedFilter} tattoos`}
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
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
                    alt={`${item.title} - ${item.category} style realism tattoo by ${siteConfig.artistName}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className={cn(
                      "object-cover transition-all duration-500",
                      "group-hover:scale-110",
                      loadedImages.has(item.id) ? "opacity-100" : "opacity-0"
                    )}
                    onLoad={() => handleImageLoad(item.id)}
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
                      "absolute inset-0 flex flex-col items-center justify-center",
                      "opacity-0 transition-all duration-300 group-hover:opacity-100",
                      "scale-90 transform group-hover:scale-100"
                    )}
                    aria-hidden="true"
                  >
                    <div className="bg-olive/20 mb-3 rounded-full p-3 backdrop-blur-sm">
                      <ZoomIn size={24} className="text-olive" />
                    </div>
                    <p className="text-olive text-sm font-medium">
                      {item.category}
                    </p>
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
                  onClick={() => handleFilterChange("realism")}
                  className="text-olive hover:text-olive/80 mt-4 underline transition-colors"
                >
                  View all realism tattoos
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results Count */}
        {filteredItems.length > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-muted-foreground mt-6 text-center text-sm"
          >
            Showing {filteredItems.length} tattoo
            {filteredItems.length !== 1 ? "s" : ""}
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
            Ready for your own custom realism tattoo?
          </p>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hey, I come from the website. I want more information about a realism tattoo")}`}
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
          {lightboxIndex !== null && filteredItems[lightboxIndex] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-background/98 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl"
              onClick={closeLightbox}
              role="dialog"
              aria-modal="true"
              aria-label={`Viewing ${filteredItems[lightboxIndex].title}`}
            >
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
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
                transition={{ delay: 0.2 }}
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
                transition={{ delay: 0.2 }}
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
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative h-[80vh] w-full max-w-4xl px-4"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={filteredItems[lightboxIndex].image}
                  alt={`${filteredItems[lightboxIndex].title} - Full view`}
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-contain"
                  priority
                />

                {/* Caption */}
                <figcaption className="from-background/80 absolute right-0 bottom-0 left-0 bg-gradient-to-t to-transparent p-6">
                  <p className="text-olive font-heading text-xl">
                    {filteredItems[lightboxIndex].title}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {filteredItems[lightboxIndex].category}
                  </p>
                </figcaption>
              </motion.figure>

              {/* Counter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card/80 absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 px-4 py-2 backdrop-blur-sm"
                aria-live="polite"
              >
                <span className="text-muted-foreground text-sm">
                  {lightboxIndex + 1} <span className="text-olive">/</span>{" "}
                  {filteredItems.length}
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
// Main Export with Suspense Boundary
// =============================================================================

/**
 * Gallery Section Component
 *
 * Displays a filterable gallery of realism tattoos with URL synchronization.
 * Defaults to showing all realism styles on initial load.
 *
 * @example
 * ```tsx
 * <GallerySection />
 * ```
 *
 * URL Parameters:
 * - `?style=realism` - All realism tattoos (default)
 * - `?style=black-and-grey` - Black & grey realism
 * - `?style=color-realism` - Color realism tattoos
 * - `?style=micro-realism` - Micro/fine detail realism
 * - `?style=other` - Archive and other styles
 */
export function GallerySection() {
  return (
    <Suspense
      fallback={
        <section id="gallery" className="section-padding">
          <div className="container-wide px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Realism Tattoo Gallery"
              subtitle="Explore my collection of photorealistic tattoo artistry."
            />
            <div className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-3">
              {FILTER_BUTTONS.map((button) => (
                <div
                  key={button.value}
                  className="bg-secondary h-10 w-24 animate-pulse rounded-full sm:w-32"
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
