export const metadata = {
  title: "Privacy Policy",
  description: "Privacy information for Shri Physiotherapy & Rehab Clinic."
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="hero-grid border-b border-slate-100">
        <div className="container py-20">
          <div className="eyebrow">Privacy</div>
          <h1 className="mt-4 text-4xl font-black text-[#0b2942] sm:text-5xl">Privacy Policy</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">How information submitted through this website may be handled.</p>
        </div>
      </section>
      <section className="section">
        <div className="container max-w-3xl space-y-8 leading-7 text-slate-600">
          <div><h2 className="text-xl font-black text-[#0b2942]">Information you provide</h2><p className="mt-3">If you contact the clinic or submit an appointment request, you may provide information such as your name, phone number, preferred appointment time and a brief service or concern.</p></div>
          <div><h2 className="text-xl font-black text-[#0b2942]">Use of information</h2><p className="mt-3">Information may be used to respond to enquiries, contact you about an appointment and provide requested clinic services.</p></div>
          <div><h2 className="text-xl font-black text-[#0b2942]">Sensitive information</h2><p className="mt-3">Please do not submit medical records, diagnostic reports, passwords, payment credentials or other sensitive documents through the public website form unless the clinic specifically provides a secure channel for that purpose.</p></div>
          <div><h2 className="text-xl font-black text-[#0b2942]">Contact</h2><p className="mt-3">For privacy questions, contact shriphysio50826@gmail.com.</p></div>
          <p className="rounded-2xl bg-[#fff8e8] p-5 text-sm">This is a website draft and should be reviewed against the clinic's actual data-processing practices and applicable Indian privacy requirements before publication.</p>
        </div>
      </section>
    </main>
  );
}
