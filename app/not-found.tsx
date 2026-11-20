import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[65vh] grid place-items-center">
      <div className="container py-20 text-center">
        <div className="eyebrow">404</div>
        <h1 className="mt-3 text-4xl font-black text-[#0b2942]">Page not found</h1>
        <p className="mx-auto mt-4 max-w-lg leading-7 text-slate-600">The page you're looking for may have moved or no longer exists.</p>
        <Link className="btn btn-primary mt-7" href="/">Back to home <ArrowRightFallback /></Link>
      </div>
    </main>
  );
}
function ArrowRightFallback() {
  return <span aria-hidden="true">→</span>;
}
