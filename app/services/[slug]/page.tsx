import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { servicePages } from "@/lib/services";

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicePages.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` }
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicePages.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <main>
      <section className="hero-grid border-b border-slate-100">
        <div className="container py-20">
          <div className="eyebrow">Physiotherapy Service • Patna</div>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-[#0b2942] sm:text-5xl">{service.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{service.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="btn btn-primary" href="/#appointment">Book an Appointment <ArrowRight size={18}/></Link>
            <a className="btn btn-secondary" href="tel:+919142961709"><Phone size={18}/> Call Clinic</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <div className="eyebrow">What to expect</div>
            <h2 className="mt-3 text-3xl font-black text-[#0b2942]">A personalized rehabilitation approach</h2>
            <p className="mt-5 leading-7 text-slate-600">
              Treatment depends on the person's symptoms, clinical findings, medical history and functional goals.
              The physiotherapist can assess the problem and recommend an appropriate rehabilitation plan.
            </p>
            <ul className="mt-7 space-y-4">
              {service.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#16a085]" size={20}/>
                  <span className="leading-7 text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-2xl bg-[#fff8e8] p-5 text-sm leading-6 text-slate-700">
              This page provides general information and does not replace an individual assessment by a qualified healthcare professional.
            </p>
          </div>

          <aside className="card h-fit p-7">
            <div className="eyebrow">Clinic Information</div>
            <h3 className="mt-3 text-2xl font-black text-[#0b2942]">Shri Physiotherapy & Rehab Clinic</h3>
            <p className="mt-4 text-sm leading-6 text-slate-600">Magistrate Colony, Ashiana Digha Road, Patna, Bihar 800025</p>
            <div className="mt-5 border-t border-slate-100 pt-5 text-sm">
              <div className="font-bold text-[#0b2942]">Clinic consultation</div>
              <div className="mt-1 text-slate-600">₹500</div>
              <div className="mt-4 font-bold text-[#0b2942]">Home visit</div>
              <div className="mt-1 text-slate-600">₹800</div>
              <div className="mt-4 font-bold text-[#0b2942]">Hours</div>
              <div className="mt-1 text-slate-600">Every day, 9:00 AM – 10:00 PM</div>
            </div>
            <Link href="/#appointment" className="btn btn-primary mt-6 w-full">Request Appointment</Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
