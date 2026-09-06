import Link from "next/link";
import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen items-center justify-center px-4 pt-20 md:pt-0">
        <div className="mx-auto max-w-2xl text-center">
          {/* Large 404 with gradient */}
          <h1 className="font-heading mb-6 text-[120px] leading-none font-bold sm:text-[160px] md:text-[200px]">
            <span className="bg-gradient-to-r from-[#F3EDE2] via-[#C9A45C] to-[#7A1E2C] bg-clip-text text-transparent">
              404
            </span>
          </h1>

          {/* Message */}
          <h2 className="text-foreground mb-4 text-2xl font-semibold sm:text-3xl">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8 text-base sm:text-lg">
            Looks like this page wandered off. Don&apos;t worry - great art
            takes time to find. Let us help you get back on track.
          </p>

          {/* Navigation Links */}
          <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="btn-cta inline-flex items-center gap-2 rounded-full px-8 py-4"
            >
              Back to Home
            </Link>
            <Link
              href="/#gallery"
              className="btn-outline-gold inline-flex items-center gap-2 rounded-full px-8 py-4"
            >
              View Gallery
            </Link>
          </div>

          {/* Quick Links */}
          <div className="border-border/50 border-t pt-8">
            <p className="text-muted-foreground mb-4 text-sm">Quick links:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/services"
                className="text-olive text-sm transition-colors hover:underline"
              >
                Services
              </Link>
              <span className="text-muted-foreground">|</span>
              <Link
                href="/realism-tattoo-costa-rica"
                className="text-olive text-sm transition-colors hover:underline"
              >
                Realism Tattoos
              </Link>
              <span className="text-muted-foreground">|</span>
              <Link
                href="/rene-ruiz"
                className="text-olive text-sm transition-colors hover:underline"
              >
                About the Artist
              </Link>
              <span className="text-muted-foreground">|</span>
              <Link
                href="/#contact"
                className="text-olive text-sm transition-colors hover:underline"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-8">
            <p className="text-muted-foreground mb-3 text-sm">
              Need help finding something?
            </p>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hey, I was looking for something on your website and couldn't find it. Can you help?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-olive inline-flex items-center gap-2 text-sm transition-colors hover:underline"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
