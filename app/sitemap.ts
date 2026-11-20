import type { MetadataRoute } from "next";
import { servicePages } from "@/lib/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ap9113.github.io/shri-physiotherapy-rehab";
  const pages = ["/", "/about", "/services", "/team", "/clinic", "/reviews", "/faq", "/contact", "/privacy", "/terms"];
  return [
    ...pages.map((path) => ({ url: `${base}${path}`, lastModified: new Date() })),
    ...servicePages.map((service) => ({
      url: `${base}/services/${service.slug}`,
      lastModified: new Date()
    }))
  ];
}
