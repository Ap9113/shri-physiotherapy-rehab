import type { MetadataRoute } from "next";
import { servicePages } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com";
  const pages = ["/", "/about", "/services", "/team", "/clinic", "/reviews", "/faq", "/contact", "/privacy", "/terms"];
  return [
    ...pages.map((path) => ({ url: `${base}${path}`, lastModified: new Date() })),
    ...servicePages.map((service) => ({
      url: `${base}/services/${service.slug}`,
      lastModified: new Date()
    }))
  ];
}
