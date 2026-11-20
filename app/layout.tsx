import type { Metadata } from "next";
import "./globals.css";
import { Phone, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import MobileCTA from "@/components/MobileCTA";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Shri Physiotherapy & Rehab Clinic | Physiotherapy in Patna",
    template: "%s | Shri Physiotherapy & Rehab Clinic"
  },
  description:
    "Shri Physiotherapy & Rehab Clinic in Magistrate Colony, Patna provides personalized physiotherapy and rehabilitation care for pain, mobility and recovery.",
  keywords: [
    "physiotherapy clinic in Patna",
    "physiotherapist in Patna",
    "physiotherapy Magistrate Colony",
    "physiotherapy Ashiana Digha Road",
    "back pain physiotherapy Patna",
    "stroke rehabilitation Patna"
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Shri Physiotherapy & Rehab Clinic | Patna",
    description: "Personalized physiotherapy and rehabilitation care in Patna.",
    type: "website",
    locale: "en_IN"
  },
  robots: { index: true, follow: true }
};

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Shri Physiotherapy & Rehab Clinic",
  description:
    "Physiotherapy and rehabilitation clinic in Magistrate Colony, Patna.",
  telephone: ["+91-9142961709", "+91-8084913550"],
  email: "shriphysio50826@gmail.com",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ashiana Digha Road, Magistrate Colony",
    addressLocality: "Patna",
    addressRegion: "Bihar",
    postalCode: "800025",
    addressCountry: "IN"
  },
  openingHours: "Mo-Su 09:00-22:00"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}

        <footer className="border-t border-slate-200 bg-[#0b2942] text-white">
          <div className="container py-12">
            <div className="grid gap-10 md:grid-cols-3">
              <div>
                <div className="text-xl font-black">Shri Physiotherapy & Rehab Clinic</div>
                <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">
                  Personalized physiotherapy and rehabilitation care in Magistrate Colony, Patna.
                </p>
              </div>
              <div>
                <div className="font-bold">Contact</div>
                <a className="mt-3 block text-sm text-slate-300 hover:text-white" href="tel:+919142961709">9142961709</a>
                <a className="mt-2 block text-sm text-slate-300 hover:text-white" href="tel:+918084913550">8084913550</a>
                <a className="mt-2 block text-sm text-slate-300 hover:text-white" href="mailto:shriphysio50826@gmail.com">shriphysio50826@gmail.com</a>
              </div>
              <div>
                <div className="font-bold">Clinic Hours</div>
                <p className="mt-3 text-sm text-slate-300">Open every day</p>
                <p className="text-sm text-slate-300">9:00 AM – 10:00 PM</p>
                <p className="mt-3 text-sm text-slate-300">Clinic consultation: ₹500</p>
                <p className="text-sm text-slate-300">Home visit: ₹800</p>
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
              <div>© {new Date().getFullYear()} Shri Physiotherapy & Rehab Clinic. All rights reserved.</div>
              <div className="flex gap-4">
                <a href="/privacy" className="hover:text-white">Privacy</a>
                <a href="/terms" className="hover:text-white">Terms & Disclaimer</a>
              </div>
            </div>
          </div>
        </footer>

        <MobileCTA />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
        />
      </body>
    </html>
  );
}
