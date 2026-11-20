import { Mail, MapPin, Phone, Clock3, MessageCircle } from "lucide-react";
import { clinic } from "@/lib/site";
import AppointmentForm from "@/components/AppointmentForm";

export const metadata = {
  title: "Contact & Book Appointment",
  description: "Contact Shri Physiotherapy & Rehab Clinic in Magistrate Colony, Patna."
};

export default function ContactPage() {
  return (
    <main>
      <section className="hero-grid border-b border-slate-100">
        <div className="container py-20"><div className="eyebrow">Contact</div><h1 className="mt-4 text-4xl font-black text-[#0b2942] sm:text-5xl">Contact the clinic</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Call, WhatsApp or send an appointment request to Shri Physiotherapy & Rehab Clinic.</p></div>
      </section>
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div className="space-y-4">
            <div className="card p-6"><MapPin className="text-[#16a085]" size={22}/><h2 className="mt-3 font-black text-[#0b2942]">Address</h2><p className="mt-2 text-sm leading-6 text-slate-600">{clinic.address}</p></div>
            <div className="card p-6"><Clock3 className="text-[#16a085]" size={22}/><h2 className="mt-3 font-black text-[#0b2942]">Hours</h2><p className="mt-2 text-sm text-slate-600">{clinic.hours}</p></div>
            <div className="card p-6"><Phone className="text-[#16a085]" size={22}/><h2 className="mt-3 font-black text-[#0b2942]">Phone</h2><a className="mt-2 block text-sm font-bold text-[#1167a8]" href={`tel:+91${clinic.phone[0]}`}>{clinic.phone[0]}</a><a className="mt-1 block text-sm font-bold text-[#1167a8]" href={`tel:+91${clinic.phone[1]}`}>{clinic.phone[1]}</a></div>
            <div className="card p-6"><Mail className="text-[#16a085]" size={22}/><h2 className="mt-3 font-black text-[#0b2942]">Email</h2><a className="mt-2 block text-sm font-bold text-[#1167a8]" href={`mailto:${clinic.email}`}>{clinic.email}</a></div>
            <a className="btn btn-secondary w-full" href={`${clinic.whatsapp}?text=Hello%20Shri%20Physiotherapy%20%26%20Rehab%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment.`} target="_blank" rel="noreferrer"><MessageCircle size={18}/> WhatsApp the clinic</a>
          </div>
          <AppointmentForm/>
        </div>
      </section>
    </main>
  );
}
