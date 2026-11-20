import Link from "next/link";
import { ArrowRight, Activity, Bone, Brain, Dumbbell, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";
import { services } from "@/lib/site";

export const metadata = {
  title: "Physiotherapy Services in Patna",
  description: "Explore physiotherapy and rehabilitation services at Shri Physiotherapy & Rehab Clinic in Patna."
};

const icons = [Bone, Activity, Dumbbell, HeartPulse, Brain, ShieldCheck, Stethoscope, Activity];

export default function ServicesPage() {
  return (
    <main>
      <section className="hero-grid border-b border-slate-100">
        <div className="container py-20">
          <div className="eyebrow">Physiotherapy Services</div>
          <h1 className="mt-4 max-w-4xl text-4xl font-black text-[#0b2942] sm:text-5xl">Physiotherapy & Rehabilitation Services in Patna</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Explore the clinic's services for musculoskeletal pain, neurological rehabilitation, pediatric care and selected physiotherapy modalities.</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Link key={service.slug} href={`/services/${service.slug}`} className="card reveal-card p-7">
                <div className="grid size-12 place-items-center rounded-2xl bg-[#eef7fc] text-[#1167a8]"><Icon size={22}/></div>
                <h2 className="mt-5 text-xl font-black text-[#0b2942]">{service.name}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#1167a8]">Read more <ArrowRight size={15}/></span>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
