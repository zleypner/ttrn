"use client";

import { MessageCircle, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

// Custom SVG icons for brand logos (not available in lucide-react)
function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  showLabels?: boolean;
  variant?: "default" | "footer";
}

const socialLinks = [
  {
    name: "Instagram",
    href: `https://instagram.com/${siteConfig.contact.instagram}`,
    icon: InstagramIcon,
    label: "@" + siteConfig.contact.instagram,
  },
  {
    name: "Facebook",
    href: `https://facebook.com/${siteConfig.contact.facebook}`,
    icon: FacebookIcon,
    label: siteConfig.contact.facebook,
  },
  {
    name: "WhatsApp",
    href: `https://wa.me/${siteConfig.contact.whatsapp}`,
    icon: MessageCircle,
    label: siteConfig.contact.phone,
  },
  {
    name: "Email",
    href: `mailto:${siteConfig.contact.email}`,
    icon: Mail,
    label: siteConfig.contact.email,
  },
];

export function SocialLinks({
  className,
  iconSize = 20,
  showLabels = false,
  variant = "default",
}: SocialLinksProps) {
  return (
    <div
      className={cn(
        "flex items-center",
        showLabels ? "flex-col gap-4 sm:flex-row sm:gap-6" : "gap-4",
        className
      )}
    >
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group flex items-center gap-2 transition-all duration-300",
            variant === "default" && "text-muted-foreground hover:text-olive",
            variant === "footer" &&
              "text-muted-foreground hover:text-foreground"
          )}
          aria-label={social.name}
        >
          <span className="transition-transform duration-300 group-hover:scale-110">
            <social.icon size={iconSize} />
          </span>
          {showLabels && <span className="text-sm">{social.label}</span>}
        </a>
      ))}
    </div>
  );
}
