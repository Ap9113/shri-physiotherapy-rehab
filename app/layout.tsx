import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Phone, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import MobileCTA from "@/components/MobileCTA";

export const metadata: Metadata = {
  metadataBase: new URL("https://ap9113.github.io/shri-physiotherapy-rehab"),
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
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%230b2942'/%3E%3Cpath d='M32 12c-6 0-10 4-10 10v6h-6c-6 0-10 4-10 10s4 10 10 10h6v-10h20v10h6c6 0 10-4 10-10s-4-10-10-10h-6v-6c0-6-4-10-10-10z' fill='%2316a085'/%3E%3C/svg%3E"
  },
  robots: { index: true, follow: true }
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
                <Link href="/privacy" className="hover:text-white">Privacy</Link>
                <Link href="/terms" className="hover:text-white">Terms & Disclaimer</Link>
              </div>
            </div>
          </div>
        </footer>

        <MobileCTA />
      </body>
    </html>
  );
}
