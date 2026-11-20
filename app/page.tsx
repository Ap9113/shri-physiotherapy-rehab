import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Activity, Bone, Brain, CheckCircle2, Clock3, Dumbbell,
  HeartPulse, MapPin, MessageCircle, Phone, ShieldCheck, Stethoscope,
  Star, Home as HomeIcon
} from "lucide-react";
import AppointmentForm from "@/components/AppointmentForm";
import { clinic, doctors, services } from "@/lib/site";

const serviceIcons = [Bone, Activity, Dumbbell, HeartPulse, Brain, ShieldCheck, Stethoscope, Activity];

export default function Home() {
  return (
    <main>
      <section className="hero-grid">
        <div className="container grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="eyebrow">Physiotherapy & Rehabilitation • Patna</div>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-[#0b2942] sm:text-5xl lg:text-6xl">
              Move Better.<br />Live Better.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Personalized physiotherapy and rehabilitation care for pain management,
              mobility, recovery and functional rehabilitation in Magistrate Colony, Patna.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="btn btn-primary" href="#appointment">Book an Appointment <ArrowRight size={18} /></a>
              <a className="btn btn-secondary" href={`${clinic.whatsapp}?text=Hello%20Shri%20Physiotherapy%20%26%20Rehab%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment.`} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="text-[#16a085]" size={18}/> Personalized care</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="text-[#16a085]" size={18}/> Open every day</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="text-[#16a085]" size={18}/> Clinic & home visits</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[36px] bg-[#16a085]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[30px] border border-white bg-white p-3 shadow-soft">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-[#eef7fc]">
                <Image src="/images/clinic-hero.jpg" alt="Shri Physiotherapy & Rehab Clinic in Patna" fill className="object-cover" priority />
              </div>
              <div className="grid grid-cols-3 gap-3 p-3">
                <div className="rounded-2xl bg-[#eef7fc] p-4"><div className="text-2xl font-black text-[#0b2942]">₹500</div><div className="mt-1 text-xs font-semibold text-slate-500">Clinic consultation</div></div>
                <div className="rounded-2xl bg-[#eaf8f4] p-4"><div className="text-2xl font-black text-[#0b2942]">₹800</div><div className="mt-1 text-xs font-semibold text-slate-500">Home visit</div></div>
                <div className="rounded-2xl bg-slate-50 p-4"><div className="text-2xl font-black text-[#0b2942]">9–10</div><div className="mt-1 text-xs font-semibold text-slate-500">Open daily</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white">
        <div className="container grid gap-4 py-7 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { Icon: Clock3, title: "Open every day", value: "9:00 AM – 10:00 PM" },
            { Icon: MapPin, title: "Patna location", value: "Magistrate Colony" },
            { Icon: HomeIcon, title: "Home visits", value: "Available at ₹800" },
            { Icon: Phone, title: "Call the clinic", value: "9142961709" },
          ].map(({ Icon, title, value }) => (
            <div key={title} className="flex items-center gap-3">
              <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#eaf8f4] text-[#16a085]"><Icon size={20}/></div>
              <div><div className="text-sm font-extrabold text-[#0b2942]">{title}</div><div className="text-xs text-slate-500">{value}</div></div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">Our Services</div>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0b2942] sm:text-4xl">Physiotherapy care for a wide range of conditions</h2>
            <p className="mt-4 leading-7 text-slate-600">Explore the clinic's main treatment and rehabilitation services. Each service page explains the approach in patient-friendly language.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 8).map((service, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];
              return (
                <article key={service.slug} className="card reveal-card p-6">
                  <div className="grid size-12 place-items-center rounded-2xl bg-[#eef7fc] text-[#1167a8]"><Icon size={23}/></div>
                  <h3 className="mt-5 text-lg font-extrabold text-[#0b2942]">{service.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                  <Link href={`/services/${service.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#1167a8]">Learn more <ArrowRight size={15}/></Link>
                </article>
              );
            })}
          </div>
          <div className="mt-8 text-center"><Link className="btn btn-secondary" href="/services">View all services <ArrowRight size={17}/></Link></div>
        </div>
      </section>

      <section className="section bg-[#f6fbfd]">
        <div className="container grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <div className="eyebrow">Why choose us</div>
            <h2 className="mt-3 text-3xl font-black text-[#0b2942] sm:text-4xl">Care designed around the person, not just the condition</h2>
            <p className="mt-5 leading-7 text-slate-600">The clinic combines assessment, physiotherapy, rehabilitation and patient education to support meaningful functional goals.</p>
            <div className="mt-7 space-y-4">
              {[
                "Personalized treatment planning",
                "Musculoskeletal and neurological rehabilitation",
                "Clinic consultation and home-visit options",
                "Modern physiotherapy modalities when appropriate",
              ].map((item) => <div key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-[#16a085]" size={20}/><span className="font-semibold text-slate-700">{item}</span></div>)}
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["Assessment first", "Treatment choices should follow a suitable clinical assessment."],
              ["Goal focused", "Rehabilitation can be structured around movement and everyday function."],
              ["Education", "Patients can receive practical guidance for safe activity and home exercises."],
              ["Continuity", "Progress can be reviewed and the plan adjusted as appropriate."],
            ].map(([title, body]) => <div key={title} className="card p-6"><div className="grid size-10 place-items-center rounded-xl bg-[#eaf8f4] text-[#16a085]"><CheckCircle2 size={19}/></div><h3 className="mt-4 font-extrabold text-[#0b2942]">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{body}</p></div>)}
          </div>
        </div>
      </section>

      <section id="team" className="section">
        <div className="container">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="section-heading"><div className="eyebrow">Our Team</div><h2 className="mt-3 text-3xl font-black text-[#0b2942] sm:text-4xl">Meet our physiotherapists</h2><p className="mt-4 leading-7 text-slate-600">Professional profiles and qualifications supplied by the clinic.</p></div>
            <Link href="/team" className="btn btn-secondary">Meet the team <ArrowRight size={17}/></Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {doctors.map((doctor) => (
              <article key={doctor.name} className="card overflow-hidden md:grid md:grid-cols-[220px_1fr]">
                <div className="relative min-h-72 bg-[#eef7fc]"><Image src={doctor.image} alt={doctor.name} fill className="object-cover"/></div>
                <div className="p-7"><div className="eyebrow">Physiotherapist</div><h3 className="mt-2 text-2xl font-black text-[#0b2942]">{doctor.name}</h3><p className="mt-3 font-semibold text-[#1167a8]">{doctor.qualifications}</p><p className="mt-3 text-sm leading-6 text-slate-600">{doctor.experience}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="clinic" className="section bg-[#f6fbfd]">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-[#eef7fc] shadow-soft">
              <Image src="/images/clinic-interior.jpg" alt="Inside Shri Physiotherapy & Rehab Clinic in Patna" fill className="object-cover"/>
            </div>
            <div>
              <div className="eyebrow">The Clinic</div>
              <h2 className="mt-3 text-3xl font-black text-[#0b2942] sm:text-4xl">See the clinic before you visit</h2>
              <p className="mt-5 leading-7 text-slate-600">We will use your real clinic photographs throughout the website so patients can recognize the clinic and treatment environment before their first visit.</p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {["Reception & waiting area", "Treatment environment", "Physiotherapy equipment", "Rehabilitation space"].map((item) => <div key={item} className="card p-5"><div className="font-extrabold text-[#0b2942]">{item}</div><div className="mt-1 text-xs text-slate-500">Real clinic photography</div></div>)}
              </div>
              <Link href="/clinic" className="btn btn-primary mt-7">View clinic gallery <ArrowRight size={17}/></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center"><div className="eyebrow">Patient Reviews</div><h2 className="mt-3 text-3xl font-black text-[#0b2942] sm:text-4xl">Your experience matters</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">We will publish genuine patient reviews here after they are supplied or collected with appropriate permission.</p></div>
          <div className="mx-auto mt-9 max-w-3xl rounded-[26px] border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
            <div className="mx-auto grid size-12 place-items-center rounded-2xl bg-white text-[#16a085] shadow-sm"><Star size={22}/></div>
            <p className="mt-4 font-bold text-[#0b2942]">Genuine reviews will be added here.</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">We won't create or publish fictional testimonials.</p>
          </div>
        </div>
      </section>

      <section id="appointment" className="section bg-[#0b2942] text-white">
        <div className="container grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <div className="text-sm font-extrabold uppercase tracking-[.12em] text-[#5ee0bf]">Book an appointment</div>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">Ready to take the next step?</h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-300">Send an appointment request and the clinic can contact you to confirm the date and time.</p>
            <div className="mt-7 space-y-3 text-sm text-slate-200"><div>Clinic consultation: <strong>₹500</strong></div><div>Home visit: <strong>₹800</strong></div><div>Open every day: <strong>9:00 AM – 10:00 PM</strong></div></div>
          </div>
          <AppointmentForm/>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <div className="rounded-[30px] bg-[#eef7fc] p-7 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div><div className="eyebrow">Contact</div><h2 className="mt-3 text-3xl font-black text-[#0b2942]">Visit Shri Physiotherapy & Rehab Clinic</h2><p className="mt-3 max-w-xl leading-7 text-slate-600">{clinic.address}</p><p className="mt-2 text-sm font-semibold text-slate-600">{clinic.hours}</p></div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <a className="btn btn-primary" href={`tel:+91${clinic.phone[0]}`}><Phone size={18}/> Call Clinic</a>
              <a className="btn btn-secondary" href={clinic.mapsUrl} target="_blank" rel="noreferrer"><MapPin size={18}/> Get Directions</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
