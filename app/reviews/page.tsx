import { Star } from "lucide-react";

export const metadata = {
  title: "Patient Reviews",
  description: "Patient reviews for Shri Physiotherapy & Rehab Clinic in Patna."
};

export default function ReviewsPage() {
  return (
    <main>
      <section className="hero-grid border-b border-slate-100">
        <div className="container py-20"><div className="eyebrow">Patient Reviews</div><h1 className="mt-4 text-4xl font-black text-[#0b2942] sm:text-5xl">What patients say</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Genuine patient feedback will be displayed here once supplied or collected with appropriate permission.</p></div>
      </section>
      <section className="section">
        <div className="container max-w-3xl rounded-[28px] border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
          <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-white text-[#16a085] shadow-sm"><Star size={24}/></div>
          <h2 className="mt-5 text-2xl font-black text-[#0b2942]">Reviews coming soon</h2>
          <p className="mt-3 leading-7 text-slate-600">We will only publish authentic reviews and will not invent patient experiences or treatment outcomes.</p>
        </div>
      </section>
    </main>
  );
}
