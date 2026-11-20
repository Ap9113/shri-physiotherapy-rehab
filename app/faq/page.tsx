const faqs = [
  ["What are the clinic timings?", "The clinic is open every day from 9:00 AM to 10:00 PM."],
  ["How much is a clinic consultation?", "The listed clinic consultation fee is ₹500."],
  ["Do you offer home physiotherapy visits?", "Yes. The listed home-visit fee is ₹800. Please contact the clinic to confirm availability for your location and preferred time."],
  ["How do I book an appointment?", "You can use the appointment form on the website or contact the clinic by phone or WhatsApp."],
  ["Where is the clinic located?", "Shri Physiotherapy & Rehab Clinic is located at Ashiana Digha Road, Magistrate Colony, Patna, Bihar 800025."],
  ["Do you treat neurological conditions?", "The clinic provides rehabilitation services for conditions including stroke and paralysis. An individual assessment is recommended to determine an appropriate plan."],
];

export const metadata = {
  title: "FAQs | Shri Physiotherapy & Rehab Clinic",
  description: "Frequently asked questions about appointments, fees, timings and physiotherapy services at Shri Physiotherapy & Rehab Clinic, Patna."
};

export default function FAQPage() {
  return (
    <main>
      <section className="hero-grid border-b border-slate-100">
        <div className="container py-20">
          <div className="eyebrow">FAQs</div>
          <h1 className="mt-4 text-4xl font-black text-[#0b2942] sm:text-5xl">Frequently asked questions</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Quick answers about appointments, clinic hours, fees and services.</p>
        </div>
      </section>
      <section className="section">
        <div className="container max-w-4xl space-y-4">
          {faqs.map(([q, a]) => (
            <details key={q} className="card p-6">
              <summary className="cursor-pointer list-none font-extrabold text-[#0b2942]">{q}</summary>
              <p className="mt-4 leading-7 text-slate-600">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
