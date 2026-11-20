"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const whatsapp =
  "https://wa.me/919142961709?text=Hello%20Shri%20Physiotherapy%20%26%20Rehab%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment.";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="container flex min-h-18 items-center justify-between gap-4 py-3">
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
          <div className="grid size-11 place-items-center rounded-2xl bg-[#0b2942] text-sm font-black text-white">SP</div>
          <div>
            <div className="text-sm font-black leading-tight text-[#0b2942] sm:text-base">Shri Physiotherapy</div>
            <div className="text-xs font-semibold text-[#16a085]">& Rehab Clinic</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <Link href="/" className="text-sm font-semibold text-slate-700 hover:text-[#1167a8]">Home</Link>
          <Link href="/services" className="text-sm font-semibold text-slate-700 hover:text-[#1167a8]">Services</Link>
          <Link href="/#team" className="text-sm font-semibold text-slate-700 hover:text-[#1167a8]">Our Team</Link>
          <Link href="/#clinic" className="text-sm font-semibold text-slate-700 hover:text-[#1167a8]">Clinic</Link>
          <Link href="/#contact" className="text-sm font-semibold text-slate-700 hover:text-[#1167a8]">Contact</Link>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a className="btn btn-secondary" href="tel:+919142961709"><Phone size={17} /> Call</a>
          <a className="btn btn-primary" href={whatsapp} target="_blank" rel="noreferrer">
            <MessageCircle size={17} /> WhatsApp
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid size-11 place-items-center rounded-xl border border-slate-200 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <nav className="container grid gap-1 py-4">
            {[
              ["Home", "/"],
              ["Services", "/services"],
              ["Our Team", "/team"],
              ["Clinic", "/clinic"],
              ["Contact", "/contact"],
              ["Book Appointment", "/#appointment"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
