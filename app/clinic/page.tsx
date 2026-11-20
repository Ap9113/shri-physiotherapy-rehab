import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Clock3 } from "lucide-react";
import { clinic } from "@/lib/site";

export const metadata = {
  title: "Our Clinic in Magistrate Colony, Patna",
  description: "Visit Shri Physiotherapy & Rehab Clinic on Ashiana Digha Road, Magistrate Colony, Patna."
};

const photos = [
  ["/images/clinic-hero.jpg", "Shri Physiotherapy & Rehab Clinic exterior / main clinic photograph"],
  ["/images/clinic-interior.jpg", "Shri Physiotherapy & Rehab Clinic interior"],
];

export default function ClinicPage() {
  return (
    <main>
      <section className="hero-grid border-b border-slate-100">
        <div className="container py-20"><div className="eyebrow">The Clinic</div><h1 className="mt-4 text-4xl font-black text-[#0b2942] sm:text-5xl">A physiotherapy clinic in Magistrate Colony, Patna</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{clinic.address}</p></div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid gap-5 sm:grid-cols-2">
            {photos.map(([src, alt]) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-[26px] bg-[#eef7fc] shadow-soft">
                <Image src={src} alt={alt} fill className="object-cover"/>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="card p-7"><MapPin className="text-[#16a085]" size={22}/><h2 className="mt-4 text-xl font-black text-[#0b2942]">Location</h2><p className="mt-2 leading-7 text-slate-600">{clinic.address}</p><a className="btn btn-primary mt-5" href={clinic.mapsUrl} target="_blank" rel="noreferrer">Get Directions <ArrowRight size={17}/></a></div>
            <div className="card p-7"><Clock3 className="text-[#16a085]" size={22}/><h2 className="mt-4 text-xl font-black text-[#0b2942]">Opening hours</h2><p className="mt-2 leading-7 text-slate-600">{clinic.hours}</p><Link className="btn btn-secondary mt-5" href="/#appointment">Book Appointment <ArrowRight size={17}/></Link></div>
          </div>
          <p className="mt-7 rounded-2xl bg-[#fff8e8] p-5 text-sm leading-6 text-slate-600">
            The gallery will use the clinic photographs supplied by the clinic. If a particular image is not yet in the project, add it to <code>public/images/</code> using the filename shown in the code.
          </p>
        </div>
      </section>
    </main>
  );
}
