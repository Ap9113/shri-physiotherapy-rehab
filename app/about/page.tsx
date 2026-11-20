export const metadata = {
  title: "About Shri Physiotherapy & Rehab Clinic",
  description: "Learn about Shri Physiotherapy & Rehab Clinic and its physiotherapy team in Patna."
};

export default function AboutPage() {
  return (
    <main>
      <section className="hero-grid border-b border-slate-100">
        <div className="container py-20">
          <div className="eyebrow">About the Clinic</div>
          <h1 className="mt-4 max-w-3xl text-4xl font-black text-[#0b2942] sm:text-5xl">Personalized physiotherapy and rehabilitation care in Patna</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Shri Physiotherapy & Rehab Clinic provides physiotherapy and rehabilitation services from its clinic in Magistrate Colony, Patna.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-10 md:grid-cols-3">
          <div className="card p-7"><h2 className="text-xl font-black text-[#0b2942]">Personalized care</h2><p className="mt-3 text-sm leading-6 text-slate-600">Treatment plans are shaped around the person's condition, movement and functional goals.</p></div>
          <div className="card p-7"><h2 className="text-xl font-black text-[#0b2942]">Rehabilitation focused</h2><p className="mt-3 text-sm leading-6 text-slate-600">The clinic supports pain management, mobility, neurological rehabilitation and functional recovery.</p></div>
          <div className="card p-7"><h2 className="text-xl font-black text-[#0b2942]">Convenient access</h2><p className="mt-3 text-sm leading-6 text-slate-600">Open every day from 9:00 AM to 10:00 PM, with clinic consultation and home-visit options.</p></div>
        </div>
      </section>
    </main>
  );
}
