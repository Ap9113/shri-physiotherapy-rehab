import { CalendarDays, MessageCircle, Phone } from "lucide-react";

export default function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-slate-200 bg-white shadow-[0_-10px_30px_rgba(0,0,0,.08)] md:hidden">
      <a href="tel:+919142961709" className="flex min-h-14 flex-col items-center justify-center gap-1 text-xs font-bold text-[#0b2942]">
        <Phone size={18} /> Call
      </a>
      <a
        href="https://wa.me/919142961709?text=Hello%20Shri%20Physiotherapy%20%26%20Rehab%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment."
        target="_blank"
        rel="noreferrer"
        className="flex min-h-14 flex-col items-center justify-center gap-1 text-xs font-bold text-[#16a085]"
      >
        <MessageCircle size={18} /> WhatsApp
      </a>
      <a href="#appointment" className="flex min-h-14 flex-col items-center justify-center gap-1 text-xs font-bold text-[#1167a8]">
        <CalendarDays size={18} /> Book
      </a>
    </div>
  );
}
