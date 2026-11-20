export const metadata = {
  title: "Terms & Website Disclaimer",
  description: "Website terms and medical information disclaimer for Shri Physiotherapy & Rehab Clinic."
};

export default function TermsPage() {
  return (
    <main>
      <section className="hero-grid border-b border-slate-100">
        <div className="container py-20">
          <div className="eyebrow">Website Terms</div>
          <h1 className="mt-4 text-4xl font-black text-[#0b2942] sm:text-5xl">Terms & Website Disclaimer</h1>
        </div>
      </section>
      <section className="section">
        <div className="container max-w-3xl space-y-8 leading-7 text-slate-600">
          <div><h2 className="text-xl font-black text-[#0b2942]">General information</h2><p className="mt-3">Information on this website is provided for general educational and clinic-information purposes. It is not a substitute for an individual assessment or medical advice.</p></div>
          <div><h2 className="text-xl font-black text-[#0b2942]">Appointments</h2><p className="mt-3">Submitting an appointment request does not by itself guarantee a particular time. The clinic should confirm the appointment.</p></div>
          <div><h2 className="text-xl font-black text-[#0b2942]">Emergency situations</h2><p className="mt-3">Do not use this website or WhatsApp as an emergency service. Seek appropriate emergency medical care when required.</p></div>
          <p className="rounded-2xl bg-[#fff8e8] p-5 text-sm">This draft should be reviewed and finalized for the clinic's actual services and applicable legal requirements before publication.</p>
        </div>
      </section>
    </main>
  );
}
