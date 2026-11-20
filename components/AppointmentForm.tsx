"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function AppointmentForm() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const date = String(data.get("date") || "Not specified");
    const time = String(data.get("time") || "Not specified");
    const concern = String(data.get("concern") || "Not specified");

    const message = [
      "Hello Shri Physiotherapy & Rehab Clinic, I would like to book an appointment.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Preferred date: ${date}`,
      `Preferred time: ${time}`,
      `Concern/service: ${concern}`,
    ].join("\n");

    window.open(`https://wa.me/919142961709?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <div>
      <form onSubmit={submit} className="rounded-[26px] bg-white p-6 text-[#14202b] shadow-soft sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="text-sm font-bold">Name
            <input required name="name" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#1167a8]" placeholder="Your name" />
          </label>
          <label className="text-sm font-bold">Phone
            <input required name="phone" type="tel" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#1167a8]" placeholder="Phone number" />
          </label>
          <label className="text-sm font-bold">Preferred date
            <input name="date" type="date" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#1167a8]" />
          </label>
          <label className="text-sm font-bold">Preferred time
            <input name="time" type="time" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#1167a8]" />
          </label>
          <label className="text-sm font-bold sm:col-span-2">Service / concern
            <input name="concern" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#1167a8]" placeholder="e.g. back pain, stroke rehabilitation" />
          </label>
        </div>
        <button type="submit" className="btn btn-primary mt-6 w-full">
          Send Appointment Request <ArrowRight size={18} />
        </button>
        {sent && (
          <p className="mt-3 rounded-xl bg-[#eaf8f4] px-4 py-3 text-center text-sm font-semibold text-[#0b2942]">
            WhatsApp has been opened with your appointment details. Please send the message to complete the request.
          </p>
        )}
        <p className="mt-3 text-center text-xs text-slate-500">
          Appointment time is confirmed by the clinic. Please avoid entering sensitive medical records in this form.
        </p>
      </form>
    </div>
  );
}
