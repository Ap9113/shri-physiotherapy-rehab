import Image from "next/image";
import { doctors } from "@/lib/site";

export const metadata = {
  title: "Our Physiotherapists in Patna",
  description: "Meet the physiotherapy team at Shri Physiotherapy & Rehab Clinic in Patna."
};

export default function TeamPage() {
  return (
    <main>
      <section className="hero-grid border-b border-slate-100">
        <div className="container py-20"><div className="eyebrow">Our Team</div><h1 className="mt-4 text-4xl font-black text-[#0b2942] sm:text-5xl">Meet the physiotherapists</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Professional profiles and qualifications supplied by Shri Physiotherapy & Rehab Clinic.</p></div>
      </section>
      <section className="section">
        <div className="container space-y-8">
          {doctors.map((doctor) => (
            <article key={doctor.name} className="card overflow-hidden md:grid md:grid-cols-[300px_1fr]">
              <div className="relative min-h-80 bg-[#eef7fc]"><Image src={doctor.image} alt={doctor.name} fill className="object-cover"/></div>
              <div className="p-8 sm:p-10"><div className="eyebrow">Physiotherapist</div><h2 className="mt-3 text-3xl font-black text-[#0b2942]">{doctor.name}</h2><p className="mt-5 text-lg font-bold text-[#1167a8]">{doctor.qualifications}</p><p className="mt-4 leading-7 text-slate-600">{doctor.experience}</p></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
